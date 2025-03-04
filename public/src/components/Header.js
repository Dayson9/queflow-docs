import { Component } from 'queflow'
import Navbar from './Navbar.js'

const width = window.innerWidth

const Header = new Component('Header', {
  template: () => {
    return `
      <header class='flex-row maren' background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }} border-bottom="5px solid rgba({{ $theme.mode == 'dark' ? '255, 255, 255, 0.3' : '0, 0, 0, 0.3' }})">
        <div class="title" onclick={{ toPage('/') }}>
          <img src="./queflow.png" alt="QueFlowJS Icon">
          <span>QueFlowJS</span>
        </div>
        
        <div class="right">
          <Icon { class: "bx bxl-github", size: 25, weight: 700, link: "https://github.com/dayson9/queflowjs" } />
          <Icon { class: "bx bx-{{ $theme.mode == 'dark' ? 'sun' : 'moon' }}", click: "switchMode()", size: 25 } />
          <Icon { class: "bx bx-menu", click: "Navbar.data.left = 0", size: 25 } />
        </div>
      </header>
      <Navbar/>
    `
  },

  stylesheet: {
    'header': `  
       width: 100%;
       box-sizing: border-box;
       padding: 0px 5px;
       height: 55px;
    `,
    '.title': `
      width: 40%;
      height: 100%;
      display: inherit;
      align-items: inherit;
        `,

    'img': `  
      width: 43px;
      height: 43px;
    `,

    '.title span': `  
      transform: translate(5px, 10px);
    `,
    '.right': `
      width: ${ width < 768 ? 37 : 15 }%;
      height: 100%;
      display: inherit;
      align-items: inherit;
      justify-content: space-around;
    `,

    '.pxp-el6': `  
      font-size: 20px;
    `
  }
})

export default Header