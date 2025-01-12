import { Component } from 'queflow'
import Inline from '../nuggets/Inline.js'

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

        <Paragraph { txt: "Example usage:", top: 20 } />
        <Paragraph { txt: "When working with [Component]s, it is highly recommended to follow QueFlow project structure" } />
        <Inline { text: 'The project structure is [here]', click: "toPage('/docs/project-structure')" } />
        
        <CodeView {
          code: \`
@@
\`
        } />
      </section>
    `
  },
  stylesheet: {
    
  }
})

export default Compo