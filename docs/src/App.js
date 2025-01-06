import { QComponent } from 'queflow'
import Main from './components/Main.js'
import Text from './nuggets/Text.js'

const App = new QComponent('#app', {
  data: {},
  template: () => {
    return `<Main/>`
  },

  run: (instance) => {

  },
  stylesheet: {
    '*': `
      font-family: "Almarena";
    `
  }
})

App.render()