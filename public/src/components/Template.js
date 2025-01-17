import { Component } from "queflow"

const Template_ = new Component('Template_', {
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Template", size: 36 } />
        <Paragraph { txt: "The Template class in QueFlowJS provides a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <Paragraph { txt: "It's almost similar to Nuggets. The difference between the two is how they can be rendered, Nuggets can be used only in HTML/JSX markup while Template can be used outside." } />
        <Paragraph { txt: "Syntax:" } />
        <CodeView { code: \`
Template()
\`, filename: "" } />
      </section>
    `
  },
  stylesheet: {

  }
})

export default Template_