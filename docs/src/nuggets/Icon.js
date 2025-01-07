import { Nugget } from 'queflow'

const Icon = new Nugget("Icon", {
  template: (data) => {
    return `
      <i ${data.color ? 'color={{ color }}' : ''}  ${data.size ? ' font-size={{ size }}px' : ''} ${data.weight ? ' font-weight={{ weight }}' : ''}  ${ data.class ? 'class="bx {{ class }}"' : ''} ${data.click ? 'onclick={{ click }}' : '' }></i>
    `
  },

  stylesheet: {
    'i': `
      display: block;
      font-size: 17px;
      text-align: center;
      font-weight: 540;
    `
  }
})

export default Icon