import { Atom, Component } from "queflow"
import UserCard from '../nuggets/UserCard.js'
import List from '../Atoms.js'

const Names = new Atom('Names', {
  template(data, i) {
    data.editIsShown = false;
    data.mounted = true;

    return `
      <div q:exist={{ mounted }}>
        <h3>{{ name }}</h3>
        <Button { click: "this.set(${i}, { editIsShown: !data[${i}].editIsShown })", label: "{{ editIsShown ? 'Done' : 'Edit' }}" } />
        <div class="edit" q:show={{ editIsShown }}>
          <TextField { value: "{{ name }}", input: "this.set(${i}, { name: e.target.value })" } />
          
          <Button { click: "this.set(${i}, { mounted: false })", label: "Delete", bg: "red" } />
        </div>
      </div>
    `
  },
  stylesheet: {
    '> div': `
      padding: 10px 20px;
      border: 2px solid #829AAB;
      border-radius: 10px;
      margin-top: 25px;
    `
  },
  isReactive: true
}, 't-mount')

const Atom_ = new Component('Atom_', {
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Atom", size: 36 } />
        <P { txt: "Atoms provides a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <P { txt: "Atoms are almost similar to Nuggets. The difference between the two is how they are implemented, Nuggets can be used only in HTML/JSX markup while Atoms are used outside, Atoms can also be reactive (by choice)." } />
        <P { txt: "Syntax:", top: 20 } />
        <CodeView { code: \`
Atom(name /** [string] (required) -&gt; Name of Atom **/ ,
{
  stylesheet: {
    /** (object) [required] -&gt; An object containing CSS declarations **/
  },
  template: /** (string|function) [required] -&gt; A string or function that returns HTML/JSX**/,
},
selector /** (string) [required] -&gt; id of mount node **/
)
\` } />

        <Heading { txt: "Creating a Atom" } />
        <CodeView { code: \`
import { Atom } from 'queflow' 

const UserCard = new Atom('UserCard', {
  stylesheet: {
  // your styles here
 },
 template: () =&gt; {
    return &#96;
      &lt;div class="card"&gt;
      &lt;img src=[[ src ]] alt="[[ name ]]'s image"/&gt;
      &lt;div class="right"&gt;
        &lt;h3&gt;{{ name ]]&lt;/h3&gt;
        &lt;p&gt;{{ job ]]&lt;/p&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &#96;
  }
}, 'container')

export default UserCard
\`, filename: "Atoms.js" } />
        <P { txt: "In your [App.js]:" } />
        <CodeView { code: \`
import UserCard from './Atoms.js'

const MyApp = new App("#app", {
  template: () => {
    return &#96;
      &lt;div id="container">&lt;/div&gt;
    &#96;
  },
  run: () => {
    UserCard.renderWith({ name: "Lawrence Wills", job: "Accountant", src: "avatar1.jpg" })
  }
})

MyApp.render()
\`, filename: "App.js" } />

        <div class="preview">
          <UserCard { name: "Lawrence Wills", job: "Accountant", src: "src/assets/img/avatar1.jpg" } />
        </div>
        
        <P { txt: "The [renderWith()] function is used for passing data to a [Atom], while also rendering it." } />
        <P { txt: "You can also pass an array of data to the [renderWith()] function." } />
        
        <CodeView { code: \`
// other code
  run: () => {
    UserCard.renderWith([
      { name: "Lawrence Wills", job: "Accountant", src: "avatar1.jpg" },
      { name: "Adeola Jones", job: "Reporter", src: "avatar2.jpg" },
      { name: "Lauren Jamie", job: "Engineer", src: "avatar3.jpg" },
      { name: "Mary Sylvester", job: "Artist", src: "avatar4.jpg" }
    ])
  }
})

MyApp.render()
\`, filename: "App.js" } />
        
        <div class="preview">
          <UserCard { name: "Lawrence Wills", job: "Accountant", src: "src/assets/img/avatar1.jpg" } />
          <UserCard { name: "Adeola Jones", job: "Reporter", src: "src/assets/img/avatar2.jpg" } />
          <UserCard { name: "Lauren Jamie", job: "Engineer", src: "src/assets/img/avatar3.jpg" } />
          <UserCard { name: "Mary Sylvester", job: "Artist", src: "src/assets/img/avatar4.jpg" } />
        </div>
        
        <Heading { txt: "Rendering Lists" } />
        <P { txt: "In QueFlow, the recommended way to render lists is to make use of Atoms, they are specifically made and optimized for building interfaces with repetitive UI elements. Let's work on an example:" } />
        <CodeView { code: \`
import { Atom } from 'queflow'

const List = new Atom('mount', {
  template: () =&gt; &grave;
    &lt;li&gt;{{ text }}&lt;/li&gt;
  &grave;
})

export default List
\`, filename: "Atoms.js" } />
        
          
        <CodeView { code: \`
import { App } from 'queflow'
import List from './Atoms.js'

const MyApp = new App('#app', {
  template: () =&gt; &grave;
    &lt;ul id='mount'&gt;&lt;/ul&gt;
    &lt;input type='text' id="input"&gt;
    &lt;button onclick=[[ List.renderWith({ text: input.value }) ]]&gt;Add name&lt;/buttton&gt;
  &grave;
})

MyApp.render()
\`, filename: "App.js" } />

        <div class="preview">
          <ul id='mount'></ul>
          <input type='text' id="input" class="r_input" color="inherit">
          <TextField { value: "", id: "r_input" } />
          <Button { 
            click: \`
              List.renderWith({ text: r_input.value })
              r_input.value = ''
            \`,
            label: "Add name" } />
        </div>
        <Heading { txt: "Reactivity" } />
        <P { txt: "Atoms also come with built in reactivity system, which is different from Components or Global State." } />
        <P { txt: "Let's look at a comprehensive example:" } />
        <CodeView { code: \`
import { Atom } from 'queflow'

const Names = new Atom('Names', {
  template(data, i) {
    data.editIsShown = false;
    data.mounted = true;

    return &#96;
      &lt;div q:exist=[[ mounted ]]&gt;
        &lt;h3&gt;[[ name ]]&lt;/h3&gt;
        &lt;button onclick=[[
          this.set($\\{i}, { editIsShown: !data[$\\{i}].editIsShown })
        ]]&gt;[[ editIsShown ? 'Done' : 'Edit' ]]&lt;/button&gt;
        &lt;div class="edit" q:show=[[ editIsShown ]]&gt;
          &lt;input type="text" oninput=[[
            this.set($\\{i}, { name: e.target.value })
          ]] value=[[ name ]]/&gt;
          &lt;button onclick=[[
            this.set($\\{i}, { mounted: false })
          ]]&gt;Delete&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &#96;
  },
  isReactive: true
}, 'mount')

export default Names
\`, filename: "Atoms.js" } />
        <P { txt: "[App.js:]" } />
        <CodeView { code: \`
import { App } from 'queflow' 
import Names from './Atoms.js'

const MyApp = new App('#app', {
  template() {
    return &#96;
      &lt;form class="edit" onsubmit=[[
        e.preventDefault()
        Names.renderWith({ name: input.value })
      ]]&gt;
        &lt;input type="text" id="input" value="Tunde"/&gt;
        &lt;button type="submit"&gt;Add Name&lt;/button&gt;
      &lt;/form&gt;
      &lt;div id="mount"&gt;&lt;/div&gt;
    &#96;
  }
})

MyApp.render()
\`, filename: "App.js" } />
        <div class="preview">
          <form class="edit" onsubmit={{
            e.preventDefault()
            Names.renderWith({ name: t_input.value })
          }}>
            <input type="text" id="t_input" value="Tunde" class="input" color="inherit"/>
            <Button { type: "submit", label: "Add Name", click: "" } />
          </form>
          <div id="t-mount"></div>
        </div>

        <Navigator { left: ['Nuggets', '/nuggets'], right: ['Event Handling', '/events'] } />
      </section>
    `
  }
})

export default Atom_