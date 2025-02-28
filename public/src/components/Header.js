import { Component } from 'queflow'
import Navbar from './Navbar.js'

const width = window.innerWidth

const Header = new Component('Header', {
  template: () => {
    return `
      <header class='flex-row maren' background={{ $theme.mode == 'dark' ? 'rgb(5, 10, 5)' : 'white' }} color={{ $theme.mode == 'dark' ? 'rgb(255,255,255,.9)' : 'black' }} border-bottom="5px solid rgba({{ $theme.mode == 'dark' ? '255, 255, 255, 0.3' : '0, 0, 0, 0.3' }})">
        <div class="title" onclick={{ toPage('/') }}>
          <img src="./queflow.jpg" alt="QueFlowJS Icon">
          <span>QueFlowJS</span>
        </div>
        
        <div class="right">
          <Icon { class: "bx bx-{{ $theme.mode == 'dark' ? 'sun' : 'moon' }}", click: "$theme.mode = $theme.mode == 'dark' ? 'light' : 'dark'", size: 25 } />
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
      width: 50px;
      height: 50px;
    `,

    '.title span': `  
      transform: translate(5px, 10px);
    `,
    '.right': `
      width: ${ width < 768 ? 30 : 15 }%;
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