import { Component } from 'queflow'
import Editor from '../nuggets/Editor.js'
import FoldableMenu from '../nuggets/FoldableMenu.js'

const width = window.innerWidth
const iframeSrc = window.location.host === "queflowjs.vercel.app" ? "./src/PlaygroundPreview/preview.html" : "./public/src/PlaygroundPreview/preview.html"

const Playground = new Component('Playground', {
  data: {
    outText: "Result >",
    previewIsShown: false,
    copiedIsShown: false,
    menuIsOpen: false,
    example: {
      title: "Hello World",
      menuSwitch: [0, 0, 0, 0]
    }
  },
  template: () => {
    return `
    <div id="main" class="inter" filter={{ menuIsOpen ? 'blur(7px)' : 'none' }}>
      <div class="top-bar flex-row">
        <Icon { class: "bx bx-menu outline", size: 25, click: "data.menuIsOpen = true; editorInput?.setAttribute('disabled', 1)" } />
        <div class="outline title">
          <Text { txt: "{{ example.title }}", size: 20, weight: 400 } />
        </div>
        <div class="right flex-row">
          <Icon { class: "bx bxs-download", size: 22, click: "downloadTextFile('App.js', editor.getValue())" } />
          <Icon { class: "bx bx-copy", size: 22, click: "copyToClipboard(editor.getValue())" } />
        </div>
      </div>
      <div id="editor"></div>
      <iframe id="preview" src="${iframeSrc}" display={{ previewIsShown ? 'block' : 'none' }}></iframe>
      <div class="copied flex-row" display={{ copiedIsShown ? 'flex' : 'none' }}>
        <Icon { class: "bx bxs-check-circle", size: 20, color: "teal" } />
        <span>Copied</span>
      </div>
      <button class="inter" onclick={{
        if(data.outText === "Result >") {
          if(!data.menuIsOpen)
          data.outText = "&lt; Code"
        } else {
          data.outText = "Result &gt;"
        }
        if(!data.menuIsOpen)
          data.previewIsShown = !data.previewIsShown
       }}>{{ outText }}</output>
     </div>
     <div class="menu outline" display={{ menuIsOpen ? 'block' : 'none' }}>
       <FoldableMenu {
         items: [
          { label: "Introduction", children: ["Hello World", "Styling", "Dynamic Attributes"] },
          { label: "Reactivity", children: ["Simple Expressions", "Complex Expressions"] },
          { label: "Event Handling", children: ["Single Line Handlers", "Multiline Handlers", "Event Arguments"] },
          { label: "Components", children: ["Defining a Component", "Reactivity in Components", "Nesting Components"] },
          { label: "Nuggets", children: ["Defining a Nugget", "Nested Nuggets", "Reactivity in Nuggets", "Passing Children to Nuggets"] },
          { label: "Templates", children: ["Defining a Template", "Reusability"] }]
       } />
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
      height: 90vh;
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
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-inline: 5px;
      box-sizing: border-box;
      color: rgb(255,255,255,.7);
    `,
    '.right': `
      width: ${ width < 768 ? 15 : 5 }%;
      height: auto;
    `,
    '.outline': `
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 3px;
      border-radius: 5px;
    `,
    '.title': `
      max-width: 50%;
      max-height: 70%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      -ms-overflow-style: none;
      scrollbar-width: none;
      padding-inline: 3px;
    `,
    '.title::-webkit-scrollbar': `
      display: none;
    `,
    '.copied': `
      width: ${ width < 768 ? 25 : 15 }%;
      height: 42px;
      color: rgb(255,255,255,.7);
      background: #050a0e;
      border: 1.3px solid rgba(255, 255, 255, 0.3);
      position: absolute;
      bottom: 30vh;
      left: ${ width < 768 ? 37.5 : 42.5 }%;
      border-radius: 7px;
      padding-inline: 4px;
      box-sizing: border-box;
    `,
    '.menu': `
      width: 270px;
      height: 70vh;
      position: absolute;
      background: #050a0e;
      top: 0;
      left: 0;
      text-align: left;
      margin: 20px 0 0 10px;
      padding: 12px 12px 0 0;
      overflow-y: scroll;
    `
  }
})

export default Playground