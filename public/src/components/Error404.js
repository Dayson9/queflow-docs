import { Component } from 'queflow'

const Error404 = new Component('Error404', {
  template: () => {
    return `
        <section text-align="center" width="100%" margin="0" padding="0">
          <Heading { txt: "404", size: 150 } />
          
        </section>
      `
  },

  stylesheet: {
    'section': `
      width: 100%;
      margin: 0;
    `
  }
})

export default Error404