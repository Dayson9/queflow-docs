import { Component, globalState } from 'queflow'

globalState('$mode', 'dark', true)
     
const GlobalState = new Component('GlobalState', {
  data: {
    count: 0
  },
  template(){
    return `
      <section>
        <Heading { txt: "Global State", size: 36 } />
        <P { txt: "When working on large applications, sharing state across multiple components can become a tedious task. That's where Global State comes in." } />
        <P { txt: "Think of Global State as a reactive piece of data that can be used in multiple components at once. It addresses issues such as:" } />
        <ListItem { items: ["A single piece of data that can be shared across multiple components.", "Avoiding the need to write the same data for each component.", "Ensuring components using it are automatically updated when its value changes."] } />
        <Heading { txt: "Declaring a Global State" } />
        <P { txt: "Global State can be declared by using the [globalState()] method:" } />

                <CodeView { code: \`
import { globalState } from 'queflow' 

// State name must have a preceding dollar($) sign
globalState('$count', 0);

// Getting value
console.log($count.value);

// Setting value
$count.value = 7;
\` } />
        <P { txt: "Or rather pass an object:" } />
        <CodeView { code: \`
import { globalState } from 'queflow' 

globalState('$theme', {
  mode: 'dark'
});

// Getting value
console.log($theme.mode);

// Setting value
$theme.mode = 'light';
\` } />
        <P { txt: "Now let's move on to a more realistic examples:" } />
        <CodeView { code: \`
import { globalState, Component, App } from 'queflow'

globalState('$count', 0);

const Counter = new Component('Counter', {
  template(){
    return &#96;
      &lt;h1&gt;[[ $count.value ]]&lt;/h1&gt;
    &#96;
  }
})

const MyApp = new App('#app', {
  template(){
    return &#96;
      &lt;Counter/&gt;
      &lt;button onclick=[[ $count.value++ ]]&gt;Count is: [[ $count.value ]]&lt;/button&gt;
    &#96;
  }
})

MyApp.render()
\`, filename: "App.js" } />

        <div class="preview">
          <h1>{{ count }}</h1>
          <button onclick={{ data.count++ }}>Count is: {{ count }}</button>
        </div>
        <Heading { txt: "Preserve Your Data" } />
        <P { txt: "The [globalState()] function also includes a built-in save feature. When activated, it saves your state directly to [localStorage()]." } />
        <P { txt: "Let's look at another example:" } />

        <CodeView { code: \`

import { globalState, Component, App } from 'queflow'

globalState('$theme', {
  mode: 'dark'
}, true)
// True makes state automatically save to localStorage

const Header = new Component('Header', {
  template() {
    return &#96;
      &lt;header border-color=[[ $mode.value == 'dark' ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.3)'  ]]&gt;
        &lt;span&gt;Header&lt;/span&gt;
      &lt;/header&gt;
    &#96;
  }
})

const Main = new Component('Main', {
  template() {
    return &#96;
      &lt;main&gt;
        &lt;h1&gt;This is the main content&lt;/h1&gt;
        &lt;button onclick=[[
          $mode.value = $mode.value == 'dark' ? 'light' : 'dark'
          ]]&gt;
          Switch to [[ $mode.value == 'dark' ? 'Light' : 'Dark'  ]]
        &lt;/button&gt;
      &lt;/main&gt;
    &#96;
  }
})

const Footer = new Component('Footer', {
  template() {
    return &#96;
      &lt;footer&gt;
        &lt;span&gt;Copyright ©️ 2025.&lt;/span&gt;
      &lt;/footer&gt;
    &#96;
  }
})

const MyApp = new App('#app', {
  template() {
    return &#96;
      &lt;div width="100%" background=[[ $mode.value == 'dark' ? 'black' : 'white' ]] color=[[ $mode.value == 'dark' ? 'white' : 'black'  ]]&gt;
        &lt;Header/&gt;
        &lt;Main/&gt;
        &lt;Footer/&gt;
      &lt;/div&gt;
    &#96;
  },
  stylesheet: {
    'header, main, footer': &#96;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 15px 20px;
    &#96;,
    'header': "border: 1px solid rgba(0,0,0,.3);"
  }
})

MyApp.render()
\`, filename: "App.js" } />
       <div class="preview">
        <div width="100%" background={{ $mode.value == 'dark' ? 'black' : 'white' }} color={{ $mode.value == 'dark' ? 'white' : 'black'  }}>
          <header border-color={{ $mode.value == 'dark' ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.3)'  }}>
            <span>Header</span>
          </header>
          <main>
            <h1>This is the main content</h1>
            <button onclick={{
              $mode.value = $mode.value == 'dark' ? 'light' : 'dark'
            }}>Switch to {{ $mode.value == 'dark' ? 'Light' : 'Dark'  }}</button>
          </main>
          <footer>
            <span>Copyright ©️ 2025.</span>
          </footer>
        </div>
       </div>
      <P { txt: "The mode of the UI changes when you click the button. When you refresh the page, the UI mode remains as it was just before the refresh." } />
      <Warning { txt: "It's highly recommended not to save any sensitive data using this function, especially when the save feature is enabled." } />
        <Navigator { left: ['Template', '/docs_template'], right: [null, null] } />     
      </section>
      `
  },
  stylesheet: {
    'header, main, footer': `
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 15px 20px;
    `,
    'header': "border: 1px solid rgba(0,0,0,.3);"
  }
})

export default GlobalState