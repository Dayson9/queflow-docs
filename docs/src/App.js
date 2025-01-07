import { QComponent } from 'queflow'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Text from './nuggets/Text.js'

const App = new QComponent('#app', {
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
    window.addEventListener('popstate', () => {
      const path = window.location.pathname
      loadComponent(path)
    })
  },
  stylesheet: {
    '*': `
      font-family: "Almarena";
    `
  }
})

App.render()