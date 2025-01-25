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
  
        <Paragraph { txt: 'App is a class that allows to create and manage components with dynamic rendering. It is used for rendering a QueFlow app.' } />
        
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
const BalloonApp = new App("#app", {
  template: () =&gt; {
    return &#96;
     &lt;h1&gt;🎈&lt;/h1&gt;
     &lt;p color="dodgerblue"&gt;1 balloon created&lt;/p&gt;
     &lt;button&gt;Create balloon&lt;/button&gt;
    &#96;
  }
})

BalloonApp.render()\` } />
        <div class="preview">
          <h1>🎈 </h1>
          <p color="dodgerblue">1 balloon created</p>
          <button>Create balloon</button>
        </div>
        
        <Paragraph { txt: 'Now let\\'s spice it up with some CSS.' } />
        <CodeView { code: \`
const BalloonApp = new App("#app", {
  template: () => {
    return &#96;
     &lt;h1 font-size="30px"&gt;🎈&lt;/h1&gt;
     &lt;p color="dodgerblue"&gt;1 balloon created&gt;/p&gt;
     &lt;button&gt;Create balloon +&lt;/button&gt;
    &#96;
  },
  stylesheet: {
    "button": &#96;
     padding: 13px 17px;
     border: none;
     border-radius: 10px;
     background: slateblue;
     color: white;
    &#96;
  }
})

BalloonApp.render()\` } />
        <div class="preview inter">
          <h1 font-size="30px">🎈 </h1>
          <p color="dodgerblue">1 balloon created</p>
          <button class="styled">Create balloon +</button>
        </div>
        
        <Paragraph { txt: "Nothing happens whenever you click on the button, let's fix that by adding an onclick event and reactivity." } />
        
        <CodeView { code: \`
const BalloonApp = new App("#app", {
  data: {
    balloon: "🎈",
    num: 1
  },
  template: () => {
    return &#96;
     &lt;h1 font-size="30px"&gt;{{ balloon }_}&lt;/h1&gt;
     &lt;p color="dodgerblue"&gt;{{ num }_} {{ num > 1 ? "balloons" : "balloon" }_} created&lt;/p&gt;
     &lt;button onclick={{ data.balloon+="🎈"; data.num++ }_}&gt;Create balloon +&lt;/button&gt;
    &#96;
  },
  stylesheet: {
    "button": &#96;
      padding: 13px;
      border: none;
      border-radius: 5px;
      background: slateblue;
      color: white;
      font-size: 15px;
      font-family: Inter;
    &#96;
  }
})

BalloonApp.render()\` } />
        <div class="preview inter">
          <h1 font-size="30px">{{ balloon }}</h1>
          <p color="dodgerblue">{{ num }} {{ num > 1 ? "balloons" : "balloon" }} created</p>
          <button class="styled" onclick={{ data.balloon+="🎈"; data.num++; }}>Create balloon +</button>
        </div>
        
        <Heading { txt: 'Freezing and Unfreezing components', size: 32, top: 50 } />
        
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
        <Navigator { left: ['Get started', '/get-started'], right: ['Component', '/docs_component'] } />     
      </section>
    `
  },

  stylesheet: {
    ".styled" : `
      padding: 13px;
      border: none;
      border-radius: 5px;
      background: slateblue;
      color: white;
      font-size: 15px;
      font-family: Inter;
    `
  }
})

export default App_