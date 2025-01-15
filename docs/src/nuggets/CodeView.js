import { Nugget } from 'queflow'

const CodeView = new Nugget("CodeView", {
  template: (data) => {
    return `
     ${ data.filename ? "<div class='top inter'>{{ filename }}</div>" : "" }
     <div border-radius="${ data.filename ? '0px 0px 10px 10px' : '10px' }" class="main">
      <pre class="language-js"><code>{{ code }}</code></pre>
     </div>
    `
  },
  stylesheet: {
    'div' : `
      width: 100%;
      height: auto;
      background: rgb(30, 35, 35);
      padding-block: 20px;
      margin-top: 15px;
      margin-bottom: 28px;
      padding-inline: 10px;
      box-sizing: border-box;
      overflow-x: scroll;
    `,
    '.top': `
      height: 40px;
      border-radius: 10px 10px 0px 0px;
      color: rgba(255,255,255,.9);
      padding-left: 12px;
      margin-bottom: -10px;
      display: flex;
      align-items: center;
      overflow: hidden;
    `,
    "pre, code": `
      text-align: left;
      background: transparent!important;
      padding: 0!important;
      margin: 0!important;
      font-size: 13px;
      font-family: monospace!important;
  `,
  '.main::-webkit-scrollable-thumb': `
    width: 30%;
    height: 5px;
    border-radius: 5px;
    background: teal;
  `
  }
})

export default CodeView