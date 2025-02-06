import { Component } from 'queflow'
import ListItem from '../nuggets/ListItem.js'
import Warning from '../nuggets/Warning.js'

const Nuggets = new Component('Nuggets', {
  data: {
    time: new Date().toLocaleTimeString()
  },
  template: () => {
    return `
      <section>
        <Heading { txt: "Nuggets", size: 36 } />
        <Paragraph { txt: "Nuggets are self-contained UI elements that encapsulate their own template, style, and data. They provide a way to create reusable UI components that can be easily integrated into your applications. They are lightweight, flexible, and offer a clean syntax for building complex UI structures. They allow you to:" } />
        <ListItem { items: ["Build reusable components: Avoid writing repetitive code for common UI elements.", "Improve code organization: Structure your application with clear modularity.", "Write styles that are scoped/ do not coflict with other elements."] } />
        <Paragraph { txt: "Syntax:", top: 35 } />
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
template: () =&gt; "&lt;h1 color={{ color ]]&gt;{{ message ]]&lt;/h1&gt;"
})

export default MyNugget
\`, filename: "MyNugget.js" } />

        <Paragraph { txt: "Then update the [App.js] file as follows:" } />
        <CodeView { code: \`
import { App } from "queflow"
import MyNugget from "./nuggets/MyNugget.js"

const MyApp = new App("#app", {
  template: () =&gt; '&lt;MyNugget { message: "My first QueFlow Nugget ⚡", color: "orchid" } /&gt;'
})

MyApp.render()
\`, filename: "App.js" } />
        
        <div class="preview">
          <h1 color="orchid">My first QueFlow Nugget ⚡</h1>
        </div>
        <Heading { txt: "Props", top: 55 } />
        <Paragraph { txt: "Props are data passed to Nuggets when rendering. It is quite easy to create props. Just write the attribute name or CSS property followed by [={{ prop-name ]]]. For example:" } />
        <Paragraph { txt: "[font-size={{ size ]]]" } />
        <CodeView { code: \`
&lt;Button { label: "Get Started", bg: "teal" } /&gt;
\` } /> 
        <Warning { txt: 'When passing props to Nuggets, It is compulsory to use double quotes "" to avoid unnecessary errors.' } />
        
        <Paragraph { txt: "Let's try out another example" } />
        <Paragraph { txt: "In the [nuggets] folder, create another file and name it [Button.js]." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const Button = new Nugget('Button', {
  template: () =&gt; "&lt;button&gt;{{ label ]]&lt;/button&gt;",
  stylesheet: {
    'button': &#96;
      padding: 12px 26px;
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
        <Heading { txt: "Reactivity", top: 40 } />
        <Paragraph { txt: "By default, Nuggets do not have built in reactivity, to achieve that we can use a clever approach, let's try it out." } />
        <Paragraph { txt: "Create a file in the [nuggets] folder and name it [Time.js]." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const Time = new Nugget('Time', {
  template: () =&gt; &#96;&lt;span&gt;{{ time ]]&lt;/span&gt;&#96;,
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
        <Paragraph { txt: "Update your [App.js] as follows:" } />
        
        <CodeView { code: \`
import { App } from "queflow"
import Time from "./nuggets/Time.js"

const Timer = new App("#app", {
  data: {
    currentTime: new Date().toLocaleTimeString()
  },
  template: () =&gt; &#96;
    &lt;div&gt;
      &lt;Time { time: "{{ currentTime ]]" } /&gt;
    &lt;/div&gt;
  &#96;,
  stylesheet: {
    'div': &#96;
      width: 250px;
      height: 150px;
      background: black;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    &#96;
  },
  run: function() {
    setInterval(() =&gt; this.data.currentTime = new Date().toLocaleTimeString(), 1000)
  }
})

Timer.render()
\`, filename: "App.js" } />
        <div class="preview">
          <div>
            <span>{{ time }}</span>
          </div>
        </div>
        
        <Heading { txt: "Nested Nuggets", top: 35 } />
        <Paragraph { txt: "Nested Nuggets are Nuggets used inside the template of another Nugget. This allows you to break down your UI into smaller, manageable components, promoting modularity and code reusability." } />
        <CodeView { code: \`
const PillButton = new Nugget('PillButton', {
  template: () =&gt; {
    return &#96;
      &lt;Button { label: "{{ label ]]", radius: 50, px: 26, py: 12 } /&gt;
    &#96;
  }
})
\` } />

        <Paragraph { txt: "In conclusion, Nuggets provide a powerful tool for building reusable UI components. They simplify component management, improve code organization, and allow you to create dynamic and data-driven UIs. Embrace the power of Nuggets and elevate your web development experience." } />
        
        <Navigator { left: ['Component & App Methods', '/docs_methods'], right: ['Template', '/docs_template'] } />
      </section>
    `
  },
  onNavigate: (data) => {
    timerInt = setInterval(() => data.time = new Date().toLocaleTimeString(), 1000)
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
      `,
    '.preview div': `
      width: 250px;
      height: 150px;
      background: black;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    '.preview span': `
      font-size: 60px;
      -webkit-text-stroke: 1.5px skyblue;
      font-weight: 900;
    `
  }
})

export default Nuggets