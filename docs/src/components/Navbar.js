import { Component } from 'queflow'

const Navbar = new Component('Navbar', {
  data: {
    left: -100
  },
  template: () => {
    return `
      <nav left={{ this.data.left+'%' }} transition=".3s">
        <Icon { class: 'bx-x', size: 30, click: 'this.data.left = -100' } />
        <ul font-size="20px">
          <li>Documentation</li>
          <li>Installation</li>
          <li>Playground</li>
          <li>Examples</li>
          <li>Showcase</li>
        </ul>
      </nav>
    `
  },

  stylesheet: {
    'nav': `
      width: 85%;
      height: 100vh;
      background: rgb(5,10,5);
      box-shadow: 2px 0px 0px rgba(255,255,255,.3);
      position: fixed;
      top: 0;
      z-index: 1;
      color: rgb(255,255,255,.9);
      box-sizing: border-box;
    `,
    'i': `
      position: absolute;
      right: 0;
      margin-top: 10px;
      margin-right: 10px;
   `,
    'ul li': `
      margin-block: 20px;
   `,

    'ul': `
      margin-top: 50px;
      list-style-type: none;
   `
  }
})

export default Navbar