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
        <CodeView { codes: ['const App = new QComponent(//selector of mount node [string], {', '   data: {', '     //reactive data [object]', '   },', '    template: //HTML/JSX structure of app [string|function]'] } />
        <Note { txt: 'The expressions in brackets are the datatypes of the corresponding properties.' } />
      </section>
    `
  },

  stylesheet: {
  }
})

export default QComp