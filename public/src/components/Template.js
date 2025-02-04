import { Component } from "queflow"
import UserCard from '../nuggets/UserCard.js'
import List from '../Templates.js'

const Template_ = new Component('Template_', {
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Template", size: 36 } />
        <Paragraph { txt: "The Template class in QueFlowJS provides a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <Paragraph { txt: "Templats are almost similar to Nuggets. The difference between the two is how they can be rendered, Nuggets can be used only in HTML/JSX markup while Template can only be used outside." } />
        <Paragraph { txt: "Syntax:", top: 20 } />
        <CodeView { code: \`
Template(name /** [string] (required) -&gt; Name of Template **/ ,
{
  stylesheet: {
    /** (object) [required] -&gt; An object containing CSS declarations **/
  },
  template: /** (string|function) [required] -&gt; A string or function that returns HTML/JSX**/,
},
selector /** (string) [required] -&gt; id of mount node **/
)
\` } />

        <Heading { txt: "Creating a Template" } />
        <CodeView { code: \`
import { Template } from 'queflow' 

const UserCard = new Template('UserCard', {
  stylesheet: {
  // your styles here
 },
 template: () =&gt; {
    return &#96;
      &lt;div class="card"&gt;
      &lt;img src={{ src ]] alt="{{ name }}'s image"/&gt;
      &lt;div class="right"&gt;
        &lt;h3&gt;{{ name ]]&lt;/h3&gt;
        &lt;p&gt;{{ job ]]&lt;/p&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet cenq queres finito quadros.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &#96;
  }
}, 'container')

export default UserCard
\`, filename: "Templates.js" } />
        <Paragraph { txt: "In your [App.js]:" } />
        <CodeView { code: \`
import UserCard from './Templates.js'

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
        
        <Paragraph { txt: "The [renderWith()] function is used for passing data to a [Template], while also rendering it." } />
        <Paragraph { txt: "You can also pass an array of data to the [renderWith()] function." } />
        
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
        <Paragraph { txt: "In QueFlow, the recommended way to render lists is to make use of Templates, they are specifically made and optimized for building UIs with repetitive UI elements. Let's work on an example:" } />
        <CodeView { code: \`
import { Template } from 'queflow'

const List = new Template('mount', {
  template: () =&gt; &grave;
    &lt;li&gt;{{ text }}&lt;/li&gt;
  &grave;
})

export default List
\`, filename: "Templates.js" } />
        
          
        <CodeView { code: \`
import { App } from 'queflow'
import List from './Templates.js'

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
          <input type='text' id="input" class="input">
          <button class='reg-btn' onclick={{ 
            List.renderWith({ text: input.value })
            input.value = ''
          }}>Add name</buttton>
        </div>
        
        <Navigator { left: ['Nuggets', '/docs_nuggets'], right: ['Event Handling', '/docs_events'] } />
      </section>
    `
  }
})

export default Template_