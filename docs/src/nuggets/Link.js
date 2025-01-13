import { Nugget } from "queflow"

const Link = new Nugget('Link', {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g

    data.text = data.text.replace(hlReg, (match) => `<span class="highlighted" onclick=${ data.click }>${ match.slice(1, match.length-1)}</span>`)
   
    return `
      <span id="err">{{ text }}</span>
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
    `
  }
})

export default Link