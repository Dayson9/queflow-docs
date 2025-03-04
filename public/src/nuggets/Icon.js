import { Nugget } from 'queflow'

const Icon = new Nugget("Icon", {
  template: (data) => {
    const output = `
      <i ${data.color ? 'color={{ color }}' : ''}  ${data.size ? ' font-size="{{ size }}px"' : ''} ${data.weight ? ' font-weight={{ weight }}' : ''}  ${ data.class ? 'class="bx {{ class }}"' : ''} ${data.click ? 'onclick="{{ click }}"' : '' }></i>
    `
    
    if (data.link) {
      return `<a href={{ link }} target="_blank">${output}</a>`
    } else {
      return output
    }
  },

  stylesheet: {
    'i': `
      display: block;
      font-size: 17px;
      text-align: center;
      font-weight: 540;
    `,
    'a': `
      text-decoration: none;
      color: inherit;
    `
  }
})

export default Icon