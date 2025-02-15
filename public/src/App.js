import { App } from 'queflow'
import { onNavigate } from 'queflow'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Text from './nuggets/Text.js'

import hljs from './assets/hljs.js'
import javascript from './assets/js.min.js'
//import xml from './assets/xml.min.js'

const Documentation = new App('#app', {
  data: {},
  template: () => {
    return `
      <Header/>
      <Main/>
      <Footer/>
    `
  },

  run: function() {
    hljs.registerLanguage('javascript', javascript)
    // hljs.registerLanguage('xml', xml)
    hljs.highlightAll()

    onNavigate((path) => {
      Navbar.data.left = -100
      hljs.highlightAll()
      if (path !== '/docs_nuggets') clearInterval(timerInt)
    }, this)

   //setTimeout(() => toPage('/docs_nuggets'), 250)
  },
  stylesheet: {
    '.inter': `
      font-family: "Inter";
      color: rgba(255,255,255,.8);
      `,
    '.maren': 'font-family: Almarena;',
    'code *, code': 'font-family: "monospace";',

    'section span': 'line-height: 25px;',

    '.flex-row': `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   `,

    '.flex-col': `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
   `
  }
})

Documentation.render()