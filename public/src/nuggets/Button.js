import { Nugget } from 'queflow'

const Button = new Nugget("Button", {
  template(data) {
    return `
      <button ${ data.w ? 'width="{{ w }}px"' : '' }
        class="reg-btn"
        onclick={{ click }}
        background={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(12, 16, 18)' }}
        color={{ $theme.mode == 'dark' ? 'rgb(28, 32, 36)' : '#FCFCFD' }}
        >{{ label }}</button>
    `
  },
  stylesheet: {
    '.reg-btn': `
      padding-inline: 20px;
      padding-block: 8px;
      color: inherit;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      font-size: 17px;
    `
  }
})

export default Button