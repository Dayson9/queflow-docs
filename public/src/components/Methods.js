import { Component } from 'queflow'
import SPLink from '../nuggets/SPLink.js'

const Methods = new Component('Methods', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Component & App Methods", size: 36 } />
        
        <P { txt: "In the previous pages, we learnt about QueFlow Components and the App class, this page focuses on their methods. Both the App class and Components have mostly the same methods and their implementations." } />
        <P { txt: "There are currently 7 built-in and 4 non built-in methods, they are:", top: 20, bottom: 20 } />
        
        <SPLink { label: "[freeze()]", id: "fr" } />
        <SPLink { label: "[unfreeze()]", id: "unfr" } />
        <SPLink { label: "[hide()]", id: "fr" } />
        <SPLink { label: "[show()]", id: "fr" } />
        <SPLink { label: "[destroy()]", id: "fr" } />
        <SPLink { label: "[render()]", id: "fr" } />
        <SPLink { label: "[created()]", id: "fr" } />
        <SPLink { label: "[run()]", id: "fr" } />
        <SPLink { label: "[onNavigate()]", id: "fr" } />
        <SPLink { label: "[onUpdate()]", id: "fr" } />
        
        <Heading { txt: "Built-in Methods", size: 30 } />
        <Heading { txt: "freeze()", size: 25, id: "fr" } />
        <P { txt: "This method is used for freezing a Component/App instance. When a Component/App instance is frozen, it stops being reactive, which means any changes made to it's data would not trigger any updates. This is useful in an application where you need to disable reactivity." } />
           <CodeView { code: \`
// Freeze Component and App
MyComponent.freeze()
MyApp.freeze()


// Updates won't trigger
MyApp.data.title = 'App Methods'
MyComponent.data.count++
\` } />

        <Heading { txt: "unfreeze()", size: 25, id: "unfr" } />
        <P { txt: "As the name suggests, unfreeze() does the opposite of freeze(), it is used for unfreezing a Component/App instance." } />
           <CodeView { code: \`
// Freeze Component and App
MyComponent.freeze()
MyApp.freeze()


// Updates won't trigger
MyApp.data.title = 'App Methods'
MyComponent.data.count++

// Unfreeze Component and App
MyApp.unfreeze()
MyComponent.unfreeze()


// Updates work now
MyApp.data.title = 'App Methods'
MyComponent.data.count++
\` } />

        <Heading { txt: "hide()", size: 25, id: "fr" } />
        
        <Navigator { left: ['Components', '/docs_component'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
      `
  },

  stylesheet: {}
})

export default Methods