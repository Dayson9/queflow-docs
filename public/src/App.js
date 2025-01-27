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

  run: function() {
    currentComponent = Home
    GetStarted.hide()
    Syntax.hide()
    App_.hide()
    Compo.hide()
    ProjectStructure.hide()
    Events.hide()
    Nuggets.hide()
    Template_.hide()
    Showcase.hide()
    Docs.hide()
    Playground.hide()
    Examples.hide()

    const path = window.location.pathname
    window.addEventListener('popstate', () => {
      const path = window.location.pathname
      loadComponent(path)
    })

    setTimeout(() => {
      const script = document.createElement('script')
      script.src = './src/assets/prisms.js'
      this.element.appendChild(script)
    }, 200)

    history.pushState({}, '',path)
    loadComponent(path)
    window.scrollTo(0, 0)
  },
  stylesheet: {
    "@font-face": `
      font-family: 'Inter';
      font-display: swap;
      src: url('./src/assets/Inter_18pt-Medium.ttf');
      font-weight: 400;
      font-style: normal;
    `,
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