import { Component } from 'queflow'
import Link from '../nuggets/Link.js'
import List from '../others/List.js'

const Compo = new Component('Compo', {
  template: function() {
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
   template: 
    /** [string|function] (required) -&gt; A string or a function that returns the HTML/JSX structure of component. **/
   ,
   stylesheet: {
    // [object] (optional) -&gt; An object containing CSS declarations for component.
   },
   useStrict: // [boolean] (optional) -&gt; Indicates whether to use innerHTML or innerText when updating the DOM. QueFlow uses innerText by default, which means when useStrict is set to false, innerHTML is used.
    ,
   created: /** [function] (optional) -&gt; A function that runs immediately after instantiation. **/
   run: // [function] (optional) A function that runs immediately after rendering.
})\` } />

        <Paragraph { txt: "When working with [Component]s, it is highly recommended to follow QueFlow project structure.", top: 20 } />
        <Link { text: 'You can check it out [here]', click: "toPage('/docs/project-structure')" } />
        <Link { text: "or simply [download] it's zip file.", click: "downloadFile('http://queflowjs.vercel.app/src/assets/queflow_starter_template.zip')" } />
        
        <Note { txt: "To continue with this tutorial, you must have either downloaded the zip file or structure your project as specified above." } />
        
        <Paragraph { txt: "Now let's look at how to use components.", top: 20 } />
        <Paragraph { txt: "In the components folder, create a new file and name it [MyComponent.js], copy-paste the code below into the file." } />
        <CodeView { code: \`
import { Component } from "queflow"

const MyComponent = new Component('MyComponent', {
  template: () => '&lt;h1 color="wheat"&gt;My First QueFlow Component 🔥&lt;/h1&gt;'
})

export default MyComponent
\`, filename: "MyComponent.js" } />
        <Note { txt: "As you can see from the code above, the name of the component is the same as the variable name, when working with QueFlow components, it is required to make sure both the variable name and the component name are the same." } />
        <Paragraph { txt: "Fill your App.js file with these:", top: 20 } />
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
        <Paragraph { txt: "In React, you have to add a space just before closing a component tag [&lt;/MyComponent /&gt;], you don't need to do that in QueFlow, just write the name of your component between these [&lt;] and [/&gt;] and you're good to go." } />
        <Paragraph { txt: "Let's walk through more examples", top: 25 } />
        <Paragraph { txt: "In the [components] folder, create a new file and name it [List.js]." } />
        <CodeView { code: \`
import { Component } from "queflow"

const List = new Component('List', {
  data: {
    list: ['Oluwalonimi', 'Chisom', 'Danjuma']
  },
  template: function(data) {
    return &#96;
      &lt;h1 color="slateblue"&gt;List&lt;/h1&gt;
      &lt;ul font-weight="450"&gt;
        $\\{ data.list.map((item) =&gt; {
        return &#96;&lt;li&gt;$\\{item}&lt;/li&gt;&#96;
      }).join('')}
      &lt;/ul&gt;
    &#96;
  }
})

export default List
\`, filename: "List.js" } />

        <Paragraph { txt: "Your [App.js] should look like this:" } />
        <CodeView { code: \`
import { App } from "queflow"
import List from "./components/List.js"

const MyApp = new App("#app", {
  template: () =&gt; {
    return &#96;
      &lt;List/&gt;
      &lt;input type="text" id="input" value="Alex"/&gt;
      &lt;button font-weight="450" onclick={{
        List.data.list.push(input.value)
        input.value = ""
        input.focus()
      }_}&gt;Add +&lt;/button&gt;
      &#96;
  },
  stylesheet: {
    'button': &#96;
      padding-inline: 17px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background: slateblue;
      color: white;
    &#96;,
    'input': &#96;
      width: 130px;
      height: 28px;
      border-radius: 5px;
      border: none;
      padding-left: 5px;
      background: rgba(100, 50, 180,.5);
      color: white;
      font-weight: 450;
    &#96;
  }
})

MyApp.render()
\`, filename: "App.js" } />
        <div class="preview sec" color="white">
          <List/>
        </div>
        <Heading { txt: "Nested Components", top: 25 } />
        <Paragraph { txt: "Components can be nested inside each other to create a more structured and sophisticated UI." } />
        <CodeView { code: \`
import OtherComponent from './OtherComponent.js';

const MyComponent = new Component('MyComponent', {
  template: () =&gt; {
    return &grave;
      &lt;OtherComponent/&gt;
    &grave;
  }
})
\` } />
        <Paragraph { txt: "[Components] and [App] have almost the same structure, the differences between them are highlighted below:" } />
        
        <ListItem { items: ["Components can only be rendered in App and not the other way round.", "We can only have one App instance while Components can be more.", "Components do not need mount node while App needs it."] } />
  
        <Navigator { left: ['App', '/docs/app'], right: ['Nuggets', '/docs/nuggets'] } />
      </section>
    `
  },
  stylesheet: {
    'li': 'margin-block: 5px;'
  }
})

export default Compo