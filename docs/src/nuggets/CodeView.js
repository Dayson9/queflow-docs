import { Nugget } from 'queflow'

const CodeView = new Nugget("CodeView", {
  template: (data) => {
    const out = data.code.map((code) => {
      code = code.replaceAll(' ', '&nbsp;')
      return `
        <code class='language-js'>
        <Text { txt: '${ code }', size: 14, align: 'left', weight: 300, font: 'Monospace' } />
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
      padding-inline: 13px;
      box-sizing: border-box;
    `,
    'code' : `
      display: block;
      background: transparent!important;
    `
  }
})

export default CodeView