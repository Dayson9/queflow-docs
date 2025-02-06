import { Component } from 'queflow'
import SPLink from '../nuggets/SPLink.js'

const Methods = new Component('Methods', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Component & App Methods", size: 36 } />
        
        <P { txt: "In the previous pages, we've learnt about QueFlow Components and the App class, this page focuses on their methods. Both the App class and Components have mostly the same methods and their implementations." } />
        <P { txt: "There are currently 7 built-in and 4 non built-in methods, they are:", top: 20 } />
        
        <SPLink { label: "[freeze()],", id: "fr" } />
        <SPLink { label: "[unfreeze()],", id: "fr" } />
        <SPLink { label: "[hide()],", id: "fr" } />
        <SPLink { label: "[show()],", id: "fr" } />
        <SPLink { label: "[destroy()],", id: "fr" } />
        <SPLink { label: "[render()],", id: "fr" } />
        <SPLink { label: "[created()],", id: "fr" } />
        <SPLink { label: "[run()],", id: "fr" } />
        <SPLink { label: "[onNavigate()],", id: "fr" } />
        <SPLink { label: "and [onUpdate()]", id: "fr" } />
        
        <Navigator { left: ['Components', '/docs_component'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
      `
  },

  stylesheet: {}
})

export default Methods