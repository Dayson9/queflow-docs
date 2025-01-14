import { Component } from 'queflow'
import ListItem from '../nuggets/ListItem.js'

const Nuggets = new Component('Nuggets', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Nuggets", size: 36 } />
        <Paragraph { txt: "Nuggets are self-contained UI elements that encapsulate their own template, style, and data. They provide a way to create reusable UI components that can be easily integrated into your applications. They are lightweight, flexible, and offer a clean syntax for building complex UI structures. They allow you to:" } />
        <ListItem { items: ["Build reusable components."] } />
      </section>
    `
  },

  stylesheet: {
  }
}) 

export default Nuggets