import { subComponent } from 'queflow'
import Note from '../nuggets/Note.js';

const QComp = new subComponent('QComp', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Heading { txt: 'QComponent', size: 36 } />
  
        <Paragraph { txt: 'QComponent is a class that allows to create and manage components with reactive data and dynamic rendering. It is used for rendering a QueFlow app.' } />
        
        <Paragraph { txt: 'Syntax:', top: 20 } />
        <CodeView { codes: ['QComponent("#app"/** selector of mount node [string] **/ {', '   data: {', '     // Reactive data [object] -&gt; An object containing reactive data, any changes made to it would automatically trigger an update in the UI.', '   },', '    template:', '      /** [string|function] -&gt; A string or a function that returns the HTML/JSX structure of app. **/ ,', '     stylesheet: {', '      // [object] An object containing CSS declarations for app.', '   },'] } />
        <Note { txt: 'The expressions in brackets are the datatypes of the corresponding properties.' } />
      </section>
    `
  },

  stylesheet: {
  }
})

export default QComp