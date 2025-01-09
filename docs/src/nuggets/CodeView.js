import { Nugget } from 'queflow'

const CodeView = new Nugget("CodeView", {
  template: (data) => {
    const out = data.codes.map((code) => {
      const pxl = indent(code)
      return `
        <code class='language-js' margin-left="${pxl}px" font-family='monospace'>
        <Text { txt: '${ code }', align: 'left', weight: 300, font: 'monospace' } />
        </code>
    `
    }).join('\n')

    return `
      <div class='container'>
        ${out}
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
    `,
    'code' : `
      display: block;
      background: transparent!important;
      font-size: 12px;
    `,
   'code *': 'font-size: 12px;'
  }
})

export default CodeView