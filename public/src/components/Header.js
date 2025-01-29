import { Component } from 'queflow'
import Navbar from './Navbar.js'

const width = window.innerWidth

const Header = new Component('Header', {
  template: () => {
    return `
      <header class='flex-row maren'>
        <div class="title" onclick={{ toPage('/') }}>
          <img src="./queflow.jpg" alt="QueFlowJS Icon">
          <span>QueFlowJS</span>
        </div>
        
        <div class="right">
          <i class="bx bx-menu pxp-el7" onclick={{ Navbar.data.left = 0 }}></i>
        </div>
      </header>
      <Navbar/>
    `
  },

  stylesheet: {
    'header': `  
       width: 100%;
       background: transparent;
       border-bottom: 5px solid rgba(255, 255, 255, 0.3);
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
      color: rgb(255,255,255,.9);
    `,
    '.right': `
      color: white;
      width: ${width < 768 ? 10 : 12}%;
      height: 100%;
      display: inherit;
      align-items: inherit;
      justify-content: space-around;
    `,

    '.pxp-el6': `  
      font-size: 20px;
    `,

    '.pxp-el7': `  
      font-size: 25px;
    `,
  }
})

export default Header