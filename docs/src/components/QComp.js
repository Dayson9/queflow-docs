import { subComponent } from 'queflow'
import Note from '../nuggets/Note.js';

const QComp = new subComponent('QComp', {
  data: {
    balloon: "🎈 ",
    num: 1
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'QComponent', size: 36 } />
  
        <Paragraph { txt: 'QComponent is a class that allows to create and manage components with dynamic rendering. It is used for rendering a QueFlow app.' } />
        
        <Paragraph { txt: 'Syntax:', top: 20 } />
        <CodeView { codes: ['QComponent("#app"/** [string] (required) selector of mount node **/ {', '   data: {', '     // [object] (optional) -&gt; An object containing reactive data, any changes made to it would automatically trigger an update in the UI.', '   },', '    template:', '      /** [string|function] (required) -&gt; A string or a function that returns the HTML/JSX structure of app. **/ ,', '     stylesheet: {', '      // [object] (optional) -&gt; An object containing CSS declarations for app.', '   },', '    useStrict: // [boolean] (optional) Indicates whether to use innerHTML or innerText when updating the DOM. QueFlow uses innerText by default, which means when useStrict is set to false, innerHTML is used.', '    run: // [function] A function that runs immediately adter the component is rendered.', '})'] } />
        <Note { txt: 'The expressions in square brackets are the datatypes of the corresponding properties.' } />
        
        <Paragraph { txt: 'Now let\\'s take a quick look at an example:', top: 20 } />
        <CodeView { codes: ['const App = new QComponent("#app", {',
          '    template: () =&gt; {',
          '      return \`',
          '        &lt;h1&gt;🎈&lt;/h1&gt;', 
          '        &lt;p color="dodgerblue"&gt;1 balloon created&lt;/p&gt;',
          '        &lt;button&gt;Create balloon&lt;/button&gt;',
          '   \`',
          '   }', '})', 'App.render()'] } />
        <div class="preview">
          <h1>🎈 </h1>
          <p color="dodgerblue">1 balloon created</p>
          <button>Create balloon</button>
        </div>
        
        <Paragraph { txt: 'Now let\\'s spice it up with some CSS.' } />
        <CodeView { codes: ['const App = new QComponent("#app", {',
          '    template: () =&gt; {',
          '      return \`',
          '        &lt;h1 font-size="30px"&gt;🎈&lt;/h1&gt;', 
          '        &lt;p color="dodgerblue" font-family="sans-serif"&gt;1 balloon created&lt;/p&gt;',
          '        &lt;button&gt;Create balloon +&lt;/button&gt;',
          '   \`',
          '   },',
          '    stylesheet: {',
          '      "button": \`',
          "         width: 120px;",
          "         height: 45px;",
          "         border: none;",
          "         border-radius: 5px;",
          "         background: slateblue;",
          "         color: white;",
          "      \`",
          '    }',
          '})', 'App.render()'] } />
        <div class="preview">
          <h1 font-size="30px">🎈 </h1>
          <p color="dodgerblue" font-family="sans-serif">1 balloon created</p>
          <button class="styled">Create balloon +</button>
        </div>
        
        <Paragraph { txt: 'Nothing happens whenever you click on the button, let\\'s fix that by adding reactivity.' } />
        
        <CodeView { codes: ['const App = new QComponent("#app", {',
          '    data: {',
          '      balloon: "🎈",',
          '      num: 1',
          '    },',
          '    template: () =&gt; {',
          '      return \`',
          '        &lt;h1 font-size="30px"&gt;{{ this.data.balloon }_}&lt;/h1&gt;', 
          '        &lt;p color="dodgerblue" font-family="sans-serif"&gt;{{ this.data.num }_} {{ this.data.num &gt; 1 ? "balloons" : "balloon" }_} created&lt;/p&gt;',
          '        &lt;button onclick={{ this.data.balloon+="🎈"; this.data.num++ }_}&gt;Create balloon +&lt;/button&gt;',
          '   \`',
          '   },',
          '    stylesheet: {',
          '      "button": \`',
          "         width: 120px;",
          "         height: 45px;",
          "         border: none;",
          "         border-radius: 5px;",
          "         background: slateblue;",
          "         color: white;",
          "      \`",
          '    }',
          '})', 'App.render()'] } />
        <div class="preview">
          <h1 font-size="30px">{{ this.data.balloon }}</h1>
          <p color="dodgerblue" font-family="sans-serif">{{ this.data.num }} {{ this.data.num > 1 ? "balloons" : "balloon" }} created</p>
          <button class="styled" onclick={{ this.data.balloon+="🎈"; this.data.num++; }}>Create balloon +</button>
        </div>
        
        <Heading { txt: 'Freezing and Unfreezing components', size: 32, top: 50 } />
        
        <Paragraph { txt: 'There might be a situation where you need to disable/enable reactivity in a component, to do so, there are 2 methods for that, [Instance.freeze()] and [Instance.unfreeze()]' } />
        
       <Heading { txt: 'Instance.freeze()', top: 30 } />
       <Paragraph { txt: 'As the name sounds, the [Instance.freeze()] method is used for freezing a component, which means any change made to the [data] attribute of a component won\\'t trigger an update in the DOM.'} />  
      </section>
    `
  },

  stylesheet: {
    ".styled" : `
      width: 120px;
      height: 45px;
      border: none;
      border-radius: 5px;
      background: slateblue;
      color: white;
    `
  }
})

export default QComp