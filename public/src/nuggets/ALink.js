import { Nugget } from "queflow"

const ALink = new Nugget('ALink', {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g

    data.text = data.text.replace(hlReg, (match) => `<span class="highlighted" onclick=${ data.click }>${ match.slice(1, match.length-1)}</span>`)
   
    return `
      <span class="inter">{{ text }}</span>
    `
  },
  stylesheet: {
    'span': `
      color: rgba(255,255,255,.9);
      font-size: 17;
      font-weight: 300;
      display: inline;
    `,
    '.highlighted': `
      color: dodgerblue;
      text-decoration: underline;
      background: none!important;
    `
  }
})

export default ALink