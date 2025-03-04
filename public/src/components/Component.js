import { Component } from 'queflow'
import ALink from '../nuggets/ALink.js'
import List from '../others/List.js'

const Compo = new Component('Compo', {
  data: {
    isEmoji: false
  },
  template: function() {
    return `
      <section>
        <Heading { txt: 'Component', size: 36 } />
        <P { txt: 'The Component class is a powerful tool for building modular UI components within a larger application. It provides a simple yet effective way to manage data and render HTML/JSX templates, all while leveraging the reactivity features of QueFlow.' } />
        
        <P { txt: 'Syntax:', top: 20 } />
        <CodeView { code: \`
Component(name /** [string] (required) -&gt; Name of component **/ ,
{
  data: {
    // [object] (optional) -&gt; An object containing reactive data. Changes trigger UI updates.
  },
  template: 
    /** [string|function] (required) -&gt; A string or function that returns the HTML/JSX structure of the component. **/
  ,
  stylesheet: {
    // [object] (optional) -&gt; An object containing CSS declarations for the component.
  },
  useStrict: // [boolean] (optional) -&gt; Use innerText (default) or innerHTML for DOM updates.
  ,
  created: /** [function] (optional) -&gt; Runs immediately after instantiation. **/
  run: // [function] (optional) -&gt; Runs immediately after rendering.
})\` } />

        <P { txt: "When working with [Component]s, it is highly recommended to follow QueFlow's project structure.", top: 20 } />
        <ALink { text: 'You can check it out [here]', click: "toPage('/docs_project-structure')" } />
        <ALink { text: "or simply [download] its zip file.", click: "downloadFile('./src/assets/queflow-starter-template.zip')" } />
        
        <Note { txt: "As you continue with this tutorial, we assume you've already downloaded the zip file or structured your project as specified above." } />
        
        <P { txt: "Now let's look at how to use components.", top: 20 } />
        <P { txt: "In the components folder, create a new file and name it [MyComponent.js]. Copy and paste the code below into the file." } />
        <CodeView { code: \`
import { Component } from "queflow"

const MyComponent = new Component('MyComponent', {
  template: () =&gt; '&lt;h1 color="wheat"&gt;My First QueFlow Component 🔥&lt;/h1&gt;'
})

export default MyComponent
\`, filename: "MyComponent.js" } />
        <Note { txt: "As you can see from the code above, the name of the component is the same as the variable name. When working with QueFlow components, it is required to ensure both the variable name and the component name are the same." } />
        
        <P { txt: "Fill your App.js file with the following code:", top: 20 } />
        <CodeView { code: \`
import { App } from "queflow"
import MyComponent from "./components/MyComponent.js"

const MyApp = new App("#app", {
  template: () =&gt; {
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
        <P { txt: "In React, you have to add a space just before closing a component tag [&lt;/MyComponent /&gt;]. In QueFlow, you don't need to do that. Simply write the name of your component between [&lt;] and [/&gt;], and you're good to go." } />
        
        <P { txt: "Let's walk through more examples.", top: 25 } />
        <P { txt: "In the [components] folder, create a new file and name it [MyComponent1.js]." } />
        <CodeView { code: \`
import { Component } from 'queflow'

const MyComponent1 = new Component("MyComponent1", {
  data: {
    isEmoji: false
  },
  template: () =&gt; &grave;
    &lt;div&gt;
      &lt;h1 color="wheat"&gt;[[ isEmoji ? '🎂🎁🎈' : 'Happy Birthday' ]]&lt;/h1&gt;
      &lt;button onclick=[[ data.isEmoji = !data.isEmoji ]]&gt;
        Switch to [[ isEmoji ? 'text' : 'emoji' ]]
      &lt;/button&gt;
    &lt;/div&gt;
  &grave;
});

export default MyComponent1
\`, filename: "MyComponent1.js" } />

        <P { txt: "Then update your [App.js] as follows:" } />
        <CodeView { code: \`
import { App } from "queflow"
import MyComponent1 from "./components/MyComponent1.js"

const MyApp = new App("#app", {
  template: () =&gt; {
    return &grave;
      &lt;MyComponent1/&gt;
    &grave;
  }
})

MyApp.render()
\`, filename: "App.js" } />
        <div class="preview sec" color='#FCFCFD'>
          <h1 color="wheat">{{ isEmoji ? '🎂🎁🎈' : 'Happy Birthday' }}</h1>
          <button class="reg-btn" width="140px" onclick={{ data.isEmoji = !data.isEmoji }}>Switch to {{ isEmoji ? 'text' : 'emoji' }}
          </button>
        </div>
        
        <Heading { txt: "Nested Components", top: 25 } />
        <P { txt: "Components can be nested inside each other to create a more structured and sophisticated UI." } />
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
        <P { txt: "[Components] and [App] have almost the same structure. The main differences between them are highlighted below:" } />
        
        <ListItem { items: [
          "Components can only be rendered in App and not the other way around.",
          "Components do not need a mount node, while App requires it."
        ] } />
  
        <Navigator { left: ['App', '/docs_app'], right: ['Component & App Methods', '/docs_methods'] } />
      </section>
    `
  },
  stylesheet: {
    'li': 'margin-block: 5px;'
  }
})

export default Compo