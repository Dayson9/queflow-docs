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
    `,
    
    '.preview': `
      width: 80%;
      height: auto;
      border: 1px solid rgb(255, 255, 255, .3);
      box-sizing: border-box;
      border-radius: 10px;
      text-align: center;
      background: rgb(30, 35, 35);
      margin-block: 20px;
      font-family: serif;
    `
  }
})

export default Main