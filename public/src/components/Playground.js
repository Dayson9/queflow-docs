import { Component } from 'queflow'

const Playground = new Component('Playground', {
  template: () => {
    return `
        <Cooking {} />
      `
  },

  stylesheet: {}
})

export default Playground