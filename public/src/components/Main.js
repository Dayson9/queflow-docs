import { Component } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'
import Syntax from './Syntax.js'
import App_ from './App_.js'
import Compo from './Component.js'
import Template_ from './Template.js';
import ProjectStructure from './ProjectStructure.js'
import Nuggets from './Nuggets.js'

const Main = new Component('Main', {
  data: {
    class: 'dark'
  },
  template: () => {
    return `
      <Home/>
      <GetStarted/>
      <Syntax/>
      <App_/>
      <Compo/>
      <Nuggets/>
      <Template_/>
      <ProjectStructure/>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `,

    '.preview': `
      width: 88%;
      height: auto;
      border: 1px solid rgb(255, 255, 255, .3);
      box-sizing: border-box;
      border-radius: 10px;
      background: rgb(5, 10, 5);
      margin-block: 20px;
      font-family: Inter;
      padding-inline: 10px;
      padding-block: 10px;
    `,
   'section': `
      width: auto;
      max-width: 100vw;
      padding-left: 5%;
      box-sizing: border-box;
   `,
   '.dark': `
    background: navyblue!important;
   `
  }
})

export default Main