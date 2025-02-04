import { Component } from 'queflow' 

const Reactivity = new Component('Reactivity', {
  template: () => `
    <section>
     <Heading { txt: "Reactivity", size: 36 } />
     <Paragraph { txt: "" } />
     
      <Cooking {}/>
    </section>
  `
})

export default Reactivity