import { Component } from 'queflow'
import ListItem from '../nuggets/ListItem.js'

const Nuggets = new Component('Nuggets', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Nuggets", size: 36 } />
        <Paragraph { txt: "Nuggets are self-contained UI elements that encapsulate their own template, style, and data. They provide a way to create reusable UI components that can be easily integrated into your applications. They are lightweight, flexible, and offer a clean syntax for building complex UI structures. They allow you to:" } />
        <ListItem { items: ["Build reusable components: Avoid writing repetitive code for common UI elements.", "Improve code organization: Structure your application with clear modularity.", "Write styles that are scoped/ do not coflict with other elements."] } />
        <Paragraph { txt: "Syntax:" } />
        <CodeView { code: \`
Nugget(name /** [string] (required) -&gt; Name of Nugget **/ ,
{
   template: 
    /** [string|function] (required) -&gt; A string or a function that returns the HTML/JSX structure. **/
   ,
   stylesheet: {
    // [object] (optional) -&gt; An object containing CSS declarations.
   }
})
\` } />
        <Paragraph { txt: "As you can see, the syntax for [Nugget] is different from [App] and [Component]." } />
        <Paragraph { txt: "Usage Example:" } />
        <Paragraph { txt: "Using the same folder from the previous tutorial, in the [nuggets] folder, create a file and name it [MyNugget.js] and fill it up with these." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const MyNugget = new Nugget('MyNugget', {
template: () =&gt; "&lt;h1 color={{ color }_}&gt;{{ message }_}&lt;/h1&gt;"
})

export default MyNugget
\`, filename: "MyNugget.js" } />

        <Paragraph { txt: "Then update the [App.js] file as follows:" } />
        <CodeView { code: \`
import { App } from "queflow"
import Nugget from "./nuggets/MyNugget.js"

const MyApp = new App("#app", {
  template: () =&gt; "&lt;MyNugget { message: 'My first QueFlow Nugget ⚡', color: 'orchid' } /&gt;"
})

MyApp.render()
\`, filename: "App.js" } />
        
        <div class="preview">
          <h1 color="orchid">My first QueFlow Nugget ⚡</h1>
        </div>
        
        
      </section>
    `
  },

  stylesheet: {
  }
}) 

export default Nuggets