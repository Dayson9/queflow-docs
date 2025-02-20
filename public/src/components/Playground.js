import { Component } from 'queflow'
import Editor from '../nuggets/Editor.js'

const width = window.innerWidth
const iframeSrc = window.location.host === "queflowjs.vercel.app" ? "preview.html" : "./public/preview.html"

const Playground = new Component('Playground', {
  data: {
    outText: "Result >",
    previewIsShown: false,
    example: {
      title: "Hello QueFlow"
    }
  },
  template: () => {
    return `
    <div id="main">
      <div class="top-bar flex-row">
        <Icon { class: "bx bx-menu outline", size: 22 } />
        <div class="title inter">
          <Text { txt: "{{ example.title }}", size: 20, weight: 400, class: "outline", color: "teal" } />
        </div>
        <div class="right flex-row">
          <Icon { class: "bx bxs-download", size: 22 } />
          <Icon { class: "bx bx-copy", size: 22 } />
        </div>
      </div>
      <div id="editor"></div>
      <iframe id="preview" src="${iframeSrc}" display={{ previewIsShown ? 'block' : 'none' }}></iframe>
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
      height: 80vh;
      background: #050a0e;
      margin-top: 0px;
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
      background: linear-gradient(135deg, rgb(20, 138, 129), rgb(11, 76, 71));
      color: rgb(255,255,255,.9);
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
      top: 95px;
      background: #050a0e;
      padding: 0px;
      margin: 0px;
    `,
    '.top-bar': `
      width: 100%;
      height: 40px;
      background: transparent;
      border-bottom: 3px solid rgba(255, 255, 255, 0.3);
      padding-inline: 5px;
      box-sizing: border-box;
      color: rgb(255,255,255,.7);
    `,
    '.right': `
      width: 15%;
      height: auto;
    `,
    '.outline': `
      border: .5px solid rgb(255,255,255,.7);
      padding: 5px;
      border-radius: 5px;
    `,
    '.title': `
      max-width: 50%;
      overflow-x: scroll;
    `
  }
})

export default Playground