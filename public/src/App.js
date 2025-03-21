import { App, globalState } from 'queflow'
import { onNavigate } from 'queflow'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Text from './nuggets/Text.js'

import hljs from './assets/hljs.js'
import javascript from './assets/js.min.js'
//import xml from './assets/xml.min.js'
import sourceCode from './playground/utils/usables.js'

globalState('$theme', {
  mode: 'dark'
}, true)

const Documentation = new App('#app', {
  data: {},
  template: () => {
    return `
      <Header/>
      <Main/>
    `
  },

  run: function() {
    const path = window.location.pathname
    hideShowFooter(path)
    globalThis.sourceCode = sourceCode
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightAll()
    onNavigate((path) => {
      Navbar.data.left = -100
      hljs.highlightAll()
      if (path !== '/nuggets') clearInterval(timerInt)

      hideShowFooter(path)
    }, this)

     //setTimeout(() => toPage('/template'), 150)
  },
  stylesheet: {
    '.inter': `
      font-family: "Inter";
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