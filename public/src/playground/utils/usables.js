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
  "nesting-components": `import { Component, App } from 'queflow' 

const OtherComponent = new Component("OtherComponent", {
  template(){
    return "<h1 color='#829AAB' text-align='center'>This is another Component</h1>"
  }
})

const MyComponent = new Component("MyComponent", {
  template(){
    return "<OtherComponent/>"
  }
})

const MyApp = new App('#app', {
  template(){
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
    return \`<Text { txt: "{{ txt }}", color: "{{ color }}", size: 41, weight: 900 } />\`
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
      <div color={{ color }} border="2px solid {{ color }}">
        </>
      </div>\`
  },
  stylesheet: {
    'div': \`
      width: auto;
      padding: 20px 30px;
      margin-bottom: 20px;
    \`
  }
})

const MyApp = new App('#app', {
  template() {
  // Props passed to these types of Nuggets must be in the format ({...}) not {...}
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
  "defining-a-template": `import { Template, App } from 'queflow' 

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

MyApp.render()`,
  "reusability": `import { Template, App } from 'queflow'

const UserCard = new Template('UserCard', {
  template() {
    return \`
      <div class="card">
        <img src="../img/{{ src }}" alt="{{ name }}'s image"/>     
        <div class="right">
          <h3>{{ name }}</h3>
          <p color="wheat">{{ job }}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
   \`
  },
  stylesheet: {
  '.card': \`
    width: 290px;
    height: auto;
    padding: 10px 5px;
    margin: 0 auto;
    margin-block: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: .8em;
  \`,
  'img': \`
    width: 80px;
    height: 80px;
    border-radius: 50%;
  \`,
  '.right': \`
    width: 60%;
    height: auto;
    box-sizing: content-box;
    color: white;
  \`,
  'h3,p': \`
    margin-block: 7px;
    font-family: monospace;
  \`
  }
}, 'mount')

const MyApp = new App('#app', {
  template() {
    return \`
      <div id="mount"></div>
      \`
  },
  run() {
    UserCard.renderWith([
      { name: "Lawrence Wills", job: "Accountant", src: "avatar1.jpg" },
      { name: "Adeola Jones", job: "Reporter", src: "avatar2.jpg" },
      { name: "Lauren Jamie", job: "Engineer", src: "avatar3.jpg" },
      { name: "Mary Sylvester", job: "Artist", src: "avatar4.jpg" }
    ])
  }
})

MyApp.render()`,
  "svg": `import { App } from 'queflow' 

const MyApp = new App('#app', {
  data: {
    circle: {
      x: 50,
      y: 50
    }
  },
  template(){
    return \`
      <svg width="100%" height="70vh" ontouchmove={{
        const { touches } = e;
        const { clientX, clientY } = touches[0];
        data.circle.x = clientX;
        data.circle.y = clientY;
      }}>
        <circle
          cx={{ circle.x }}
          cy={{ circle.y }}
          r="50"
          fill="transparent"
          stroke="lightblue"
          stroke-width="5"
          transition=".7s"
        />
        <circle
          cx={{ circle.x }}
          cy={{ circle.y }}
          r="20"
          fill="#D1A74C"
          stroke="#805A4B"
          stroke-width="3"
          transition=".35s"
        />
      </svg>
    \`
  }
})

MyApp.render()`,
  "digital-clock": `import { Component, App } from 'queflow'

const DigitalClock = new Component('DigitalClock', {
  data: {
    time: new Date().toLocaleTimeString()
  },
  template() {
    return \`
      <h1>{{ time }}</h1>
    \`
  },
  stylesheet: {
    'h1': \`
      font-family: DS-Digital;
      font-size: 90px;
      text-align: center;
      color: white;
    \`
  },
  run(data) {
    setInterval(() => data.time = new Date().toLocaleTimeString(), 1000);
  }
})

const MyApp = new App('#app', {
  template() {
    return "<DigitalClock/>"
  }
})


MyApp.render()`
}

export default sourceCode