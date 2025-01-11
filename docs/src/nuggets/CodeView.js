import { Nugget } from 'queflow'

const CodeView = new Nugget("CodeView", {
  template: () => {
    return `
     <div>
      <pre class="language-js"><code>{{ code }}</code></pre>
     </div>
    `
  },
  stylesheet: {
    'div' : `
      width: 95%;
      height: auto;
      border-radius: 10px;
      background: rgb(30, 35, 35);
      padding-block: 20px;
      margin-top: 15px;
      margin-bottom: 28px;
      padding-inline: 10px;
      box-sizing: border-box;
      overflow-x: scroll;
    `,
    "pre, code": `
      text-align: left;
      background: transparent!important;
      padding: 0!important;
      margin: 0!important;
      font-size: 13px;
      font-family: monospace;
`
  }
})

export default CodeView