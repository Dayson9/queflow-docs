import { Component } from 'queflow'
import SPLink from '../nuggets/SPLink.js'

const Methods = new Component('Methods', {
  data: {
    isShown: true
  },
  template: () => {
    return `
      <section>
        <Heading { txt: "Component & App Methods", size: 36 } />
        
        <P { txt: "In the previous pages, we learnt about QueFlow Components and the App class, this page focuses on their methods. Both the App class and Components have mostly the same methods and their implementations." } />
        <P { txt: "There are currently 7 built-in and 4 non built-in methods, they are:", top: 20, bottom: 20 } />
        
        <SPLink { label: "[freeze()]", id: "fr" } />
        <SPLink { label: "[unfreeze()]", id: "unfr" } />
        <SPLink { label: "[hide()]", id: "hi" } />
        <SPLink { label: "[show()]", id: "hi" } />
        <SPLink { label: "[destroy()]", id: "des" } />
        <SPLink { label: "[render()]", id: "rn" } />
        <SPLink { label: "[created()]", id: "fr" } />
        <SPLink { label: "[run()]", id: "fr" } />
        <SPLink { label: "[onNavigate()]", id: "fr" } />
        <SPLink { label: "[onUpdate()]", id: "fr" } />
        
        <Heading { txt: "Built-in Methods", size: 30 } />
        <Heading { txt: "freeze()", size: 25, id: "fr" } />
        <P { txt: "This method is used for freezing a Component/App instance temporarily. When a Component/App instance is frozen, it stops being reactive, which means any changes made to it's data would not trigger any updates. This is useful in an application where you need to disable reactivity." } />
           <CodeView { code: \`
// Freeze Component and App
MyComponent.freeze()
MyApp.freeze()


// Updates won't trigger
MyApp.data.title = 'App Methods'
MyComponent.data.count++
\` } />

        <Heading { txt: "unfreeze()", size: 25, id: "unfr" } />
        <P { txt: "As the name suggests, [unfreeze()] does the opposite of [freeze()], it is used for unfreezing a Component/App instance." } />
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

        <Heading { txt: "hide() and show()", size: 25, id: "hi" } />
        <P { txt: "These methods provides a simple way to hide and show Components respectively. They're quite straightforward to use." } />
        <CodeView { code: \`
import { Component, App } from 'queflow'

const Video = new Component('Video', {
  template: &#96;
    &lt;video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      controls
      width="200"
      height="100"
    /&gt;
  &#96;
})

const MyApp = new App('#app', {
  data: {
    isShown: true
  },
  template: () =&gt; &#96;
    &lt;button onclick=[[
      if (data.isShown) {
        Video.hide()
      } else {
        Video.show()
      }
      data.isShown = !data.isShown
    ]]&gt;[[ isShown ? 'Hide' : 'Show' ]]&lt;/button&gt;
    &lt;Video/&gt;
  &#96;
})

MyApp.render()
\`, filename: "App.js" } />        

        <div class="preview" height="150px">
          <button onclick={{
            data.isShown = !data.isShown
          }}>{{ isShown ? 'Hide' : 'Show' }}</button>
          <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" controls width="200" height="100"  display={{ isShown ? 'block' : 'none' }}/>
        </div>
        
        <Heading { txt: "destroy()", size: 25, id: "des" } />
        <P { txt: "The [destroy()] method when called, removes an App/Component's mount node completely from the DOM, while effectively freeing up it's resources. It is an efficient way to remove a Component completely from the DOM." } />
        <CodeView { code: \`
// Destroy Video Component
Video.destroy()
\` } />

          <Heading { txt: "render()", size: 25, id: "rn" } />
          <P { txt: "This method is used for rendering an App's template into its respective mount node. It handles rendering of all Components and" } />
          <Link { label: "Nuggets.", to: "/docs_nuggets", class: "grey" } />
          
        <Navigator { left: ['Components', '/docs_component'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
      `
  },

  stylesheet: {}
})

export default Methods