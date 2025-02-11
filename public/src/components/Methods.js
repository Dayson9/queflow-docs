import { Component } from 'queflow'
import SPLink from '../nuggets/SPLink.js'

const Methods = new Component('Methods', {
  data: {
    isShown: true,
    shown: true,
    count: 1
  },
  template: () => {
    return `
      <section>
        <Heading { txt: "Component & App Methods", size: 36 } />
        
        <P { txt: "In the previous pages, we learnt about QueFlow Components and the App class, this page focuses on their methods. Both the App class and Components have mostly the same methods and their implementations." } />
        <P { txt: "There are currently 6 built-in and 3 non built-in methods, they are:" } />
        
        <SPLink { label: "[freeze()]", id: "fr" } />
        <SPLink { label: "[unfreeze()]", id: "unfr" } />
        <SPLink { label: "[hide()]", id: "hi" } />
        <SPLink { label: "[show()]", id: "hi" } />
        <SPLink { label: "[destroy()]", id: "des" } />
        <SPLink { label: "[render()]", id: "rn" } />
        <SPLink { label: "[created()]", id: "cr" } />
        <SPLink { label: "[run()]", id: "ru" } />
        <SPLink { label: "[onUpdate()]", id: "upd" } />
        
        <Heading { txt: "Built-in Methods", size: 30 } />
        <P { txt: "App/Component instances come with built-in methods that streamline common development tasks." } />
        <Heading { txt: "freeze()", size: 25, id: "fr" } />
        <P { txt: "This method is used for freezing a Component/App instance temporarily. When an instance is frozen, it stops being reactive, which means any changes made to it's data would not trigger any updates. This is useful in an application where you need to disable reactivity." } />
           <CodeView { code: \`
// Freeze Component and App
MyComponent.freeze()
MyApp.freeze()


// Updates won't trigger
MyApp.data.title = 'App Methods'
MyComponent.data.count++
\` } />

        <Heading { txt: "unfreeze()", size: 25, id: "unfr" } />
        <P { txt: "As the name suggests, [unfreeze()] does the opposite of [freeze()], it is used for unfreezing an instance." } />
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

        <div class="preview" height="165px">
          <button onclick={{
            data.isShown = !data.isShown
          }}>{{ isShown ? 'Hide' : 'Show' }}</button>
          <video margin-top="17px" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" controls width="200" height="100"  display={{ isShown ? 'block' : 'none' }}/>
        </div>
        
        <Heading { txt: "destroy()", size: 25, id: "des" } />
        <P { txt: "The [destroy()] method when called, removes an App/Component's mount node completely from the DOM, while effectively freeing up it's resources. It provides an efficient way to remove a Component completely from the DOM." } />
        <CodeView { code: \`
// Destroy Video Component
Video.destroy()
\` } />

          <Heading { txt: "render()", size: 25, id: "rn" } />
          <P { txt: "This method is used for rendering an App's template into its respective mount node. It handles rendering of all Components and Nuggets." } />
        <CodeView { code: \`
MyApp.render()
\` } />
        <Heading { txt: "Non built-in Methods", size: 30 } />
        <P { txt: "These methods are callback functions that customizes how a Component/App should behave in certain conditions. They control what a Component should do in situations like an update to data, after rendering, after instantiation and so on." } />
        
        <Heading { txt: "created()", size: 25, id: "cr" } />
        <P { txt: "This function is called immediately after a Component/App is instantiated." } />
        <CodeView { code: \`
import { Component } from 'queflow'

const MyComponent = new Component('MyComponent', {
  created: () => {
    // Logs immediately after Component is created
    console.log("Component created")
  },
  template: "&lt;h1&gt;Hello, World&lt;/h1&gt;"
})
\` } />
        <P { txt: "The [created()] method also has access to instance's data." } />
                <CodeView { code: \`
// Other code
  created: (data) => {
    data.msg = "Hello, World"
  }
})
\` } />

        <Heading { txt: "run()", size: 25, id: "ru" } />
        <P { txt: "The [run()] method runs immediately after a Component is rendered onto the DOM, unlike [created()] which runs after instantiation." } />
        <P { txt: "This method is useful for stuffs like API calls, data fetching and so on. Here is a good example:" } />
        <CodeView { code: \`
// Other code
  run: (data) => {
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then((d) => {
      data.quote = d.quote;
      data.author = d.author;
    })
  }
})
\` } />

        <Heading { txt: "onUpdate()", size: 25, id: "upd" } />
        <P { txt: "The [onUpdate()] method is used for tracking updates in an App/Component. It runs immediately before an App/Component is updated. This method can be used to control how updates are applied to an App/Component." } />
        <P { txt: "The [onUpdate()] method receives two arguments; an object, and the reactive data object of an App/Component." } />
        <CodeView { code: \`
onUpdate: ({ key, oldVal, newVal }, data) =&gt; {
    console.log(&grave;$\\{key} was changed from $\\{oldVal} to $\\{newVal}&grave;)
    return true
  }
\` } />
        <P { txt: "This code block executes whenever an App/Component's data property changes.  Returning true allows QueFlow to update the DOM; returning false discards the update." } />
        <P { txt: "Let's work on a comprehensive example:" } />
        <CodeView { code: \`
import { Component, App } from 'queflow'

const View = new Component('View', {
  data: {
    shown: true,
    count: 1
  },
  template: &#96;
    &lt;p&gt;Shown [[ count ]] [[ count &gt; 1 ? 'times' : 'time' ]]&lt;/p&gt;
    &lt;img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zTo4zx6JyeDSzEhV4o_cksNWBqpBL58o-AMS6gjtSM2o1NMq2AhEWus&s=10"
      width="200"
      height="150"
      visibility=[[ shown ? 'visible' : 'hidden' ]] /&gt;
    &lt;button onclick=[[ data.shown = !data.shown ]]&gt;[[ shown ? 'Hide' : 'Show' ]]&lt;/button&gt;
    &#96;,
  onUpdate: ({ key, newVal }, data) =&gt; {
    if (key === "shown" && newVal === true) {
      data.count++
    }
    return true
  }
})



const MyApp = new App('#app', {
  template: () =&gt; &#96;
    &lt;View/&gt;
  &#96;
})

MyApp.render()
\`, filename: "App.js" } />

        <div class="preview">
          <p>Shown {{ count }} {{ count > 1 ? 'times' : 'time' }}</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zTo4zx6JyeDSzEhV4o_cksNWBqpBL58o-AMS6gjtSM2o1NMq2AhEWus&s=10"
            width="200"
            height="150"
          visibility={{ shown ? 'visible' : 'hidden' }} />
          <button onclick={{ data.shown = !data.shown }}>{{ shown ? 'Hide' : 'Show' }}</button>
        </div>
        
          <P { txt: "The example shows how the [onUpdate()] method can be used in a Component. Now let's break down the above code and explain it's functionality:" } />
          <ListItem { items: ["Firstly, we import [App] and [Component] class from QueFlow, then we create a Component named [View].", "The data object has two props, [shown] and [count] with their values initially set to true and 1 respectively.", "The template returns an HTML string with some data binding."] } />

        <CodeView { code: \`
onUpdate: ({ key, newVal }, data) =&gt; {
    if (key === "shown" && newVal === true) {
      data.count++
    }
    return true
  }
\` } />
        <P { txt: "Whenever the button is clicked, it triggers this function. The function increments count based on whether [key] is "shown" and [newVal] is true, then returns true which tells QueFlow to apply updates to the DOM." } />
        <Navigator { left: ['Components', '/docs_component'], right: ['Nuggets', '/docs_nuggets'] } />
      </section>
      `
  },
  onUpdate: ({ key, newVal }, data) => {
  if (key === "shown" && newVal === true) {
    data.count++
  }
  return true
}
})

export default Methods