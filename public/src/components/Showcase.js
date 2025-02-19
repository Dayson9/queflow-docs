import { Component } from 'queflow'
import Cooking from '../nuggets/Cooking.js'

const Showcase = new Component('Showcase', {
  template: () => {
    return `
        <Cooking {}/>
      `
  },

  stylesheet: {}
})

export default Showcase