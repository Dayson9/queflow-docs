import { Component } from "queflow"

const Template_ = new Component('Template_', {
  template: function(data) {
    return `
      <section class={{ this.data.class }}>
        <Heading { txt: "Template", size: 36 } />
        <Paragraph { txt: "The Template class in QueFlowJS provides a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <Paragraph { txt: "It's almost similar to Nuggets. The difference between the two is how they can be rendered, Nuggets can be used only in HTML/JSX markup while Template can only be used outside." } />
        <Paragraph { txt: "Syntax:", top: 20 } />
        <CodeView { code: \`
Template(selector /** (string) [required] -&gt; Selector of mount node **/ ,
  stylesheet /** (object) [required] -&gt; An object containing CSS declarations **/ ,
  template /** (string|function) [required] -&gt; A string or function that returns HTML/JSX**/
)
\` } />

        <Heading { txt: "Creating a Template" } />
        <Paragraph { txt: "In the src folder, you'd find a file named Templates.js, fill it up with these:" } />
        <CodeView { code: \`

\`, filename: "Template" } />
      </section>
    `
  },
  stylesheet: {

  },
  run: function() {
    console.log(this.element.id)
  }
})

export default Template_