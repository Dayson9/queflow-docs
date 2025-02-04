import { Nugget } from 'queflow'

const Paragraph = new Nugget("Paragraph", {
  template: (data) => {

    const hlReg = /\[[^\[]+\]/g
    
    data.txt = data.txt.replace(hlReg, (match) => `<span class="highlighted" ${ data.font ? `font-family="${data.font}"` : '' }>${ match.slice(1, match.length-1)}</span>`)
   
    return `
      <span ${ data.align ? 'text-align={{ align }}' : '' } class="inter" ${ data.top ? 'margin-top="{{ top }}px"' : '' }>
        {{ txt }}
      <span>
    `
  },

  stylesheet: {
    'span': `
      font-size: 17;
      text-align: left;
      display: block;
 `
  }
})

export default Paragraph