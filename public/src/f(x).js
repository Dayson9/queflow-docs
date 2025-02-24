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

  editorInput?.removeAttribute('disabled')
}



const exampleSourceCode = {
  "hello-world": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  template(){
    return \`
      <h1 color="wheat">Hello, World.</h1>
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
    return "<h1>{{ msg }}</h1>"
  },
  stylesheet: {
    'h1': \`
      color: wheat;
      text-align: center;
    \`
  }
})

MyApp.render()`,
  "dynamic-attributes": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    color: "#829AAB"
  },
  template(){
    return \`
      <div margin-left="30px">
        <h1 color={{ color }}>This is an H1 element with color: {{ color }}.</h1>
        <button onclick={{ data.color = data.color === '#829AAB' ? 'gold' : '#829AAB' }}>Change Color</button>
     </div>
    \`
  }
})

MyApp.render()`,

  "simple-expressions": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    count: 0
  },
  template(){
    return \`
      <div margin-left="20px" color="#829AAB">
        <h1>Count is: {{ count }}</h1>
        <button onclick={{ data.count++; }}>Increment</button>
     </div>
    \`
  }
})

MyApp.render()`,

  "complex-expressions": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    count: 0
  },
  template(){
    return \`
      <div margin-left="20px">
        <h2 color="#829AAB">{{ count }} is {{ count % 2 == 0 ? '' : 'not' }} divisible by 2.</h2>
        <button onclick={{ data.count++ }}>Increment</button>
     </div>
    \`
  }
})

MyApp.render()`,
  "single-line-handlers": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    label: "Click Me"
  },
  template(){
    return "<button onclick={{ alert(data.label) }}>{{ label }}</button>"
  }
})

MyApp.render()`,
  "multiline-handlers": `import { App } from 'queflow'

const MyApp = new App('#app', {
      data: {
        label: "Click Me"
      },
      template() {
        return \`
      <button onclick={{
        const label = data.label;
        const reversed = label.split('').reverse().join('');
        alert("Label: "+label);
        alert("Reversed: "+reversed); }}>{{ label }}</button>
    \`
  }
})

MyApp.render()`,
  "event-arguments": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    output: "Banana Island"
  },
  template(){
    return \`
      <p color="#829AAB">You typed: {{ output }}</p>
      <input type="text" oninput={{
        //[e] is an object containing the event argument
        const { target } = e;
        data.output = target.value; }} value="Banana Island"/>
    \`
  }
})

MyApp.render()`,
  "defining-a-component": `import { Component, App } from 'queflow' 

const MyComponent = new Component("MyComponent", {
  template() {
    return "<h1>My First Component</h1>"
  },
  stylesheet: {
    'h1': \`
      color: orchid;
      text-align: center;
      font-family: sans serif;
    \`
  }
})

const MyApp = new App('#app', {
  template() {
    return "<MyComponent/>"
  }
})

MyApp.render()`,
  "reactivity-in-components": `import { Component, App } from 'queflow'

const MyComponent = new Component('MyComponent', {
  data: {
    color: "#829AAB"
  },
  template() {
    return \`
      <h1 color={{ color }}>Change My Color</h1>
      <button onclick={{ data.color = data.color == "wheat" ? "#829AAB" : "wheat" }}>Toggle Color</button>
    \`
  },
  stylesheet: {
    'h1': \`
      text-align: center;
      transition: .7s;
      font-family: sans serif;
      font-weight: 900;
      font-size: 40px
    \`
  }
})

const MyApp = new App('#app', {
  template() {
    return "<MyComponent/>"
  }
})

MyApp.render()`
}