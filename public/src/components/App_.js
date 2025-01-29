import { Component } from 'queflow'

const App_ = new Component('App_', {
  data: {
    balloon: "🎈 ",
    num: 1
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'App', size: 36 } />
  
        <Paragraph { txt: 'App is a class that allows to create and manage components with dynamic rendering. It is the entry point of a QueFlow app.' } />
        
        <Paragraph { txt: 'Syntax:', top: 20 } />
        <CodeView { code: \`
App(selector /** [string] (required) -&gt; Selector of mount node **/ ,
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
   created: /** [function] (optional) -&gt; A function that runs immediately after instantiation **/
   run: // [function] (optional) -&gt; A function that runs immediately after rendering.
})\` } />
        <Note { txt: 'The expressions in square brackets are the datatypes of the corresponding properties.' } />
        
        <Paragraph { txt: 'Now let\\'s take a quick look at an example:', top: 20 } />
        <CodeView { code: \`
import { App } from 'queflow'        

        
const BalloonApp = new App("#app", {
  data: {
    balloon: "🎈",
    num: 1
  },
  template: () => {
    return &#96;
     &lt;h1 font-size="30px"&gt;{{ balloon }_}&lt;/h1&gt;
     &lt;p color="white"&gt;{{ num }_} {{ num > 1 ? "balloons" : "balloon" }_} created&lt;/p&gt;
     &lt;button onclick={{ data.balloon+="🎈"; data.num++ }_}&gt;Create balloon +&lt;/button&gt;
    &#96;
  },
  stylesheet: {
    'button': &grave;
      padding-block: 15px;
      width: 130px;
      background: rgb(30, 40, 35);
      color: white;
      border: 1px solid grey;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px; 
    &grave;
  }
})

BalloonApp.render()\`, filename: "App.js" } />
        <div class="preview inter">
          <h1 font-size="30px">{{ balloon }}</h1>
          <p color="white">{{ num }} {{ num > 1 ? "balloons" : "balloon" }} created</p>
          <button class="reg-btn" width="135px" onclick={{ data.balloon+="🎈"; data.num++; }}>Create balloon +</button>
        </div>
        
        <Heading { txt: 'Freezing and Unfreezing', size: 30, top: 50 } />
        
        <Paragraph { txt: 'There are 2 methods for freezing & unfreezing components, [Instance.freeze()] and [Instance.unfreeze()] respectively.' } />
        
       <Heading { txt: 'Instance.freeze()', top: 30 } />
       <Paragraph { txt: 'As the name suggests, the [Instance.freeze()] method is used for freezing a component, which means any change made to the [data] attribute of a component won\\'t trigger an update in the DOM.'} />
        <CodeView { code: \`
BalloonApp.freeze()
\` } />
       <Heading { txt: 'Instance.unfreeze()', top: 30 } />   
       <Paragraph { txt: 'The [Instance.unfreeze()] method is used for unfreezing a component, any changes made to its data would trigger an update in the UI.'} />
        <CodeView { code: \`
BalloonApp.unfreeze()
\` } />
        
        <Heading { txt: "Tracking Updates", size: 30, top: 50 } />
        <Paragraph { txt: "We can track and control how updates are being applied in QueFlow. To do that, we need to listen to a custom event which is called 'qf:update'." } />
        <CodeView { code: \`
MyApp.element.addEventListener('qf:update', ({ prev, key, newVal }) => {
  //perform an operation
})
\` } />

        <Heading { txt: "App Destruction", size: 30 } />
        <Paragraph { txt: "In QueFlow, completely removing an [App's] mount node from the DOM, while also freeing up it's resources, is called [Destruction]." } />
        <Paragraph { txt: "We can do that in two steps:" } />
        <CodeView { code: \`
// Destroy App 
MyApp.destroy()
// Free up space (will only work if [MyApp] is not declared using 'const')
MyApp = null
\` } />
        <Navigator { left: ['Get started', '/get-started'], right: ['Component', '/docs_component'] } />     
      </section>
    `
  },

  stylesheet: {
    ".reg-btn" : `
      padding-block: 15px!important;
    `
  }
})

export default App_