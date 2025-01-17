import { Component } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'
import Navigator from '../nuggets/Navigator.js'
import Note from '../nuggets/Note.js';

const GetStarted = new Component('GetStarted', {
  data: {
    c: 0,
    clr: ""
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'Get Started', size: 36 } />
        <Heading { txt: 'Installation' } />
        
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file.' } />
        <CodeView { code: \`
 &lt;script type="importmap"&gt;
    {
       "imports": {
            "queflow": "https://cdn.jsdelivr.net/gh/dayson9/queflowJS@main/lib/queflow.esm-browser.min.js"
       }
    }
 &lt;/script&gt;
 \` } />
       
        <Paragraph { txt: 'Create a div tag with id [app]' } />
         <CodeView { code: '&lt;div id="app"&gt;&lt;/div&gt;' } /> 

        <Paragraph { txt: 'Create a file and name it [App.js], link it to the HTML file while making sure the script tag has attribute [type="module"] and fill it up with these.' } />  
        <CodeView { code: \`
import { App } from "queflow"

const View = new App("#app", {
  template: () =&gt; {
    return '&lt;h1 color="dodgerblue"&gt;I ❤️ QueFlowJS&lt;/h1&gt;'
  }
})

View.render()\` } />
 
        <Paragraph { txt: 'Run the above code you should see something similar to this.' } />
        <div class="preview">
          <h1 color="dodgerblue">I ❤️ QueFlowJS</h1>
        </div>
        
        <Paragraph { txt: "As you can see from the above code, you can write CSS properties directly into elements , instead of [style='color: dodgerblue'], you should write [color='dodgerblue'], QueFlow handles everything for you." } />
        
        <Heading { txt: 'Quick start' } />
        <Paragraph { txt: "Using the same implementation, let's create a counter app." } />
        <CodeView { code: \`
import { App } from "queflow"

const CounterApp = new App("#app", {
  data: {
    counter: 0
  },
  template: () =&gt; {
    return &#96;
      &lt;h1 color="teal"&gt;{{ this.data.counter }_}&lt;/h1&gt;
      &lt;button onclick={{ this.data.counter++ }_}&gt;Click me&lt;/button&gt;
    &#96;
  }
})

CounterApp.render() 
 \` } />
        <div class="preview">
          <h1 color="teal">{{ this.data.c }}</h1>
          <button onclick={{ this.data.c++ }}>Click me</button>
        </div>
        
        <Paragraph { txt: 'The [data] property is reactive, which means any changes made to it would automatically trigger an update in the UI, like the above example.' } />
        
        <Paragraph { txt: 'Let\\'s try out another example.', top: 10 } />
        <CodeView { code: \`
import { App } from "queflow"

const ColorChanger = new App("#app", {
  data: {
    color: ""
  },
  template: () =&gt; {
   return &#96;
    &lt;h1 color={{ this.data.color || 'mediumpurple' }_} transition=".4s"&gt;Change my color&lt;/h1&gt;
    &lt;input type="text" oninput={{ this.data.color = e.target.value }_}/&gt;
    &#96;
  }
})

ColorChanger.render()
\` } />
        <div class="preview">
          <h1 color={{ this.data.clr || 'mediumpurple' }} transition=".4s">Change my color</h1>
          <input type="text" oninput={{ this.data.clr = e.target.value }}/>
        </div>
        
        <Paragraph { txt: 'The [e] is an object containing information about an event, which means [e.target] refers to the element that triggered the event.', top: 10 } />
        
        <Paragraph { txt: "Now that we've covered the basics of QueFlowJS, let's move on to the advanced concepts." } />
        <Note { txt: "Note that this tutorial would be focused mainly on providing examples to aid learning, let's rock 💪." }/>
        <Navigator { left: [null, null], right: ['App', '/docs/app'] } />
      </section>
    `
  }
})

export default GetStarted