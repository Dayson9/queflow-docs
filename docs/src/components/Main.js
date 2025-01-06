import { subComponent } from 'queflow'
import Home from './Home.js'

const Main = new subComponent('Main', {
  template: () => {
    return `
      <Home/>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `
  }
})

export default Main