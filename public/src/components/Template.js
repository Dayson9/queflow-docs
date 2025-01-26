import { Component } from "queflow"
import UserCard from '../nuggets/UserCard.js'


const Template_ = new Component('Template_', {
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Template", size: 36 } />
        <Paragraph { txt: "The Template class in QueFlowJS provides a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <Paragraph { txt: "Templats are almost similar to Nuggets. The difference between the two is how they can be rendered, Nuggets can be used only in HTML/JSX markup while Template can only be used outside." } />
        <Paragraph { txt: "Syntax:", top: 20 } />
        <CodeView { code: \`
Template(selector /** (string) [required] -&gt; id of mount node **/ ,
  stylesheet /** (object) [required] -&gt; An object containing CSS declarations **/ ,
  template /** (string|function) [required] -&gt; A string or function that returns HTML/JSX**/
)
\` } />

        <Heading { txt: "Creating a Template" } />
        <CodeView { code: \`
const UserCard = new Template("container", {
  // your styles here
 },
 () =&gt; {
    return &#96;
      &lt;div class="card"&gt;
      &lt;img src={{ src }_} /&gt;
      &lt;div class="right"&gt;
        &lt;h3&gt;{{ name }_}&lt;/h3&gt;
        &lt;p&gt;{{ job }_}&lt;/p&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet cenq queres finito quadros.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &#96;
})

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
\`, filename: "App.js" } />
        
        <div class="preview">
          <UserCard { name: "Lawrence Wills", job: "Accountant", src: "src/assets/img/avatar1.jpg" } />
          <UserCard { name: "Adeola Jones", job: "Reporter", src: "src/assets/img/avatar2.jpg" } />
          <UserCard { name: "Lauren Jamie", job: "Engineer", src: "src/assets/img/avatar3.jpg" } />
          <UserCard { name: "Mary Sylvester", job: "Artist", src: "src/assets/img/avatar4.jpg" } />
        </div>
        <Navigator { left: ['Nuggets', '/docs_nuggets'], right: ['Event Handling', '/docs_events'] } />
      </section>
    `
  }
})

export default Template_