import { Component } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'
import Syntax from './Syntax.js'
import App_ from './App_.js'
import Compo from './Component.js'
import Template_ from './Template.js';
import Events from './Events.js'
import Docs from './Docs.js'
import Methods from './Methods.js'
import Playground from '../playground/Playground.js';
import Showcase from './Showcase.js'
import ProjectStructure from './ProjectStructure.js'
import Reactivity from './Reactivity.js'
import Error404 from './Error404.js'
import Nuggets from './Nuggets.js'

const Main = new Component('Main', {
  data: {
    className: 'dark'
  },
  template: () => {
    return `
      <Router { routes: [
        { route: "/", component: "<Home/>", title: "QueFlowJS" },
        { route: "/get-started", component: "<GetStarted/>", title: "Get Started - QueFlow" },
        { route: "/docs_app", component: "<App_/>", title: "App Class - QueFlow" },
        { route: "/docs_component", component: "<Compo/>", title: "Component Class - QueFlow" },
        { route: "/docs_nuggets", component: "<Nuggets/>", title: "Nugget Class - QueFlow" },
        { route: "/docs_template", component: "<Template_/>", title: "Template Class - QueFlow" },
        { route: "/docs_template-syntax", component: "<Syntax/>", title: "Template Syntax - QueFlow" },
        { route: "/docs", component: "<Docs/>", title: "Documentation - QueFlow" },
        { route: "/docs_events", component: "<Events/>", title: "Event Handling - QueFlow" },
        { route: "/playground", component: "<Playground/>", title: "Online Playground - QueFlow" },
        { route: "/docs_methods", component: "<Methods/>", title: "Component & App Methods - QueFlow" },
        { route: "/showcase", component: "<Showcase/>", title: "Showcase - QueFlow" },
        { route: "/docs_project-structure", component: "<ProjectStructure/>", title: "Project Structure - QueFlow" },
        { route: "/docs_reactivity", component: "<Reactivity/>", title: "Reactivity - QueFlow" },
        { route: "*", component: "<Error404/>", title: "Page Not Found" }
      ] } />
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
      color: white;
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
      padding: 10px;
      width: auto;
      background: rgb(30, 40, 35);
      color: white;
      border: 1px solid silver;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px;
    `,
    '.input': `
      background: transparent;
      border: none;
      transition: .3s;
      outline: 1px solid silver;
      height: 2.5em;
      border-radius: 10px;
      color: white;
      padding-left: .5em;
      margin-bottom: 10px;
    `,
    '.input:hover': `
      outline-width: 2.7px;
    `,
    '.grey': "color: rgba(255,255,255,.8);"
  }
})

export default Main