import { Nugget } from 'queflow'

const Text = new Nugget("Text", {
  template: (data) => {
    return `
      <span ${data.align ? 'text-align={{ align }}' : ''} ${data.color ? 'color={{ color }}' : ''} ${data.font ? ' font-family={{ font }}' : ''} ${data.size ? ' font-size="{{ size }}px"' : ''} ${data.weight ? ' font-weight={{ wt }}' : ''} ${ data.bottom ? 'margin-bottom="{{ bottom }}px"' : '' } ${ data.class ? 'class={{ class }}' : ''} ${ data.click ? 'onclick={{ click }}' : ''}>{{ txt }}</span>
    `
  },

  stylesheet: {
    'span': `
      display: block;
      font-size: 17px;
      text-align: center;
      font-weight: 540;
      line-height: 1.5em;
    `
  }
})

export default Text