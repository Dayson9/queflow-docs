import { Nugget } from "queflow"

const width = window.innerWidth

const Editor = new Nugget('Editor', {
  template: (data) => {
    return `
      <div class="editor flex-row">
        <div class="lineno"></div>
        <pre contenteditable="true" class="language-js" onclick={{ hljs.highlightAll() }}><code>{{ code }}</code></pre>
       <button class="inter" onclick={{
        if(data.outText === "Result >") {
          data.outText = "&lt; Code"
        } else {
          data.outText = "Result &gt;"
        }
       }}>{{ outText }}</output>
      </div>
    `
  },
  stylesheet: {
    ".editor": `
      width: 100%;
      height: 80vh;
      background: transparent;
    `,
    'pre': `
      color: white;
      width: 100%;
      height: 100%;
      background: rgb(28, 32, 36);
      margin-top: 30px;
      padding-left: 10px;
    `,
    'pre:focus': `
      border: none;
      outline: none;
    `,
    '.lineno': `
      width: 30px;
      height: 100%;
      background: transparent;
      border-right: 2px solid silver;
    `
  }
})

export default Editor