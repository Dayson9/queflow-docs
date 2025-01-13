import { Component } from 'queflow'
import Link from '../nuggets/Link.js'

const Compo = new Component('Compo', {
  template: () => {
    return `
      <section>
        <Heading { txt: 'Component', size: 36 } />
        <Paragraph { txt: 'The Component class is a powerful tool for building modular UI components within a larger application. It provides a simple, yet effective way to manage data and render HTML/JSX templates, all while leveraging the reactivity features of QueFlow.' } />
        <Paragraph { txt: 'Syntax:', top: 20 } />
        <CodeView { code: \`
Component(name /** [string] (required) -&gt; Name of component **/ ,
{
   data: {
    // [object] (optional) -&gt; An object containing reactive data, any changes made to it would automatically trigger an update in the UI.
   },
   template: ""
    /** [string|function] (required) -&gt; A string or a function that returns the HTML/JSX structure of app. **/
   ,
   stylesheet: {
    // [object] (optional) -&gt; An object containing CSS declarations for app.
   },
   useStrict: // [boolean] (optional) -&gt; Indicates whether to use innerHTML or innerText when updating the DOM. QueFlow uses innerText by default, which means when useStrict is set to false, innerHTML is used.
    ,
   created: /** [function] (optional) -&gt; A function that runs immediately after instantiation**/
   run: // [function] (optional) A function that runs immediately after rendering.
})\` } />

        <Paragraph { txt: "When working with [Component]s, it is highly recommended to follow QueFlow project structure.", top: 20 } />
        <Link { text: 'You can check it out [here]', click: "toPage('/docs/project-structure')" } />
        <Link { text: "or simply [download] it's zip file.", click: "alert()" } />
        <Paragraph { txt: "Now let's look at some examples.", top: 20 } />
        <Paragraph { txt: "In the components folder, create a new file and name it [MyComponent.js]" } />
        <CodeView { code: \`
import { Component } from "queflow"

const MyComponent = new Component('MyComponent', {
  template: () => '&lt;h1 color="wheat"&gt;My First QueFlow Component 🔥&lt;/h1&gt;'
})

export default MyComponent
\`, filename: "MyComponent.js" } />

        <Paragraph { txt: "Fill your App.js file with these:" } />
        <CodeView { code: \`
import { App } from "queflow"
import MyComponent from "./components/MyComponent.js"

const MyApp = new App("#app", {
  template: () => {
    return &grave;
      &lt;MyComponent/&gt;
      &grave;
  }
})

MyApp.render()
\`, filename: "App.js" } />
        <div class="preview">
          <h1 color="wheat">My First QueFlow Component 🔥</h1>
        </div>
        <Paragraph { txt: "Pretty easy right? Not like React's &lt;/MyComponent /&gt;, no space needed, just write the name of your component between these [&lt;/&gt;] and you're good to go." } />
        <Paragraph { txt: "Let's walk through more examples" } />
        <Paragraph { txt: "This example leverages the reactivity feature of QueFlow." } />
      </section>
    `
  },
  stylesheet: {
    
  }
})

export default Compo