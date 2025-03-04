import { Component } from 'queflow'

const Footer = new Component('Footer', {
  template: () => {
    return `
      <footer class="flex-col"
        border-color={{ $theme.mode == 'dark' ? '#353B41' : '#D7D9DF' }}
        background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }}>
        <Text { txt: "© ${new Date().getFullYear()} QueFlow. Built in 🇳🇬 by Sodiq Babatunde.", } />
        <div class="flex-row">
          <Icon { class: "bx bxl-github", size: 25, weight: 700, link: "https://github.com/dayson9" } />
          <Icon { class: "bx bxl-twitter", size: 25, weight: 700, link: "https://x.com/jstunde6245" } />
          <Icon { class: "bx bxl-gmail", size: 25, weight: 700, link: "mailto: tundedev9@gmail.com" } />
        </div>
      </footer>
      `
  },

  stylesheet: {
    'footer': `
      width: 100%;
      height: auto;
      font-family: Inter;
      margin-top: 50px;
      border-top: 1px solid #353B41;
      box-sizing: border-box;
      padding-block: 20px 10px;
    `,
    '.flex-row': `
      width: 40%;
      height: 40px;
    `
  }
})

export default Footer