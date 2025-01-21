import { Component } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'
import Navigator from '../nuggets/Navigator.js'
import Note from '../nuggets/Note.js';

const Introduction = new Component('Introduction', {
  data: {
    count: 0,
    c: 0,
    clr: ""
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'Introduction', size: 36 } />
        <Heading { txt: "What is QueFlow?" } />
        <Paragraph { txt: "QueFlow (pronounced /kjuːˈfloʊ/) is a JavaScript library for building web apps. It leverages the 3 web languages HTML, CSS and JavaScript and provides a straightforward, component-based application model that makes building performant, fast web apps super-easy." } />
        <Paragraph { txt: "Here is a simple example:" } />
        <CodeView { code: \`
const MyApp = new App("#app", {
  data: {
    count: 0
  },
  template: () =&gt; &#96;
    &lt;button onclick={{ data.count++; }_}&gt;Count is: {{ count }_}&lt;/button&gt;
  &#96;
})

MyApp.render()
\` } />

        <div class="preview">
          <button class="btn inter" onclick={{ data.count++; }}>Count is: {{ count }}</buton>
        </div>
        <Heading { txt: 'Installation', top: 60 } />
        
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file.' } />
        <CodeView { code: \`
&lt;script type="importmap"&gt;
 {
   "imports": {
     "queflow": "https://esm.sh/gh/dayson9/queflowjs/lib/queflow.esm-browser.js"
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
    return '&lt;h1 color="dodgerblue"&gt;I 💛 QueFlowJS&lt;/h1&gt;'
  }
})

View.render()\` } />
 
        <Paragraph { txt: 'Run the above code you should see something similar to this.' } />
        <div class="preview">
          <h1 color="dodgerblue">I ❤️ QueFlowJS</h1>
        </div>
        
        <Paragraph { txt: "QueFlow allows writing CSS properties directly into elements like the example above, instead of [style='color: dodgerblue'], you should write [color='dodgerblue'], QueFlow handles everything for you." } />
        
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
      &lt;h1 color="wheat"&gt;{{ counter }_}&lt;/h1&gt;
      &lt;button onclick={{ data.counter++ }_}&gt;Click me&lt;/button&gt;
    &#96;
  }
})

CounterApp.render() 
 \` } />
        <div class="preview">
          <h1 color="wheat">{{ c }}</h1>
          <button class="btn inter" onclick={{ data.c++ }}>Click me</button>
        </div>
        
        <Paragraph { txt: 'The [data] property is reactive, which means any changes made to it would automatically trigger an update in the UI.' } />
        
        <Paragraph { txt: 'Let\\'s try out another example.', top: 10 } />
        <CodeView { code: \`
import { App } from "queflow"

const ColorChanger = new App("#app", {
  data: {
    color: ""
  },
  template: () =&gt; {
   return &#96;
    &lt;h1 color={{ color || 'mediumpurple' }_} transition=".4s"&gt;Change my color&lt;/h1&gt;
    &lt;input type="text" oninput={{ data.color = e.target.value }_}/&gt;
    &#96;
  }
})

ColorChanger.render()
\` } />
        <div class="preview">
          <h1 color={{ clr || 'mediumpurple' }} transition=".4s">Change my color</h1>
          <input type="text" oninput={{ data.clr = e.target.value }}/>
        </div>
        
        <Paragraph { txt: 'The [e] is an object containing information about an event, which means [e.target] refers to the element that triggered the event.', top: 10 } />
        
        <Paragraph { txt: "Now that we've covered the basics of QueFlowJS, let's move on to the advanced concepts." } />
        <Note { txt: "This tutorial would be focused mainly on providing examples to aid learning, let's rock 💪." }/>
        <Navigator { left: [null, null], right: ['Template Syntax', '/docs/template-syntax'] } />
      </section>
    `
  },
  stylesheet: {
    '.btn' : `
      padding-block: 10px;
      width: 90px;
      background: rgb(30, 40, 35);
      color: white;
      border: 1px solid grey;
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px;
    `
  }
})

export default Introduction