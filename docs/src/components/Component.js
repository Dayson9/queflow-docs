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
        $\\{ this.data.list.map((item) =&gt; {
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
        
        <Paragraph { txt: "[Components] and [App] have almost the same structure, the differences between them are highlighted below:" } />
        <ul color="rgba(255,255,255,.9)">
          <li>Components can only be rendered in App and not the other way round.</li>
          <li>We can only have one App instance while Components can be more.</li>
          <li>Components do not need mount node while App needs it.</li>
        </ul>
        
        <Navigator { left: ['App', '/docs/app'], right: ['Nuggets', 'docs/nugget'] } />
      </section>
    `
  },
  stylesheet: {
    'li': 'margin-block: 5px;'
  }
})

export default Compo