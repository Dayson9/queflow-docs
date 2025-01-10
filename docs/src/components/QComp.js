import { subComponent } from 'queflow'
import Note from '../nuggets/Note.js';

const QComp = new subComponent('QComp', {
  data: {
    
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'QComponent', size: 36 } />
  
        <Paragraph { txt: 'QComponent is a class that allows to create and manage components with dynamic rendering. It is used for rendering a QueFlow app.' } />
        
        <Paragraph { txt: 'Syntax:', top: 20 } />
        <CodeView { codes: ['QComponent("#app"/** [string] (required) selector of mount node **/ {', '   data: {', '     // [object] (optional) -&gt; An object containing reactive data, any changes made to it would automatically trigger an update in the UI.', '   },', '    template:', '      /** [string|function] (required) -&gt; A string or a function that returns the HTML/JSX structure of app. **/ ,', '     stylesheet: {', '      // [object] (optional) -&gt; An object containing CSS declarations for app.', '   },', '    useStrict: // [boolean] (optional) Indicates whether to use innerHTML or innerText when updating the DOM. QueFlow uses innerText by default, which means when useStrict is set to false, innerHTML is used.', '})'] } />
        <Note { txt: 'The expressions in square brackets are the datatypes of the corresponding properties.' } />
        
        <Paragraph { txt: 'Now let\\'s take a quick look at an example:', top: 20 } />
        <CodeView { codes: ['const App = new QComponent("#app", {', '    template: () =&gt; {', '      return \`&lt;button&gt;Button&lt;button&gt;\`', '   }', '})', 'App.render()'] } />
        <div class="preview">
          <button>Button</button>
        </div>
      </section>
    `
  },

  stylesheet: {
  }
})

export default QComp