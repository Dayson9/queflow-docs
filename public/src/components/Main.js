import { Component } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'
import Syntax from './Syntax.js'
import App_ from './App_.js'
import Compo from './Component.js'
import Template_ from './Template.js';
import Events from './Events.js'
import Docs from './Docs.js'
import Examples from './Examples.js'
import Playground from './Playground.js';
import Showcase from './Showcase.js'
import ProjectStructure from './ProjectStructure.js'
import Nuggets from './Nuggets.js'

const Main = new Component('Main', {
  data: {
    className: 'dark'
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
      <Events/>
      <Docs/>
      <Playground/>
      <Examples/>
      <Showcase/>
      <ProjectStructure/>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `,

    '.preview': `
      max-width: 95%;
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
    '.highlighted': `
      background: rgb(11, 76, 71);
      padding: 1px 3px;
      border-radius: 3px;
      display: inline;
 `,
    '.reg-btn': `
      padding-block: 10px;
      width: 110px;
      background: rgb(30, 40, 35);
      color: white;
      border: 1px solid grey;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px;
    `
  }
})

export default Main