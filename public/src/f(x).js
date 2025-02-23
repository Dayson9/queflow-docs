var timerInt, editor, preview, editorInput;

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
  data: {
    msg: "Hello World."
  },
  template(){
    return \`
      <h1 color="wheat">{{ msg }}</h1>
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

    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark', // Base theme (vs, vs-dark, hc-black)
      inherit: true, // Inherit base theme properties
      rules: [
        { token: 'string', foreground: 'F5DEB3' }
    // Add more customization rules here
  ],
      colors: {
        'editor.background': '#050a0e',
        // Add more color customizations here
      }
    })

    monaco.editor.setTheme('myCustomTheme')
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
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadExample(key, data) {
  data.example.title = key
  key = key.toLowerCase().replaceAll(' ', '-')
  if (editor.getValue() !== exampleSourceCode[key])
    editor.setValue(exampleSourceCode[key])
    updatePreview()
}



const exampleSourceCode = {
  "hello-world": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    msg: "Hello World."
  },
  template(){
    return \`
      <h1 color="wheat">{{ msg }}</h1>
    \`
  }
})

MyApp.render()`,
  "styling": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    msg: "Hello World."
  },
  template(){
    return \`
      <h1>{{ msg }}</h1>
    \`
  },
  stylesheet: {
    'h1': \`
      color: wheat;
      text-align: center;
    \`
  }
})

MyApp.render()`
}