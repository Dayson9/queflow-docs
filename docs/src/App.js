import { App } from 'queflow'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Text from './nuggets/Text.js'

const Documentation = new App('#app', {
  data: {},
  template: () => {
    return `
      <Header/>
      <Main/>
      <Footer/>
    `
  },

  run: () => {
    currentComponent = Home;
    GetStarted.hide()
    QComp.hide()
    Compo.hide()
    ProjectStructure.hide()
    Nuggets.hide()
    window.addEventListener('popstate', () => {
      const path = window.location.pathname
      loadComponent(path)
    })
  },
  stylesheet: {
    "@font-face": `
      font-family: 'Inter';
      font-display: swap;
      src: url('./src/assets/Inter_18pt-Medium.ttf');
      font-weight: 400;
      font-style: normal;
    `,
    '.inter': 'font-family: "Inter";',
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