import { subComponent } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'

const GetStarted = new subComponent('GetStarted', {
  data: {
    display: 'none',
    c: 0,
    clr: "hotpink"
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Heading { txt: 'Get Started', size: 40 } />
        <Heading { txt: 'Installation' } />
        
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file, as shown below 👇' } />
        <CodeView { codes: ['&lt;script type="importmap"&gt;', '  {', '    "imports": {', '       "queflow": "https://cdn.jsdelivr.net/gh/dayson9/queflowJS@main/lib/queflow.esm-browser.min.js"', '    }', ' }', '&lt;/script&gt;'] } />
       
        <Paragraph { txt: 'Create a div tag with id [app]' } />
         <CodeView { codes: ['&lt;div id="app"&gt;&lt;/div&gt;'] } /> 

        <Paragraph { txt: 'Create a file and name it [App.js], link it to the HTML file while making sure the script tag has attribute [type="module"] and fill it up with these.' } />  
        <CodeView { codes: ['import { QComponent } from "queflow"', 'const App = new QComponent("#app", {', '   template: () =&gt; {', '      return "&lt;h1 color=dodgerblue&gt;I ❤️ QueFlowJS&lt;/h1&gt;"', '     }', '})', 'App.render()'] } />
 
        <Paragraph { txt: 'Run the above code you should see something similar to this.' } />
        <div class="preview">
          <h1 color="dodgerblue">I ❤️ QueFlowJS</h1>
        </div>
        
        <Paragraph { txt: 'As you can see from the above code, direct CSS properties are allowed in QueFlowJS, instead of [style=\\'color: dodgerblue\\'], you should write [color=\\'dodgerblue\\'], QueFlow handles everything under the hood.' } />
        
        <Heading { txt: 'Quick start' } />
        <Paragraph { txt: 'Using the same implementation, let\\'s create a counter app.' } />
        <CodeView { codes: ['import { QComponent } from "queflow"', 'const App = new QComponent("#app", {', '   data: {', '      counter: 0', '   },', '   template: () =&gt; {', '      return   \`', '         &lt;h1 color="teal"&gt;{{ this.data.counter }}&lt;/h1&gt;', '         &lt;button onclick={{ this.data.counter++ }_}&gt;Click me&lt;/button&gt;', '       \`', '     }', '})', 'App.render()'] } />
        <div class="preview">
          <h1 color="teal">{{ this.data.c }}</h1>
          <button onclick={{ this.data.c++ }}>Click me</button>
        </div>
        
        <Paragraph { txt: 'The [data] property is reactive, which means any changes made to it would automatically trigger an update in the UI, like the above example.' } />
        
        <Paragraph { txt: 'Let\\'s try out another example.', top: 10 } />
        <CodeView { codes: ['import { QComponent } from "queflow"', 'const App = new QComponent("#app", {', '   data: {', '      color: "hotpink"', '   },', '   template: () =&gt; {', '      return   \`', '         &lt;h1 color=  {{ this.data.color }} transition=".3s"&gt;Change my color&lt;/h1&gt;', '         &lt;input type="text" oninput={{ this.data.color = e.target.value }_}/&gt;', '       \`', '     }', '})', 'App.render()'] } />
        <div class="preview">
          <h1 color={{ this.data.clr }} transition=".3s">Change my color</h1>
          <input type="text" oninput={{ this.data.clr = e.target.value }}/>
        </div>
        
        <Paragraph { txt: 'The [e] is an object containing information about an event, which means [e.target] references to the element that triggered the event.', top: 10 } />
      </section>
    `
  },

  stylesheet: {
    'section': `
      box-sizing: border-box;
      padding-inline: 7%;
    `
  }
})

export default GetStarted