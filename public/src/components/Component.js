import { Component } from 'queflow'
import Link from '../nuggets/Link.js'
import List from '../others/List.js'

const Compo = new Component('Compo', {
  data: {
    isEmoji: false
  },
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

        <Paragraph { txt: "When working with [Component]s, it is highly recommended to follow QueFlow's project structure.", top: 20 } />
        <Link { text: 'You can check it out [here]', click: "toPage('/docs_project-structure')" } />
        <Link { text: "or simply [download] it's zip file.", click: "downloadFile('./src/assets/queflow-starter-template.zip')" } />
        
        <Note { txt: "As you continue with this tutorial, we assume you've already downloaded the zip file or structure your project as specified above." } />
        
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
        <Paragraph { txt: "In the [components] folder, create a new file and name it [MyComponent1.js]." } />
        <CodeView { code: \`
import { Component } from 'queflow'

const MyComponent1 = new Component("MyComponent1", {
  data: {
    isEmoji: false
  },
  template: () =&gt; &#96;
    &lt;div&gt;
      &lt;h1 color="wheat"&gt;{{ isEmoji ? '🎂🎁 🎈' : 'Happy Birthday' ]]&lt;/h1&gt;
      &lt;button onclick={{ data.isEmoji = !data.isEmoji ]]&gt;Switch to {{ isEmoji ? 'text' : 'emoji' ]]&lt;/button&gt;
    &lt;/div&gt;
    &#96;
});

export default MyComponent1
\`, filename: "MyComponent1.js" } />

        <Paragraph { txt: "Then update your [App.js] as follows:" } />
        <CodeView { code: \`
import { App } from "queflow"
import MyComponent1 from "./components/MyComponent1.js"

const MyApp = new App("#app", {
  template: () =&gt; {
    return &#96;
      &lt;MyComponent1/&gt;
      &#96;
  }
})

MyApp.render()
\`, filename: "App.js" } />
        <div class="preview sec" color="white">
          <h1 color="wheat">{{ isEmoji ? '🎂🎁🎈' : 'Happy Birthday' }}</h1>
          <button class="reg-btn" width="120px" onclick={{ data.isEmoji = !data.isEmoji }}>Switch to {{ isEmoji ? 'text' : 'emoji' }}</button>
        </div>
        
        --!>
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
        <Paragraph { txt: "[Components] and [App] have almost the same structure, the main differences between them are highlighted below:" } />
        
        <ListItem { items: ["Components can only be rendered in App and not the other way round.", "Components do not need mount node while App needs it."] } />
  
        <Navigator { left: ['App', '/docs_app'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
    `
  },
  stylesheet: {
    'li': 'margin-block: 5px;'
  }
})

export default Compo