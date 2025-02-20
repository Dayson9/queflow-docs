var timerInt, editor, preview;

function downloadFile(filePath, fileName = 'queflow-starter-template.zip') {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  Main.element.appendChild(link);
  link.click();
  Main.element.removeChild(link);
}

function loadEditor() {
  preview = document.getElementById("preview")

  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });
  require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
      value: `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    msg: "Hello QueFlow."
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

MyApp.render()`,
      language: 'javascript',
      theme: 'vs-dark',
      lineNumbers: "on",
      minimap: { enabled: 0 },
      scrollbar: { horizontal: "auto", vertical: "auto" },
      overviewRulerLanes: 0,
      wordWrap: "on",
      renderLineHighlightOnlyWhenFocus: true
    });

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
    });

    monaco.editor.setTheme('myCustomTheme');
  });

  preview.contentWindow.postMessage({ type: 'command', action: 'run', code: editor.getValue() }, 'http://localhost:7700/sandbox.html');
}

function updatePreview() {
  preview.contentWindow.postMessage({ type: 'command', action: 'run', code: editor.getValue() }, null);
}

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}