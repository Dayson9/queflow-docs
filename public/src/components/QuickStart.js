import { Component } from 'queflow'

const QuickStart = new Component('QuickStart', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Quick Start", size: 36 } />
        <P { txt: "This page gives an introduction to most of the concepts that would be used in QueFlow." } />
        <Heading { txt: "Creating a Component" } />
        <P { txt: "In QueFlow, Components are piece of UI that has its own Logic, they're not reusable, they are only for structuring and declaring the Logic of a piece of UI." } />
        <P { txt: "Components can be an Header, Footer, Nav bars and so on. They're simply a grouped piece of UI with their own Logic." } />
        <P { txt: "Let's create a [Component]:" } />
        <CodeView { code: \`
import { Component } from 'queflow' 

const MyComponent = new Component('MyComponent', {
  template: () =&gt; {
    return &grave;
      &lt;h1 color="wheat"&gt;Hello, World.&lt;/h1&gt;
    &grave;
  }
})
\` } />

        <P { txt: "Import and mount it to the DOM by nesting it to the [App Component]" } />
        <CodeView { code: \`
import { App } from 'queflow' 
import MyComponent from './components/MyComponent.js'

const MyApp = new App('#app', {
  template: () =&gt; {
    return &grave;
      &lt;MyComponent/&gt;
  &grave;
  }
})

MyApp.render()
\` } />
        <P { txt: "If you prefer to work with single file Components you can do this:" } />
        <CodeView { code: \`
import { Component, App } from 'queflow' 

const MyComponent = new Component('MyComponent', {
  template: () =&gt; {
    return &grave;
      &lt;h1 color="wheat"&gt;Hello, World.&lt;/h1&gt;
    &grave;
  }
})


const MyApp = new App('#app', {
  template: () =&gt; {
    return &grave;
      &lt;MyComponent/&gt;
  &grave;
  }
})

MyApp.render()
\` } />
        <P { txt: "Here's the output:" } />
        <div class="preview">
          <h1 color="wheat">Hello, World.</h1>
        </div>
        <Heading { txt: "Nuggets" } />
        <P { txt: "[Nuggets] are piece of reusable UI Components that's used for building repetitive elements with maximum custumizability." } />
        <P { txt: "Let's create a Nugget:" } />
        <CodeView { code: \`
import { Nugget, App } from 'queflow'

const Text = new Nugget('Text', {
  template: () =&gt; {
    return &#96;
      &lt;span font-size="[[ size ]]px" font-weight=[[ wt ]]&gt;[[ text ]]&lt;/span&gt;
    &#96;
  },
  // For styling elements
  stylesheet: {
    'span': &#96;
      color: #829AAB;
      font-family: Inter;
    &#96;
  }
})

const MyApp = new App('#app', {
  template: () =&gt; {
    return &#96;
      &lt;Text { text: "A", size: 22, wt: 300 } /&gt;
      &lt;Text { text: "A", size: 32, wt: 400 } /&gt;
      &lt;Text { text: "A", size: 42, wt: 500 } /&gt;
      &lt;Text { text: "A", size: 52, wt: 600 } /&gt;
      &lt;Text { text: "A", size: 62, wt: 700 } /&gt;
    &#96;
  }
})

MyApp.render()
\` } />

        <div class="preview inter inline" color="#829AAB">
          <Text { txt: "A", size: 22, wt: 300 } />
          <Text { txt: "A", size: 32, wt: 400 } />
          <Text { txt: "A", size: 42, wt: 600 } />
          <Text { txt: "A", size: 52, wt: 700 } />
          <Text { txt: "A", size: 62, wt: 800 } />
        </div>
        
        <Heading { txt: "Templates" } />
        <P { txt: "Templates are Components with dynamic reusability." } />
        <P { txt: "Creating a Template:" } />
        <CodeView { code: \`
import { Template, App } from 'queflow'

const Table = new Template('Table', {
  template: (data) =&gt; {
    let html;
    if (data.isHead) {
      html = &#96;
        &lt;tr&gt;
          &lt;th&gt;[[ cell1 ]]&lt;/th&gt;
          &lt;th&gt;[[ cell2 ]]&lt;/th&gt;
        &lt;/tr&gt;
      &#96;
    } else {
      html = &#96;
        &lt;tr&gt;
          &lt;td&gt;[[ cell1 ]]&lt;/td&gt;
          &lt;td&gt;[[ cell2 ]]&lt;/td&gt;
        &lt;/tr&gt;
      &#96;
    }
    return html
  },
  stylesheet: {
    'table-container': "overflow-x: auto;",
    'table': &#96;  
      width: 100%;  
      border-collapse: collapse;  
      table-layout: fixed;  
    &#96;,
    'th, td': &#96;  
      padding: 12px;  
      text-align: left;  
      border: 1px solid #ddd;  
    &#96;,
    'th': &#96;  
      background-color: #f4f4f4;  
      font-weight: bold;  
    &#96;,
    'tbody tr:nth-child(odd)': &#96;  
      background-color: #f9f9f9;
    &#96;,
    'tbody tr:hover': &#96;  
      background-color: #ddd;
     &#96;
  }
}, 'mount')

const MyApp = new App('#app', {
  template: () =&gt; {
    return &#96;
      &lt;table id="mount"&gt;&lt;/table&gt;
    &#96;
  },
  run: () =&gt; {
    // Reuse Table Template
    Table.renderWith([
      { cell1: "QueFlow", cell2: "Vue", isHead: true },
      { cell1: "Component syntax: &lt;Component/&gt;", cell2: "Component syntax: &lt;Component /&gt;" },
      { cell1: "Nuggets are reusable", cell2: "Components are reusable" },
      { cell1: "Nugget syntax: &lt;Button { label: "Button", bg: "orchid" } /&gt;", cell2: "Reusable Component syntax: &lt;Component label="Button" bg="orangered" /&gt;" }])
  }
})

MyApp.render()
\` } />
        <div class="preview">
          <table>
            <tbody>
              <tr>
                <th>QueFlow</th>
                <th>Vue</th>
              </tr>
              <tr>
                <td>Component syntax: &lt;Component/&gt;</td>
                <td>Component syntax: &lt;Component /&gt;</td>
              </tr>
      
              <tr>
                <td>Nuggets are reusable</td>
                <td>Components are reusable</td>
              </tr>
      
              <tr>
                <td>Nugget syntax: &lt;Button { label: "Button", bg: "orchid" } /&gt;</td>
                <td>Reusable Component syntax: &lt;Component label="Button" bg="orangered" /&gt;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Heading { txt: "Next Steps" } />
        <P { txt: "By now, you should know the basics of how to write QueFlow. For a detailed explanation on each concepts, you should check out the next pages." } />
        <Navigator { left: ['Get Started', '/get-started'], right: ['Highlighting', '/docs_highlighting'] } />
      </section>
      `
  },

  stylesheet: {
    'footer': `
      width: 100%;
      height: auto;
      font-family: Inter;
      margin-top: 50px;
      border-top: 1px solid #353B41;
      box-sizing: border-box;
      padding-block: 20px 10px;
    `,
    '.flex-row': `
      width: 100px;
      height: 40px;
    `,
    '.inline span': "display: inline-block; margin-top: 10px;",
    'table-container': "overflow-x: auto;",
    'table': `  
      width: 100%;  
      border-collapse: collapse;  
      table-layout: fixed;  
    `,
    'th, td': `  
      padding: 12px;  
      text-align: left;  
      border: 1px solid #ddd;  
    `,
    'th': `
      font-weight: bold;  
    `
  }
})

export default QuickStart