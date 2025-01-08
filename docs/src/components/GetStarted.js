import { subComponent } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'

const GetStarted = new subComponent('GetStarted', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Heading { txt: 'Get Started', size: 40 } />
        <Heading { txt: 'Installation' } />
        
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file, as shown below 👇' } />
        <CodeView { codes: ['&lt;script type="importmap"&gt;', '  {', '    "imports": {', '       "queflow": "https://cdn.jsdelivr.net/gh/dayson9/queflowJS@main/lib/queflow.esm-browser.min.js"', '    }', ' }', '&lt;/script&gt;'] } />
       
        <Paragraph { txt: 'Create a div tag with id "app"' } />
         <CodeView { codes: ['&lt;div id="app"&gt;&lt;/div&gt;'] } /> 

        <Paragraph { txt: 'Create a file and name it "App.js", link it to the HTML file and fill it up with these.' } />  
        <CodeView { codes: ['import { QComponent } from "queflow"', 'const App = new QComponent("#app", {', '   template: () =&gt; {', '      return "&lt;h1 color=dodgerblue&gt;I ❤️ QueFlowJS&lt;/h1&gt;"', '     }', '})', 'App.render()'] } />
 
        <Paragraph { txt: 'Run the above code you should see something similar to this.' } />
        <div class="preview">
          <h1 color="dodgerblue">I ❤️ QueFlowJS</h1>
        </div>
        <Paragraph { txt: 'As you can see from the above code, writing direct CSS properties are allowed in QueFlowJS, instead of [style=\\'color: dodgerblue\\'], you should write [color=\\'dodgerblue\\'], QueFlow handles everything under the hood.' } /> 
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