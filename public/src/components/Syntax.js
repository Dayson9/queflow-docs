import { Component } from 'queflow'
import Idea from '../nuggets/Idea.js'

const Syntax = new Component('Syntax', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Template Syntax", size: 36 } />
          <P { txt: "This page contains the guide to QueFlow's template syntax, which is shared across your components, templates, and nuggets." } />
          <Heading { txt: "Expressions", top: 40 } />
          <Heading { txt: "InnerText expressions", size: 20, top: 30 } />
          <P { txt: "The simplest form of expressions is placed inside double curly braces:" } />
        <CodeView { code: \`
&lt;span&gt;Message: [[ msg ]]&lt;/span&gt;
\` } />
          <P { txt: "In this example, the brackets are replaced with the value of the msg property from the corresponding component's data instance. This value will update whenever the msg property changes, allowing for dynamic content rendering." } />
          <Heading { txt: "Complex expressions", size: 20, top: 30 } />
          
          <P { txt: "QueFlow supports JavaScript expressions within the curly braces:" } />
         <CodeView { code: \`
// This would work
&lt;p&gt;[[ msg.split('').reverse().join('') ]]&lt;/p&gt;
&lt;p&gt;[[ ok ? '👍' : '😡' ]]&lt;/p&gt;


// This would throw an error
&lt;p&gt;[[ Math.PI*num ]]&lt;/p&gt;


// This would work
&lt;p&gt;[[ num*Math.PI ]]&lt;/p&gt;
\` } />
          <Heading { txt: "Data Interpolation" } />
          <P { txt: "QueFlow also supports interpolation of data:" } />
         <CodeView { code: \`
// This would work
&lt;p&gt;Message is: [[ msg ]]&lt;/p&gt;


// This would throw an error
&lt;p&gt;[[ 'Message is: '+msg ]]&lt;/p&gt;


// This would work
&lt;p&gt;There are [[ num+' unsigned integers' ]]&lt;/p&gt;


// This would throw an error
&lt;p&gt;[[ 'There are '+msg ]] unsigned integers&lt;/p&gt;
\` } />   
          <Idea { txt: "A good rule of thumb is that expressions must start with a reactive property." } />
          
          <P { txt: "When working with interpolated attributes, it's recommended to use quotes around it:" } />
          <CodeView { code: \`
&lt;img src=[[ src ]] alt="[[ name ]]'s picture"/&gt;
\` } />
          <Heading { txt: "HTML Attributes" } />
          <P { txt: "You can pass attributes to HTML elements.These values can be static or dynamic:" } />
        <CodeView { code: \`
&lt;p class=[[ className ]]&gt;&lt;/p&gt;
\` } />
          <Heading { txt: "CSS Attributes" } />
          <P { txt: "This example uses direct CSS properties." } />
        <CodeView { code: \`
&lt;h1 color=[[ color ]] font-family="Inter"&gt;Hello World&lt;/h1&gt;
\` } />
          <P { txt: "The color attribute uses a dynamic value, while the font-family attribute uses a static attribute, whenever the value of [color] changes, the color of the element changes respectively." } />
          
          <Heading { txt: "Event Syntax" } />
          <P { txt: "QueFlow uses a unique approach in writing event listeners, using double braces." } />
<CodeView { code: \`
&lt;button onclick=[[ alert("Hello World 👋") ]]&gt;Click me&lt;/button&gt;
\` } />


          <Navigator { left: ['Get Started', '/get-started'], right: ['App', '/docs_app'] } />
        </section>
      `
  }
})

export default Syntax