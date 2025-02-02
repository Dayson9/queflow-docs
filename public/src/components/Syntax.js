import { Component } from 'queflow'
import Idea from '../nuggets/Idea.js'

const Syntax = new Component('Syntax', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Template Syntax", size: 36 } />
          <Paragraph { txt: "This page contains the guide to QueFlow's template syntax, which is shared across your components, templates, and nuggets." } />
          <Heading { txt: "Expressions", top: 40 } />
          <Heading { txt: "InnerText expressions", size: 20, top: 30 } />
          <Paragraph { txt: "The simplest form of expressions is placed inside double curly braces:" } />
        <CodeView { code: \`
&lt;span&gt;Message: {{ msg ]]&lt;/span&gt;
\` } />
          <Paragraph { txt: "In this example, the brackets are replaced with the value of the msg property from the corresponding component's data instance. This value will update whenever the msg property changes, allowing for dynamic content rendering." } />
          <Heading { txt: "Complex expressions", size: 20, top: 30 } />
          
          <Paragraph { txt: "QueFlow supports JavaScript expressions within the curly braces:" } />
          <Paragraph { txt: "This would work:" } />
         <CodeView { code: \`
// This would work
&lt;p&gt;{{ msg.split('').reverse().join('') ]]&lt;/p&gt;
&lt;p&gt;{{ ok ? '👍' : '😡' ]]&lt;/p&gt;


// This would throw an error
&lt;p&gt;{{ Math.PI*num ]]&lt;/p&gt;


// This would work
&lt;p&gt;{{ num*Math.PI ]]&lt;/p&gt;
\` } />
          <Heading { txt: "Data Interpolation" } />
          <Paragraph { txt: "QueFlow also supports interpolation of data:" } />
         <CodeView { code: \`
// This would work
&lt;p&gt;Message is: {{ msg ]]&lt;/p&gt;


// This would throw an error
&lt;p&gt;{{ "Message is: "+msg ]]&lt;/p&gt;
\` } />   
          <Idea { txt: "A good rule of thumb is that expressions must start with a reactive property." } />
          <Heading { txt: "HTML Attributes" } />
          <Paragraph { txt: "You can pass attributes to HTML elements.These values can be static or dynamic:" } />
        <CodeView { code: \`
&lt;p class={{ className ]]&gt;&lt;/p&gt;
\` } />
          <Heading { txt: "CSS Attributes" } />
          <Paragraph { txt: "This example uses direct CSS properties which is recommended in QueFlow." } />
        <CodeView { code: \`
&lt;h1 color={{ color ]] font-family="Inter"&gt;Hello World&lt;/h1&gt;
\` } />
          <Paragraph { txt: "The color attribute uses a dynamic value, while the font-family attribute uses a static attribute, whenever the value of [color] changes, the color of the element changes respectively." } />
          
          <Heading { txt: "Event Syntax" } />
          <Paragraph { txt: "QueFlow uses a unique approach in writing event listeners, using double braces." } />
<CodeView { code: \`
&lt;button onclick={{ alert("Hello World 👋") ]]&gt;Click me&lt;/button&gt;
\` } />


          <Navigator { left: ['Get Started', '/get-started'], right: ['App', '/docs_app'] } />
        </section>
      `
  }
})

export default Syntax