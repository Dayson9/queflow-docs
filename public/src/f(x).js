var timerInt, editor, preview, editorInput

function downloadFile(filePath, fileName = 'queflow-starter-template.zip') {
  const link = document.createElement('a')
  link.href = filePath
  link.download = fileName
  Main.element.appendChild(link)
  link.click()
  Main.element.removeChild(link)
}

function loadEditor() {
  preview = document.getElementById("preview")

  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } })
  require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
      value: `import { App } from 'queflow'

const MyApp = new App('#app', {
      template() {
        return \`
      <h1 color="wheat">Hello, World.</h1>
    \`
  }
})

MyApp.render()`,
      language: 'javascript',
      theme: 'vs-dark',
      lineNumbers: "on",
      minimap: { enabled: 0 },
      scrollbar: { horizontal: "auto", vertical: "auto" },
      overviewRulerLanes: 0,
      wordWrap: "on",
      renderLineHighlightOnlyWhenFocus: true
    })
    loadTheme($theme.mode == 'dark')
    editorInput = document.getElementById("editor").querySelector("textarea")

    editorInput.addEventListener("input", updatePreview)
    updatePreview()
  })
}

function updatePreview() {
  preview.contentWindow.postMessage({ type: 'command', action: 'run', code: editor.getValue() }, null)
}

async function copyToClipboard(text = "") {
  await navigator.clipboard.writeText(text).
  then(() => {
    Playground.data.copiedIsShown = true
    setTimeout(() => Playground.data.copiedIsShown = false, 2000)
  }).catch(err => {
    console.error('Failed to copy text: ', err)
  })
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function loadExample(key, data) {
  data.example.title = key
  key = key.toLowerCase().replaceAll(' ', '-')
  if (editor.getValue() !== sourceCode[key])
    editor.setValue(sourceCode[key])
  updatePreview()

  editorInput?.removeAttribute('disabled')
}

function loadTheme(isDark) {
  monaco.editor.defineTheme('my-custom-theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [
    // Customize token colors here
      { token: 'comment', foreground: isDark ? '829ACB' : '808080', fontStyle: 'italic' },
      { token: 'string', foreground: isDark ? 'F5DEB3' : '008000' },
      { token: 'number', foreground: '22A077' },
      { token: 'boolean', foreground: '0000FF' },
      { token: 'keyword', foreground: isDark ? '1E90E0' : '800080', fontStyle: 'bold' },
      { token: 'identifier', foreground: isDark ? 'C0C0C0' : '333333' },
      { token: 'variable', foreground: '225599' },
      { token: 'variable.parameter', foreground: '225599', fontStyle: 'italic' },
      { token: 'variable.other.readwrite', foreground: '225599' },
      { token: 'variable.other.constant', foreground: '008080' },
      { token: 'operator', foreground: isDark ? 'FFFFFF' : '000000' },
      { token: 'delimiter', foreground: isDark ? 'C0C0C0' : '000000' },
      { token: 'delimiter.bracket', foreground: isDark ? 'C0C0C0' : '000000' },
      { token: 'invalid', foreground: 'FF0000' },
  ],
    colors: {
      'editor.background': isDark ? '#050a0e' : '#f8f8f8'
    }
  })
  
  monaco.editor.setTheme('my-custom-theme')
}

function switchMode() {
  const isDark = $theme.mode === 'dark'
  $theme.mode = isDark ? 'light' : 'dark'
  if(globalThis['monaco']) loadTheme(!isDark)
}