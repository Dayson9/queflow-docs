import { Component } from 'queflow'

const QuickStart = new Component('QuickStart', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Quick Start", size: 36 } />
        <P { txt: "This page gives an introduction to most of the concepts that would be used in QueFlow." } />
        <Heading { txt: "Creating a Component" } />
        <P { txt: "In QueFlow, Components are piece of UI that has its own Logic, they're not reusable, they are only for structuring and declaring the Logic of a piece of UI." } />
        <P { txt: "Components can be an Header, Footer, Nav bars and so on. They're simply a grouped piece of UI with their own Logic." } />
        <CodeView { code: \`
import { Component, App } from 'queflow' 

// Creating a Component
const MyComponent = new Component('MyComponent', {
  template(){
    return &grave;
      &lt;h1 color="wheat"&gt;Hello, World.&lt;/h1&gt;
    &grave;
  }
})

// Using a Component
const MyApp = new App('#app', {
  template() {
    return &grave;
      &lt;MyComponent/&gt;
  &grave;
  }
})

MyApp.render()
\` } />

        <P { txt: "Now you can mount it to the DOM by nesting it to the [App Component]" } />
        
      </section>
      `
  },

  stylesheet: {
    'footer': `
      width: 100%;
      height: auto;
      font-family: Inter;
      margin-top: 50px;
      border-top: 1px solid #353B41;
      box-sizing: border-box;
      padding-block: 20px 10px;
    `,
    '.flex-row': `
      width: 100px;
      height: 40px;
    `
  }
})

export default QuickStart