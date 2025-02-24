const sourceCode = {
  "hello-world": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  template(){
    return \`
      <h1 color="wheat">Hello, World.</h1>
    \`
  }
})

MyApp.render()`,
  "styling": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    msg: "Hello World."
  },
  template(){
    return "<h1>{{ msg }}</h1>"
  },
  stylesheet: {
    'h1': \`
      color: wheat;
      text-align: center;
    \`
  }
})

MyApp.render()`,
  "dynamic-attributes": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    color: "#829AAB"
  },
  template(){
    return \`
      <div margin-left="30px">
        <h1 color={{ color }}>This is an H1 element with color: {{ color }}.</h1>
        <button onclick={{ data.color = data.color === '#829AAB' ? 'gold' : '#829AAB' }}>Change Color</button>
     </div>
    \`
  }
})

MyApp.render()`,

  "simple-expressions": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    count: 0
  },
  template(){
    return \`
      <div margin-left="20px" color="#829AAB">
        <h1>Count is: {{ count }}</h1>
        <button onclick={{ data.count++; }}>Increment</button>
     </div>
    \`
  }
})

MyApp.render()`,

  "complex-expressions": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    count: 0
  },
  template(){
    return \`
      <div margin-left="20px">
        <h2 color="#829AAB">{{ count }} is {{ count % 2 == 0 ? '' : 'not' }} divisible by 2.</h2>
        <button onclick={{ data.count++ }}>Increment</button>
     </div>
    \`
  }
})

MyApp.render()`,
  "single-line-handlers": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    label: "Click Me"
  },
  template(){
    return "<button onclick={{ alert(data.label) }}>{{ label }}</button>"
  }
})

MyApp.render()`,
  "multiline-handlers": `import { App } from 'queflow'

const MyApp = new App('#app', {
      data: {
        label: "Click Me"
      },
      template() {
        return \`
      <button onclick={{
        const label = data.label;
        const reversed = label.split('').reverse().join('');
        alert("Label: "+label);
        alert("Reversed: "+reversed); }}>{{ label }}</button>
    \`
  }
})

MyApp.render()`,
  "event-arguments": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    output: "Banana Island"
  },
  template(){
    return \`
      <p color="#829AAB">You typed: {{ output }}</p>
      <input type="text" oninput={{
        //[e] is an object containing the event argument
        const { target } = e;
        data.output = target.value; }} value="Banana Island"/>
    \`
  }
})

MyApp.render()`,
  "defining-a-component": `import { Component, App } from 'queflow' 

const MyComponent = new Component("MyComponent", {
  template() {
    return "<h1>My First QueFlow Component</h1>"
  },
  stylesheet: {
    'h1': \`
      color: orchid;
      text-align: center;
      font-family: sans serif;
    \`
  }
})

const MyApp = new App('#app', {
  template() {
    return "<MyComponent/>"
  }
})

MyApp.render()`,
  "reactivity-in-components": `import { Component, App } from 'queflow'

const MyComponent = new Component('MyComponent', {
  data: {
    color: "#829AAB"
  },
  template() {
    return \`
      <h1 color={{ color }}>Change My Color</h1>
      <button onclick={{ data.color = data.color == "wheat" ? "#829AAB" : "wheat" }}>Toggle Color</button>
    \`
  },
  stylesheet: {
    'h1': \`
      text-align: center;
      transition: .7s;
      font-family: sans serif;
      font-weight: 900;
      font-size: 40px
    \`
  }
})

const MyApp = new App('#app', {
  template() {
    return "<MyComponent/>"
  }
})

MyApp.render()`,
  "defining-a-nugget": `import { Nugget, App } from 'queflow' 

const Text = new Nugget("Text", {
  template() {
    return "<span color={{ color }} font-size='{{ size }}px'>{{ txt }}</span>"
  },
  stylesheet: {
    'span': \`
      font-weight: 600;
      margin-left: 20px;
      display: block;
    \`
  }
})

const MyApp = new App('#app', {
  template() {
    return \`
      <Text { txt: "Hardwork pays", color: "wheat", size: 30 } />
      
      <Text { txt: "Ínfò l'a fín fò", color: "#829AAB", size: 30 } />
      
      <Text { txt: "I love cats", color: "orchid", size: 30 } />
      \`
  }
})

MyApp.render()`,
  'nested-nuggets': `import { Nugget, App } from 'queflow' 

const Text = new Nugget("Text", {
  template() {
    return "<span color={{ color }} font-size='{{ size }}px' font-weight={{ weight }}>{{ txt }}</span>"
  },
  stylesheet: {
    'span': \`
      margin-left: 20px;
      display: block;
    \`
  }
})

const BigBoldText = new Nugget("BigBoldText", {
  template() {
    return \`<Text { txt: "{{ txt }}", color: "{{ color }}", size: 40, weight: 900 } />\`
  }
})

const MyApp = new App('#app', {
  template() {
    return \`
      <BigBoldText { txt: "Hardwork pays", color: "wheat" } />
      
      <BigBoldText { txt: "Ínfò l'a fín fò", color: "#829AAB" } />
      
      <BigBoldText { txt: "I love cats", color: "orchid" } />
      \`
  }
})

MyApp.render()`,
  "reactivity-in-nuggets": `import { Nugget, App } from 'queflow' 

const Button = new Nugget("Button", {
  template() {
    return "<button background={{ bg }} onclick={{ click }}>{{ label }}</button>"
  },
  stylesheet: {
    'button': \`
      border: none;
      border-radius: 10px;
      color: white;
      padding: 10px 15px;
    \`
  }
})

const MyApp = new App('#app', {
  data: {
    count: 0
  },
  template() {
    return \`
      <h1 color="wheat">Count is: {{ count*2 }}</h1>
      <Button { label: "Decrease", bg: "red", click: "data.count--" } />
      
      <Button { label: "Increase", bg: "#829ACB", click: "data.count++" } />
      \`
  }
})

MyApp.render()`,
  "passing-children-to-nuggets": `import { Nugget, App } from 'queflow' 

const Container = new Nugget("Container", {
  template() {
  // The '</>' sign signifies where the children should be placed
    return \`
      <div color={{ color }}>
        </>
      </div>\`
  },
  stylesheet: {
    'div': \`
      width: auto;
      padding: 20px 30px;
      border: 1px solid #829ACB;
      margin-bottom: 20px;
    \`
  }
})

const MyApp = new App('#app', {
  template() {
  // Props passed to these types of Nuggets must be in the format ({...})
    return \`
      <Container ({ color: "orchid" })>
        <p>This is a paragraph with color '{{ color }}'</p>
      </Container>
      
      <Container ({ color: "#829ACB" })>
        <h2>This is an h2 element with color '{{ color }}'</h2>
      </Container>
      \`
  }
})

MyApp.render()`,
  "defining-a-templatey": `import { Template, App } from 'queflow' 

const Text = new Template("Text", {
  template() {
    return "<span color={{ color }}>{{ txt }}</span>"
  },
  stylesheet: {
    'span': \`
      font-weight: 600;
      margin-left: 20px;
      display: block;
      font-size: 30px;
    \`
  }
}, "mount")

const MyApp = new App('#app', {
  template() {
    return \`
      <div id="mount"></div>
      \`
  },
  run() {
    // Render using a single data
    Text.renderWith({ color: "wheat", txt: "Femi Otedola" })
    
    // Render using an array of data
   Text.renderWith([
    { color: "teal", txt: "Aliko Dangote" },
    { color: "#829ACB", txt: "Elon Musk" },
    { color: "orangered", txt: "Mark Zuckerberg" }
   ]) 
  }
})

MyApp.render()`
}

export default sourceCode