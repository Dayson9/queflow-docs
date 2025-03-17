import { Component } from 'queflow'
import Home from './Home.js'
import GetStarted from './GetStarted.js'
import QuickStart from './QuickStart.js';
import Highlight from './Highlight.js'
import Syntax from './Syntax.js'
import App_ from './App_.js'
import Compo from './Component.js'
import Atom_ from './Atom.js';
import Events from './Events.js'
import Docs from './Docs.js'
import Methods from './Methods.js'
import Playground from '../playground/Playground.js';
import Showcase from './Showcase.js'
import ProjectStructure from './ProjectStructure.js'
import Reactivity from './Reactivity.js'
import GlobalState from './GlobalState.js'
import Error404 from './Error404.js'
import Nuggets from './Nuggets.js'
import Footer from './Footer.js'

const Main = new Component('Main', {
  data: {
    className: 'dark'
  },
  template: () => {
    return `
      <div id="container" background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(28, 32, 36)' }}>
      <Router { routes: [
        { route: "/", component: "<Home/>", title: "QueFlowJS" },
        { route: "/get-started", component: "<GetStarted/>", title: "Get Started - QueFlow" },
        { route: "/quick-start", component: "<QuickStart/>", title: "Quick Start - QueFlow" },
        { route: "/highlighting", component: "<Highlight/>", title: "Syntax Highlighting - QueFlow" },
        { route: "/app", component: "<App_/>", title: "App Class - QueFlow" },
        { route: "/component", component: "<Compo/>", title: "Component Class - QueFlow" },
        { route: "/nuggets", component: "<Nuggets/>", title: "Nugget Class - QueFlow" },
        { route: "/template", component: "<Atom_/>", title: "Atom Class - QueFlow" },
        { route: "/template-syntax", component: "<Syntax/>", title: "Template - QueFlow" },
        { route: "/docs", component: "<Docs/>", title: "Documentation - QueFlow" },
        { route: "/events", component: "<Events/>", title: "Event Handling - QueFlow" },
        { route: "/playground", component: "<Playground/>", title: "Online Playground - QueFlow" },
        { route: "/methods", component: "<Methods/>", title: "Component & App Methods - QueFlow" },
        { route: "/showcase", component: "<Showcase/>", title: "Showcase - QueFlow" },
        { route: "/project-structure", component: "<ProjectStructure/>", title: "Project Structure - QueFlow" },
        { route: "/reactivity", component: "<Reactivity/>", title: "Reactivity - QueFlow" },
        { route: "/global_state", component: "<GlobalState/>", title: "Global State - QueFlow" },
        { route: "*", component: "<Error404/>", title: "Page Not Found" }
      ] } />
      <Footer/>
    </div>
    `
  },

  stylesheet: {
    "#container": `
      width: 100%;
      min-height: 100vh;
      margin-block: 0px;
      padding-block: 20px 0px;
    `,
    '.silver': `
      color: rgb(200, 200, 200);
    `,

    '.preview': `
      max-width: 95%;
      height: auto;
      border: 1px solid #353B41;
      box-sizing: border-box;
      border-radius: 10px;
      background: inherit;
      margin-block: 20px;
      font-family: Inter;
      padding-inline: 10px;
      color: inherit;
      padding-block: 10px;
    `,
    'section': `
      width: auto;
      max-width: 100vw;
      padding-left: 5%;
      padding-right: 2px;
      box-sizing: border-box;
      padding-bottom: 20px;
   `,
    '.highlighted': `
      border-radius: 3px;
      display: inline;
      background: rgba(11, 76, 71, .5);
      padding-inline: .15em;
      font-weight: 600;
    `,
    '.hl-dark': `
      color: rgb(21, 156, 131);
    `,
    '.hl-light': `
      color: rgb(11, 76, 71);
    `,
    '.input': `
      max-height: 2em;
      background: transparent;
      border: none;
      transition: .3s;
      outline: 1px solid silver;
      height: 2.5em;
      border-radius: 10px;
      color: white;
      padding-left: .5em;
      margin-bottom: 10px;
      font-size: 1.2em;
      font-weight: 700;
    `,
    '.input:hover': `
      outline-width: 2.7px;
    `,
    '.grey': "color: rgba(255,255,255,.8);"
  }
})

export default Main