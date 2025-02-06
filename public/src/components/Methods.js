import { Component } from 'queflow'

const Methods = new Component('Methods', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Component & App Methods", size: 36 } />
        
        <Paragraph { txt: "" } />
        
        <Navigator { left: ['Components', '/docs_component'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
      `
  },

  stylesheet: {}
})

export default Methods