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
  template: () =&gt; "&lt;MyNugget { message: "My first QueFlow Nugget ⚡", color: "orchid" } /&gt;"
})

MyApp.render()
\`, filename: "App.js" } />
        
        <div class="preview">
          <h1 color="orchid">My first QueFlow Nugget ⚡</h1>
        </div>
        <Heading { txt: "Props", top: 55 } />
        <Paragraph { txt: "In Nuggets, Props are data passed to Nuggets when rendering. It is quite easy to create props. Just write the attribute name or CSS property followed by [={{ prop-name }_}]. For example:" } />
        <Paragraph { txt: "[font-size={{ size }_}]", font: "monospace" } />
        <Paragraph { txt: "Passing props are quite easy, as shown below:" } />
        <CodeView { code: \`
&lt;Button { label: "Get Started", bg: "teal" } /&gt;
\` } /> 

        <Paragraph { txt: "Let's try out another example" } />
        <Paragraph { txt: "In the [nuggets] folder, create another file and name it [Button.js]." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const Button = new Nugget('Button', {
  template: () =&gt; "&lt;button&gt;{{ label }_}&lt;/button&gt;",
  stylesheet: {
    'button': &#96;
      padding: 10px 23px;
      border-radius: 50px;
      color: white;
      background: rgb(90, 10, 150);
      border: none;
      outline: 5px solid rgba(90, 10, 150, .2);
      transition: .4s;
      font-size: 1.17em;
      &#96;,
    'button:hover': &#96;
      outline: 5px solid rgba(90, 10, 150, .7);
      &#96;
    }
})

export default Button
\`, filename: "Button.js" } />
        <Paragraph { txt: "Now update your [App.js] as follows:" } />
        <CodeView { code: \`
import { App } from "queflow"
import Button from "./nuggets/Button.js"

const MyApp = new App("#app", {
  template: () =&gt; &#96;
    &lt;Button { label: "Button" } /&gt;
  &#96;
})

MyApp.render()
\`, filename: "" } />
        <div class="preview">
          <button class="sc">Button</button>
        </div>
        <Heading { txt: "Reactivity", top: 25 } />
        <Paragraph { txt: "By default, Nuggets do not have built in reactivity, to achieve that we can use a clever approach, let's try it out." } />
        <Paragraph { txt: "Create a file in the [nuggets] folder and name it [Time.js]." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const Time = new Nugget('Time', {
  template: () =&gt; &#96;&lt;span&gt;{{ time }_}&lt;/span&gt;&#96;,
  stylesheet: {
    'span': &#96;
      font-size: 60px;
      -webkit-text-stroke: 1.5px skyblue;
      font-weight: 900;
    &#96;
  }
})

export default Time
\`, filename: "Time.js" } />
        <Paragraph { txt: "n" } />
      </section>
    `
  },

  stylesheet: {
    '.sc': `
      padding: 12px 26px;
      border-radius: 50px;
      color: white;
      background: rgb(90, 10, 150);
      border: none;
      outline: 5px solid rgba(90, 10, 150, .2);
      transition: .4s;
      font-size: 1.17em;
      `,
    '.sc:hover': `
      outline: 5px solid rgba(90, 10, 150, .7);
      `
  }
}) 

export default Nuggets