import { Component } from 'queflow'

const Examples = new Component('Examples', {
  template: () => {
    return `
        <section>
          <!-- <Heading { txt: "Examples", size: 36 } /> --!>
          <Cooking {}/>
        </section>
      `
  },

  stylesheet: {}
})

export default Examples