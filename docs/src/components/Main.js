import { subComponent } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'
import QComp from './QComp.js'

const Main = new subComponent('Main', {
  data: {},
  template: () => {
    return `
      <Home/>
      <GetStarted/>
      <QComp/>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `,

    '.preview': `
      width: 90%;
      height: auto;
      border: 1px solid rgb(255, 255, 255, .3);
      box-sizing: border-box;
      border-radius: 10px;
      background: transparent;
      margin-block: 20px;
      font-family: serif;
      padding-left: 20px;
      padding-block: 10px;
    `,
   'section': `
      width: 100vw;
      padding-inline: 7%;
      box-sizing: border-box;
   `
  }
})

export default Main