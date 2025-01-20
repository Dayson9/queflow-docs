  import { Component } from 'queflow'

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
&lt;span&gt;Message: {{ this.data.msg }}&lt;/span&gt;
\` } />
          <Paragraph { txt: "In this example, the brackets are replaced with the value of the msg property from the corresponding component's data instance. This value will update whenever the msg property changes, allowing for dynamic content rendering." } />
          <Heading { txt: "Complex expressions", size: 20, top: 30 } />
          
          <Paragraph { txt: "QueFlow supports JavaScript expressions within the curly braces:" } />

        <CodeView { code: \`
&lt;p&gt;{{ this.data.msg.split('').reverse().join('') }_}&lt;/p&gt;

&lt;p&gt;{{ this.data.ok ? '👍' : '😡' }_}&lt;/p&gt;
\` } />
          <Heading { txt: "HTML Attributes" } />
          <Paragraph { txt: "You can pass attributes to HTML elements.These values can be static or dynamic:" } />
        <CodeView { code: \`
&lt;p class={{ this.data.class }_}&gt;&lt;/p&gt;
\` } />
          <Heading { txt: "CSS Attributes" } />
          <Paragraph { txt: "This example uses direct CSS properties which is recommended in QueFlow. The color attribute uses a dynamic value, while the font-family attribute uses a static attribute, which means whenever the value of [this.data.color] changes, the color of the element changes respectively." } />
        <CodeView { code: \`
&lt;h1 color={{ this.data.color }_} font-family="Inter"&gt;Hello World&lt;/h1&gt;
\` } />
          
          <Navigator { left: ['Get Started', '/get-started'], right: ['App', '/docs/app'] } />
        </section>
      `
    },

    stylesheet: {}
  })

  export default Syntax