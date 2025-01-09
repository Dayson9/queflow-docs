import { Nugget } from 'queflow'

const Paragraph = new Nugget("Paragraph", {
  template: (data) => {
    const hlReg = /\[[^\[]+\]/g
    
    data.txt = data.txt.replace(hlReg, (match) => `<span class="highlighted">${ match.slice(1, match.length-1)}</span>`)
    
    return `
    
      <span color='rgba(255, 255, 255, 0.9)' ${ data.top ? 'margin-top={{ top }}px' : '' }>
        {{ txt }}
      <span>
    `
  },

  stylesheet: {
    'span': `
      font-size: 17;
      text-align: left;
      display: block;
      font-weight: 300;
 `,
    '.highlighted': `
      background: rgb(11, 76, 71);
      padding: 3px;
      border-radius: 3px;
      display: inline;
 `
  }
})

export default Paragraph