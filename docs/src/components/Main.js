import { subComponent } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'

const Main = new subComponent('Main', {
  data: {
    component: '<Home/>'
  },
  template: () => {
    return `
      <>
        <Home/>
        <GetStarted/>
      </>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `
  }
})

export default Main