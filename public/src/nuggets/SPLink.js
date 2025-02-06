import { Nugget } from "queflow"

const SPLink = new Nugget('SPLink', {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g

    data.label = data.label.replace(hlReg, (match) => `<span>&nbsp;${ match.slice(1, match.length-1)}</span>`)

    return `<a href=#{{ id }}>{{ label }}</a>`
  },
  stylesheet: {
    'a': `
      color: rgba(255,255,255,.7);
      font-size: 17;
      font-weight: 600;
      display: inline;
      text-decoration: none;
    `,
    'span': `
      background: none!important;
      color: dodgerblue;
      `
  }
})

export default SPLink