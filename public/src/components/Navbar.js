import { Component } from 'queflow'

const Navbar = new Component('Navbar', {
  data: {
    left: -100
  },
  template: () => {
    return `
      <nav class="inter" left={{ left+'%' }} transition=".3s">
        <Icon { class: 'bx-x', size: 30, click: 'data.left = -100' } />
        <ul font-size="20px">
          <li>
            <Link { to: "/docs", label: "Documentation" } />
          </li>
          <li>
            <Link { to: "/playground", label: "Playground" } />
          </li>
          <li>
            <Link { to: "/examples", label: "Examples" } />
          </li>
          <li>
            <Link { to: "/showcase", label: "Showcase" } />
          </li>
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
   `,
   'a': `
    color: rgb(255,255,255,.9);
   `
  }
})

export default Navbar