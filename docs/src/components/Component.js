import { Component } from 'queflow'

const Compo = new Component('Compo', {
  template: () => {
    return `
      <section>
        <Heading { txt: 'Component', size: 36 } />
        <Paragraph { txt: 'The Component class is a powerful tool for building modular UI components within a larger application. It provides a simple, yet effective way to manage data and render HTML/JSX templates, all while leveraging the reactivity features of QueFlow.' } />
        <Paragraph { txt: 'Syntax:', top: 20 } />
      </section>
    `
  },
  stylesheet: {
    
  }
})

export default Compo