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
        <P { txt: "Nuggets are self-contained UI elements that encapsulate their own template, style, and data. They provide a way to create reusable UI components that can be easily integrated into your applications. They are lightweight, flexible, and offer a clean syntax for building complex UI structures. They allow you to:" } />
        <ListItem { items: ["Build reusable components: Avoid writing repetitive code for common UI elements.", "Improve code organization: Structure your application with clear modularity.", "Write styles that are scoped/ do not coflict with other elements."] } />
        <P { txt: "Syntax:", top: 35 } />
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
        <P { txt: "As you can see, the syntax for [Nugget] is different from [App] and [Component]." } />
        <P { txt: "Usage Example:" } />
        <P { txt: "Using the same folder from the previous tutorial, in the [nuggets] folder, create a file and name it [MyNugget.js] and fill it up with these." } />
        <CodeView { code: \`
import { Nugget } from "queflow"

const MyNugget = new Nugget('MyNugget', {
template: () =&gt; "&lt;h1 color={{ color ]]&gt;{{ message ]]&lt;/h1&gt;"
})

export default MyNugget
\`, filename: "MyNugget.js" } />

        <P { txt: "Then update the [App.js] file as follows:" } />
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
        <P { txt: "Props are data passed to Nuggets when rendering. It is quite easy to create props. Just write the attribute name or CSS property followed by [={{ prop-name ]]]. For example:" } />
        <CodeView { code: \`
&lt;Button { label: "Get Started", bg: "teal" } /&gt;
\` } /> 
        <Warning { txt: 'When passing props to Nuggets, It is compulsory to use double quotes "" to avoid unnecessary errors.' } />
        
        <P { txt: "Let's try out another example" } />
        <P { txt: "In the [nuggets] folder, create another file and name it [Button.js]." } />
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
        <P { txt: "Now update your [App.js] as follows:" } />
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
        <Heading { txt: "Nuggets with Children", top: 40 } />
        <P { txt: "JSX markup can also be written directly into Nuggets, instead of writing it directly as props." } />
        <P { txt: "Let's say we want to create a Nugget called RubikText, this is how we would do it traditionally:" } />
        <CodeView { code:\`
const RubikText = new Nugget('RubikText', {
  template(){
    return &#96;
      &lt;div font-family="Rubik" color=[[ color ]]&gt;
        [[ children ]]
      &lt;/div&gt;
    &#96;
  }
})
\`, filename: "RubikText.js" } />
        <P { txt: "Then we can use it this way:" } />
        <CodeView { code:\`
&lt;RubikText {
  color: "wheat",
  children: &grave;
    &lt;h1&gt;The font of this element would be Rubik.&lt;/h1&gt;
&grave; } /&gt;
\` } />

        <P { txt: "It becomes tedious when working with complex structure of elements. To solve that, we should make use of the [&lt;/&gt;] symbol." } />
         <CodeView { code: \`
const RubikText = new Nugget('RubikText', {
  template(){
    return &#96;
      &lt;div font-family="Rubik" color=[[ color ]]&gt;
        &lt;/&gt;
      &lt;/div&gt;
    &#96;
  }
})
\`, filename: "RubikText.js" } />
        <P { txt: "The [&lt;/&gt;] symbol specifies where the children should be rendered. We can now write JSX markup directly into the Nugget, as if we're working with normal HTML elements." } />
        <CodeView { code: \`
&lt;RubikText ({ color: "wheat" })&gt;
  &lt;h1&gt;The color of this element is [[ color ]].&lt;/h1&gt;
&lt;/RubikText&gt;
\` } />
        <div class="preview">
          <h1 color="wheat">The color of this element is wheat.</h1>
        </div>
        <P { txt: 'Noticed how props are passed to the Nugget. Unlike normal Nuggets whose props are in the format [{ ... }], Nuggets that receives children uses this format: [({ ... })].' } />
        <Heading { txt: "Best Practices for Nuggets with Children" } />
        <ListItem { items: ["Always Include ({}) even though no props are passed to the Nugget.", "Other Nuggets can also be nested to create more sophisticated UI elements.", "Deeply nested elements/Nuggets can cause unintended errors."] } />
        <Heading { txt: "Reactivity" } />
        <P { txt: "By default, Nuggets do not come with built in reactivity, to make our Nuggets reactive, we can use this approach:" } />
        <P { txt: "Create a file in the [nuggets] folder and name it [Time.js]." } />
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
        <P { txt: "Update your [App.js] as follows:" } />
        
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
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    &#96;
  },
  run: function(data) {
    setInterval(() =&gt; data.currentTime = new Date().toLocaleTimeString(), 1000)
  }
})

Timer.render()
\`, filename: "App.js" } />
        <div class="preview">
          <div>
            <span color="transparent">{{ time }}</span>
          </div>
        </div>
        
        <Heading { txt: "Nested Nuggets", top: 35 } />
        <P { txt: "Nested Nuggets are Nuggets used inside the template of another Nugget. This allows you to break down your UI into smaller, manageable components, promoting modularity and code reusability." } />
        <CodeView { code: \`
const PillButton = new Nugget('PillButton', {
  template: () =&gt; {
    return &#96;
      &lt;Button { label: "{{ label ]]", radius: 50, px: 26, py: 12 } /&gt;
    &#96;
  }
})
\` } />

        <P { txt: "In conclusion, Nuggets provide a powerful tool for building reusable UI components. They simplify component management, improve code organization, and allow you to create dynamic and data-driven UIs. Embrace the power of Nuggets and elevate your web development experience." } />
        
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
      background: inherit;
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