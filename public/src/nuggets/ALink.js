import { Nugget } from "queflow"

const ALink = new Nugget('ALink', {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g

    if (data.click) {
      data.text = data.text.replace(hlReg, (match) => `<span class="highlighted {{ $theme.mode == 'dark' ? 'hl-dark' : 'hl-light' }}" onclick=${ data.click }>${ match.slice(1, match.length-1)}</span>`)
    } else {
      data.text = data.text.replace(hlReg, (match) => `<a class="highlighted" href={{ url }} target="_blank">${ match.slice(1, match.length-1)}</a>`)
    }
    return `
      <span class="inter">${ data.text }</span>
    `
  },
  stylesheet: {
    'span': `
      color: inherit;
      font-size: 17;
      display: inline;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5em;
    `,
    '.highlighted': `
      color: dodgerblue;
      text-decoration: underline;
      background: none!important;
    `
  }
})

export default ALink