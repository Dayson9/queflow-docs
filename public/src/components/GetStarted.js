import { Component } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'
import Navigator from '../nuggets/Navigator.js'
import Note from '../nuggets/Note.js';

const GetStarted = new Component('GetStarted', {
  data: {
    count: 0,
    c: 0,
    x: 0,
    y: 0,
    clr: ""
  },
  template: () => {
    return `
      <section>
        <Heading { txt: 'GetStarted', size: 36 } />
        <Heading { txt: "What is QueFlow?" } />
        <P { txt: "QueFlow (pronounced /kjuːˈfloʊ/) is a JavaScript library for building web apps. It leverages the 3 web languages HTML, CSS and JavaScript and provides a straightforward, component-based application model that makes building performant, fast web apps super-easy." } />
        <P { txt: "Here is a simple example:", top: 20 } />
        <CodeView { code: \`
const MyApp = new App("#app", {
  data: {
    count: 0
  },
  template: () =&gt; 
    &lt;button onclick=[[ data.count++; ]]&gt;Count is: [[ count ]]&lt;/button&gt;
  
})

MyApp.render()
\` } />

        <div class="preview">
          <button class="reg-btn inter" onclick={{ data.count++; }}>Count is: {{ count }}</buton>
        </div>
        <Heading { txt: 'Installation', top: 60 } />
        
        <P { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file.' } />
        <CodeView { code: \`
&lt;script type="importmap"&gt;
 {
   "imports": {
     "queflow": "https://esm.sh/queflow-js"
     }
 }
&lt;/script&gt;
 \` } />
       
        <P { txt: 'Create a div tag with id [app]' } />
         <CodeView { code: '&lt;div id="app"&gt;&lt;/div&gt;' } /> 

        <P { txt: 'Create a file and name it [App.js], link it to the HTML file while making sure the script tag has attribute [type="module"] and fill it up with these.' } />  
        <CodeView { code: \`
import { App } from "queflow"

const View = new App("#app", {
  template: () =&gt; {
    return '&lt;h1 color="dodgerblue"&gt;I 💛 QueFlowJS&lt;/h1&gt;'
  }
})

View.render()\` } />
 
        <P { txt: 'Run the above code you should see something similar to this.' } />
        <div class="preview">
          <h1 color="dodgerblue">I ❤️ QueFlowJS</h1>
        </div>
        
        <P { txt: "QueFlow allows writing CSS properties directly into elements like the example above, instead of [style='color: dodgerblue'], you should write [color='dodgerblue'], QueFlow handles everything for you." } />
        
        <Heading { txt: 'Quick start' } />
        <P { txt: "Let's experiment with another example:" } />
        <CodeView { code: \`
const MyApp = new App("#app", {
  data: {
    x: 0
  },
  template: () =&gt; {
    return &#96;
      &lt;div width="100%" height="100px" color="mediumpurple" ontouchstart=[[
      const t = e.touches[0];
      data.x = t.clientX - window.innerWidth/7;
    ]]&gt;
        &lt;div id="ball"
        transition="transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
        transform="translate([[ x ]]px, 25px)"&gt;Q&lt;/div&gt;
      &lt;/div&gt;
    &#96;
  },
  stylesheet: {
    "#ball": &#96;
      width: 40px;
      height: 40px;
      background: orchid;
      border: 4px solid darkorchid;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 900;
      color: white;
    &#96;
  }
})

MyApp.render();
 \` } />
 
        <P { txt: "Now click on the container below" } />
        <div class="preview">
          <div width="100%" height="100px" color="mediumpurple" ontouchstart={{
            const t = e.touches[0];
            data.x = t.clientX - window.innerWidth/7;
        }}>
          <div id="ball" transition="transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)" transform="translate({{ x }}px, 25px)">Q</div>
          </div>
        </div>
        
        <P { txt: 'The [data] property is reactive, which means any changes made to it would automatically trigger an update in the UI.' } />
        
        <P { txt: 'Let\\'s try out another example.', top: 10 } />
        <CodeView { code: \`
import { App } from "queflow"

const ColorChanger = new App("#app", {
  data: {
    color: ""
  },
  template: () =&gt; {
   return &#96;
    &lt;h1 color=[[ color || 'mediumpurple' ]] transition=".4s"&gt;Change my color&lt;/h1&gt;
    &lt;input type="text" oninput=[[ data.color = e.target.value ]]/&gt;
    &#96;
  }
})

ColorChanger.render()
\` } />
        <div class="preview">
          <h1 color={{ clr || 'mediumpurple' }} transition=".4s">Change my color</h1>
          <input type="text" oninput={{ data.clr = e.target.value }}/>
        </div>
        
        <P { txt: 'The [e] is an object containing information about an event, which means [e.target] refers to the element that triggered the event.', top: 10 } />
        
        <P { txt: "Now that we've covered the basics of QueFlowJS, let's move on to the advanced concepts." } />
        <Navigator { left: [null, null], right: ['Template Syntax', '/docs_template-syntax'] } />
      </section>
    `
  },
  stylesheet: {
    "#ball": `
      width: 40px;
      height: 40px;
      background: orchid;
      border: 4px solid darkorchid;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      font-weight: 900;
      color: white;
    `
  }
})

export default GetStarted