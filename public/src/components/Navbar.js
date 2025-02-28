import { Component } from 'queflow'

const Navbar = new Component('Navbar', {
  data: {
    left: -100
  },
  template: () => {
    return `
      <nav class="inter"
        left={{ left+'%' }}
        background={{ $theme.mode == 'dark' ? 'rgb(5, 10, 5)' : 'white' }}
        color={{ $theme.mode == 'dark' ? 'rgb(255,255,255,.9)' : 'black' }}
        box-shadow="2px 0px 0px rgba({{ $theme.mode == 'dark' ? '255,255,255,.3' : '0,0,0,0.3' }})"
        >
        <Icon { class: "bx-x", size: 30, click: "data.left = -100" } />
        <ul font-size="20px" color={{ $theme.mode == 'dark' ? 'rgb(255,255,255,.9)' : 'black' }}>
          <li>
            <Link { to: "/docs", label: "Documentation" } />
          </li>
          <li>
            <Link { to: "/playground", label: "Playground" } />
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
      width: ${ window.innerWidth < 768 ? 75 : 45 }%;
      height: ${ window.innerWidth < 768 ? 100 : 65 }vh;
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
      color: inherit;
   `,
    'a': `color: inherit;`
  }
})

export default Navbar