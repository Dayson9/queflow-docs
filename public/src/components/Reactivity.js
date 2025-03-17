import { Component } from 'queflow' 
import TextField from '../nuggets/TextField.js'

const Reactivity = new Component('Reactivity', {
  data: {
    message: ""
  },
  template: () => `
    <section>
     <Heading { txt: "Reactivity", size: 36 } />
     <P { txt: "So far, we've covered the basics of reactivity in QueFlow, including how to define reactive templates like" } />
     <CodeView { code: \`
&lt;cite&gt;-[[ author ]]&lt;/cite&gt;
\` } />
      <P { txt: "What happens under the hood" } />
      <ListItem { items: ["QueFlow loops through the attributes of an element, searching for reactive expressions.", "If QueFlow finds one, QueFlow evaluates it, while replacing it with the evaluated version.", "Then pushes the reactive attribute into an array which would be used for triggering updates in the DOM."] } />
      <P { txt: "QueFlow efficiently updates the DOM by tracking reactive attributes in an array, avoiding the overhead of full DOM diffing." } />
      
      <Heading { txt: "Reactivity in Components and App" } />
      <Heading { txt: "Reactivity in run() method", size: 20 } />
      <P { txt: "The run() method, which executes immediately after a Component/App is rendered, provides a crucial entry point for reactive updates." } />
      <CodeView { code: \`
// Run is a method that runs immediately after a Component/App is rendered onto the DOM.
  run: (data) =&gt; {
    data.author = 'Aristotle'
    setTimeout(() => {
      data.author = 'Plato'; // Reactive update after a delay
  }, 2000);
  }
\` } />

      <P { txt: "In this example, the data parameter represents the component/app's data object.  Modifying properties within this object triggers QueFlow's reactivity system.  The example demonstrates an initial assignment and then a delayed update using setTimeout.  QueFlow will automatically update the DOM to reflect the change in data.author after the timeout." } />
      <Heading { txt: "Reactivity in Event Listeners", size: 20 } />
      <P { txt: "Event listeners provide another way to interact with QueFlow's reactivity." } />
      <CodeView { code: \`
&lt;button onclick=[[
  data.count++;
  console.log(e.target.innerText);
]]&gt;Count is [[ count ]]&lt;/button&gt;
\` } />

      <P { txt: \`The onclick handler uses double curly braces to define a JavaScript expression.
        [data.count++] increments the count property in the component's data. This change is automatically detected by QueFlow, triggering a DOM update to reflect the new count.
        [console.log(data.count)] logs the updated count to the console. It's important to note that the event handler receives the component's data object (data) in scope, making it easy to access and modify reactive properties.\` } />
      <Heading { txt: "Two-Way Data Binding", top: 50  } />
      <P { txt: "Two-way data binding simplifies the process of synchronizing data between the UI and the underlying data model." } />
        <CodeView { code: \`
import { Component, App } from 'queflow'

const MyComponent = new Component('MyComponent', {
  data: {
    message: ""
  },
  template: () =&gt; &#96;
    &lt;p&gt;Message: [[ message ]]&lt;/p&gt;
    &lt;input type="text" value=[[ message ]] oninput=[[ data.message = e.target.value ]]&gt;
    &lt;button onclick=[[ data.message = '' ]]&gt;Reset&lt;/button&gt;
  &#96;
})



const MyApp = new App('#app', {
  template: "&lt;MyComponent/&gt;"
})

MyApp.render()
\`, filename: "App.js" } />

      <div class="preview">
        <p>Message: {{ message }}</p>
        <TextField { value: "{{ message }}", id: "r_input", input: "data.message = e.target.value" } />
        <Button { click: "data.message = ''", label: "Reset" } />
      </div>
      <P { txt: "Changes in the input field will automatically update [data.message], and vice-versa." } />
      
      <Navigator { left: ['Event Handling', '/events'], right: ['Global State', '/global_state'] } />
    </section>
  `
})

export default Reactivity