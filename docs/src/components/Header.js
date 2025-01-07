import { subComponent } from 'queflow'
import Navbar from './Navbar.js'

const Header = new subComponent('Header', {
  template: () => {
    return `
      <header>
        <div class="title">
          <img src="./src/assets/img/queflow.png" alt="QueFlowJS Icon">
          <span>QueFlowJS</span>
        </div>
        
        <div class="right">
          <i class="bx bx-sun pxp-el6"></i>
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
       box-shadow: rgba(255, 255, 255, 0.3) 5px 5px 0px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
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
      width: 55px;
      height: 100%;
    `,

    '.title span': `  
      transform: translate(5px, 10px);
      color: rgb(255,255,255,.9);
    `,
    '.right': `
      color: white;
      width: 30%;
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