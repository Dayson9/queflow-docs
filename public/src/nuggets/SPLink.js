import { Nugget } from "queflow"

const SPLink = new Nugget('SPLink', {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g

    data.label = data.label.replace(hlReg, (match) => `<span>&nbsp;${ match.slice(1, match.length-1)}</span>`)

    return `<a href=#{{ id }} class="inter">{{ label }}</a>`
  },
  stylesheet: {
    'a': `
      color: rgba(255,255,255,.7);
      font-size: 18px;
      font-weight: 600;
      display: block;
      text-decoration: none;
      line-height: 1.5em;
      margin-left: 4%;
      margin-top: 5px;
    `,
    'span': `
      background: none!important;
      color: dodgerblue;
      `
  }
})

export default SPLink