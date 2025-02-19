import { Component } from 'queflow'
import Editor from '../nuggets/Editor.js'

const width = window.innerWidth

const Playground = new Component('Playground', {
  data: {
    outText: "Result >",
    previewIsShown: false
  },
  template: () => {
    return `
    <div id="main">
      <div id="editor"></div>
      <iframe id="preview" src="preview.html" display={{ previewIsShown ? 'block' : 'none' }}></iframe>
      <button class="inter" onclick={{
        if(data.outText === "Result >") {
          data.outText = "&lt; Code"
          updatePreview()
        } else {
          data.outText = "Result &gt;"
        }
        data.previewIsShown = !data.previewIsShown
       }}>{{ outText }}</output>
    </div>
      `
  },
  onNavigate() {
    if (!this?.isInitialized) {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs/loader.min.js"
      document.head.appendChild(script)
      this.isInitialized = true
      script.onload = () => loadEditor()
    }
  },
  stylesheet: {
    "#main": `
      width: 100vw;
      height: 85vh;
      background: #050a0e;
      margin-top: 36px;
    `,
    "#editor": `
      width: 100%;
      height: 100%;
      border: none;
      position: fixed;
      margin-top: 5px;
   `,
    "button": `
      width: 100%;
      height: 45px;
      border: none;
      background: teal;
      color: white;
      font-size: 1.1em;
      font-weight: 500;
      position: fixed;
      bottom: 0;
    `,
    'iframe': `
      width: 100vw;
      height: 100%;
      border: none;
      position: absolute;
      top: 92px;
      background: #050a0e;
      padding: 0px;
      margin: 0px;
    `
  }
})

export default Playground