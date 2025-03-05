import { Component } from 'queflow'
import FoldableMenu from '../nuggets/FoldableMenu.js'

const width = window.innerWidth
const iframeSrc = window.location.host === "queflowjs.vercel.app" ? "./src/playground/preview/preview.html" : "./public/src/playground/preview/preview.html"

const Playground = new Component('Playground', {
  data: {
    outText: "Result >",
    previewIsShown: false,
    copiedIsShown: false,
    menuIsOpen: false,
    example: {
      title: "Hello World",
      menuSwitch: [0,0,0,0,0,0,0,0]
    }
  },
  template: () => {
    return `
    <div id="main" class="inter" filter={{ menuIsOpen ? 'blur(7px)' : 'none' }} background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }}>
      <div class="top-bar flex-row" border-bottom-color={{ $theme.mode == 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0,0,0,.3)' }}>
        <Icon { class: "bx bx-menu outline", size: 25, click: "data.menuIsOpen = true; editorInput?.setAttribute('disabled', 1)" } />
        <div class="outline title flex-row">
          <Text { txt: "{{ example.title }}", size: 20, weight: 400 } />
        </div>
        <div class="right flex-row">
          <Icon { class: "bx bxs-download", size: 22, click: "if(!data.previewIsShown) downloadTextFile('App.js', editor.getValue())" } />
          <Icon { class: "bx bx-copy", size: 22, click: "if(!data.previewIsShown) copyToClipboard(editor.getValue())" } />
        </div>
      </div>
      <div id="editor"></div>
      <iframe id="preview" src="${iframeSrc}" display={{ previewIsShown ? 'block' : 'none' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }}></iframe>
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
     <div class="menu outline" display={{ menuIsOpen ? 'block' : 'none' }} background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }} border-color={{ $theme.mode == 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgb(0, 0, 0, .3)' }}>
       <FoldableMenu {
         items: [
          { label: "Introduction", children: ["Hello World", "Styling", "Dynamic Attributes"] },
          { label: "Reactivity", children: ["Simple Expressions", "Complex Expressions"] },
          { label: "Event Handling", children: ["Single Line Handlers", "Multiline Handlers", "Event Arguments"] },
          { label: "Components", children: ["Defining a Component", "Reactivity in Components", "Nesting Components"] },
          { label: "Nuggets", children: ["Defining a Nugget", "Nested Nuggets", "Reactivity in Nuggets", "Passing Children to Nuggets"] },
          { label: "Templates", children: ["Defining a Template", "Reusability"] },
          { label: "Global State", children: ["Defining a Global State", "Auto-save State"] },
          { label: "Miscellaneous", children: ["Fetching data", "Digital clock", "SVG"] }
          ]} />
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
      margin-top: 0px;
    `,
    "#editor": `
      width: 100%;
      height: 90vh;
      border: none;
      background: fixed;
      transform: translateY(-15px);
   `,
    "button": `
      width: 100%;
      height: 45px;
      border: none;
      background: linear-gradient(135deg, rgb(20, 138, 129), rgb(11, 76, 71));
      color: #FCFCFD;
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
      top: 55px;
      background: inherit;
      padding: 0px;
      margin: 0px;
      padding-bottom: 45px;
    `,
    '.top-bar': `
      width: 100%;
      height: 40px;
      background: inherit;
      border-bottom-width: 1.5px;
      border-bottom-style: solid;
      padding-inline: 5px;
      box-sizing: border-box;
      color: inherit;
      transform: translateY(-20px);
    `,
    '.right': `
      width: ${ width < 768 ? 15 : 5 }%;
      height: auto;
    `,
    '.outline': `
      border: 1px solid rgba(255, 255, 255, .3);
      padding-inline: 3px;
      border-radius: 5px;
    `,
    '.title': `
      max-width: 50%;
      height: 55%;
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
      color: inherit;
      background: inherit;
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
      background: inherit;
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