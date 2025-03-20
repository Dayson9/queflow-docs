import { Atom, Component } from "queflow"
import UserCard from '../nuggets/UserCard.js'
import List from '../Atoms.js'
import MovieCard from '../nuggets/MovieCard.js'

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
      border: 1px solid white;
      border-radius: 10px;
      margin-top: 25px;
    `
  },
  isReactive: true
}, 't-mount')

const Atom_ = new Component('Atom_', {
  data: {
    btnText: "Three"
  },
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Atom", size: 36 } />
        <P { txt: "Atoms provide a way to create and manage reusable templates for your web application. This class simplifies the process of dynamically rendering HTML content based on provided data." } />
        <P { txt: "Atoms are similar to Nuggets, with one key difference: Nuggets can only be used within HTML/JSX markup, while Atoms operate externally and optionally support reactivity." } />
        <P { txt: "Syntax:", top: 20 } />
        <CodeView { code: \`
Atom(name /** [string] (required) -> Name of Atom **/ ,
{
  stylesheet: {
    /** (object) [required] -> Object containing CSS declarations **/
  },
  template: /** (string|function) [required] -> HTML/JSX string or generator function **/,
},
selector /** (string) [required] -> Mount node ID **/
)
\` } />

        <Heading { txt: "Creating an Atom" } />
        <CodeView { code: \`
import { Atom } from 'queflow' 

const UserCard = new Atom('UserCard', {
  stylesheet: {
  // Your styles here
 },
 template: () => {
    return &#96;
      &lt;div class="card"&gt;
      &lt;img src=[[ src ]] alt="[[ name ]]'s image"/&gt;
      &lt;div class="right"&gt;
        &lt;h3&gt;{{ name }}&lt;/h3&gt;
        &lt;p&gt;{{ job }}&lt;/p&gt;
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
        
        <P { txt: "The [renderWith()] function renders an Atom." } />
        <P { txt: "You can pass an array of data to the [renderWith()] function." } />
        
        <CodeView { code: \`
// Other code
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
\` } />
        
        <div class="preview">
          <UserCard { name: "Lawrence Wills", job: "Accountant", src: "src/assets/img/avatar1.jpg" } />
          <UserCard { name: "Adeola Jones", job: "Reporter", src: "src/assets/img/avatar2.jpg" } />
          <UserCard { name: "Lauren Jamie", job: "Engineer", src: "src/assets/img/avatar3.jpg" } />
          <UserCard { name: "Mary Sylvester", job: "Artist", src: "src/assets/img/avatar4.jpg" } />
        </div>
        <P { txt: "You can reverse the rendering order:" } />
        <CodeView { code: \`
// Other code
  run: () => {
    UserCard.renderWith([
      { name: "Lawrence Wills", job: "Accountant", src: "avatar1.jpg" },
      { name: "Adeola Jones", job: "Reporter", src: "avatar2.jpg" },
      { name: "Lauren Jamie", job: "Engineer", src: "avatar3.jpg" },
      { name: "Mary Sylvester", job: "Artist", src: "avatar4.jpg" }
    ], "prepend")  // Renders in reverse order
  }
})

MyApp.render()
\` } />  
        <div class="preview">
          <UserCard { name: "Mary Sylvester", job: "Artist", src: "src/assets/img/avatar4.jpg" } />
          <UserCard { name: "Lauren Jamie", job: "Engineer", src: "src/assets/img/avatar3.jpg" } />
          <UserCard { name: "Adeola Jones", job: "Reporter", src: "src/assets/img/avatar2.jpg" } />
          <UserCard { name: "Lawrence Wills", job: "Accountant", src: "src/assets/img/avatar1.jpg" } />
        </div>
        <Heading { txt: "Rendering Lists" } />
        <P { txt: "QueFlow recommends using Atoms for rendering lists, as they're optimized for repetitive UI elements. Example implementation:" } />
        <CodeView { code: \`
import { Atom } from 'queflow'

const List = new Atom('List', {
  template: () => &grave;
    &lt;li&gt;{{ text }}&lt;/li&gt;
  &grave;
}, 'mount')

export default List
\`, filename: "Atoms.js" } />
        
        <CodeView { code: \`
import { App } from 'queflow'
import List from './Atoms.js'

const MyApp = new App('#app', {
  template: () => &grave;
    &lt;ul id='mount'&gt;&lt;/ul&gt;
    &lt;input type='text' id="input"&gt;
    &lt;button onclick=[[ List.renderWith({ text: input.value }) ]]&gt;Add item&lt;/button&gt;
  &grave;
})

MyApp.render()
\`, filename: "App.js" } />

        <div class="preview">
          <ul id='mount'></ul>
          <TextField { value: "", id: "r_input" } />
          <Button { 
            click: \`
              List.renderWith({ text: r_input.value })
              r_input.value = ''
            \`,
            label: "Add item" } />
        </div>
        <Heading { txt: "Reactivity" } />
        <P { txt: "Atoms implement reactivity differently from Components or Global State. Example:" } />
        <P { txt: "First, create a reactive Button Atom:" } />
        <CodeView { code: \`
import { Atom } from 'queflow'

const Button = new Atom('Button', {
  template: () => &grave;
    &lt;button&gt;{{ label }}&lt;/button&gt;
  &grave;,
  isReactive: true  // Enables reactivity
}, 'mount')

export default Button
\`, filename: "Button.js" } />
        <CodeView { code: \`
import { App } from 'queflow'
import Button from './Button.js'

const MyApp = new App('#app', {
  template: () => &grave;
    &lt;div id='mount'&gt;&lt;/div&gt;
    &lt;input
      type='text'
      id="input"
      value="Three"
      oninput=[[ Button.set(2, { label: e.target.value }) ]]
    /&gt;
  &grave;,
  run(){
    Button.renderWith([
      { label: "Seven" },
      { label: "Two" },
      { label: "Three" }
    ])
    
    // Update first item
    Button.set(0, { label: "One" })
  }
})
\`, filename: "App.js" } />
        <div class="preview">
          <Button { label: "One" } />
          <Button { label: "Two" } />
          <Button { label: "{{ btnText }}" } />
          <TextField { value: "Three", input: "data.btnText = e.target.value" } />
        </div>
        
        <Heading { txt: "Batch Updates with set()" } />
        <P { txt: "The [set()] method updates Atoms, accepting two arguments: the target [index] and update [object]." } />
        <P { txt: "The [set()] method can also be used for efficiently updating multiple [Atoms] at once. Instead of updating each Atom individually, you can pass an array of updated objects to the [set()] method. QueFlow intelligently updates only the necessary Atoms, ensuring optimal performance and cleaner code." } />
        <P { txt: "Syntax:" } />
        <CodeView { code: \`
Atom.set(arrayOfUpdates)
\` } />
        <ListItem { items: ["[arrayOfUpdates]: An array of objects, where each object contains the updated data for a specific Atom."] } />
        <Heading { txt: "How It Works" } />
        <P { txt: "When you call [set()] with an array, QueFlow performs the following steps:" } />
        <ListItem { items: ['Compares the new data with the existing data for each Atom.', 'Identifies changes and updates only the Atom that have new or modified data.', 'Minimizes DOM updates to improve performance.'] } />
        <Heading { txt: "Example: Movie App" } />
        <P { txt: "Imagine you’re building a movie app with a list of movie cards. Each card displays the movie’s title, rating, and poster. When new data arrives (e.g., updated ratings), you can update all cards in one go." } />
        <P { txt: "Step 1: Define the MovieCard Atom:", wt: 700 } />
        <CodeView { code: \`
import { Atom } from 'queflow' 

const MovieCard = new Atom('MovieCard', {
  stylesheet: {
    '.card': &#96;
      width: 270px;
      border: 1px solid #ccc;
      border-radius: 15px;
      padding: 10px;
      margin: 10px auto;
    &#96;,
    'img': &#96;
      width: 100%;
      border-radius: 8px;
      height: 340px;
    &#96;,
    'h3, p': &#96;
      margin: 5px 0;
    &#96;
  },
  template: () =&gt; &#96;
    &lt;div class="card"&gt;
      &lt;img src=[[ poster ]] alt="[[ title ]] poster" /&gt;
      &lt;h3&gt;[[ title ]]&lt;/h3&gt;
      &lt;p color="orange"&gt;Rating: [[ rating ]]&lt;/p&gt;
      &lt;p&gt;[[ summary ]]&lt;/p&gt;
    &lt;/div&gt;
  &#96;,
  isReactive: true
}, 'movie-container')

export default MovieCard
\`, filename: "MovieCard.js" } />
        <P { txt: "Step 2: Import and Render Initial Movie Cards", wt: 700 } />
        <CodeView { code: \`
import { App } from 'queflow';
import MovieCard from './MovieCard.js';

const MyApp = new App('#app', {
  template: () =&gt; &#96;
    &lt;div id="movie-container"&gt;&lt;/div&gt;
  &#96;,
  run: () =&gt; {
    MovieCard.renderWith([
      { title: "Inception", rating: 8.8,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPv9pdgORtRy81cWqafpO9qzjOebWNOI_-WBu1S5uNn-HazD9mQwPYius&s=10",
        summary: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task."
      },
      { title: "Interstellar", rating: 8.6,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHwDbWC7CtmCtKCKA1BpD0lTSSAzosrB2_TJBRpFsCTk8437k0MPhNIE&s=10",
        summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
      },
      { title: "The Dark Knight", rating: 9.0,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcciMIYPjIesN7YGX4KonJBWJmUNNenB6PsNitgiar2COlNE-Jf4GMfc4&s=10",
        summary: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late."
      }
      ]);
  }
});

MyApp.render();
\`, filename: "App.js" } />
        <P { txt: "Step 3: Update All Movie Cards", wt: 700 } />
        <P { txt: "When new data arrives (e.g., updated ratings), you can update all cards in one go:" } />
        <CodeView { code: \`
MovieCard.set([
  { rating: 9.0 },
  { rating: 8.7 },
  { rating: 9.1 }
])
// Update only the ratings 
\` } />
        <div class="preview">
          <MovieCard {
            title: "Inception", rating: "9.0",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPv9pdgORtRy81cWqafpO9qzjOebWNOI_-WBu1S5uNn-HazD9mQwPYius&s=10",
            summary: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task."
          } />
          
          <MovieCard {
            title: "Interstellar", rating: 8.7,
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHwDbWC7CtmCtKCKA1BpD0lTSSAzosrB2_TJBRpFsCTk8437k0MPhNIE&s=10",
            summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
          } />
          
          <MovieCard {
            title: "The Dark Knight", rating: 9.1,
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcciMIYPjIesN7YGX4KonJBWJmUNNenB6PsNitgiar2COlNE-Jf4GMfc4&s=10",
            summary: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late."
          } />
        </div>

        <P { txt: "If you want to update everything, you can do this" } />
        <CodeView { code: \`
MovieCard.set([
  { title: "...", rating: 9.0, poster: "...", summary: "..." },
  { title: "...", rating: 8.7, poster: "...", summary: "..." },
  { title: "...", rating: 9.1, poster: "...", summary: "..." }
])
\` } />
        <Navigator { left: ['Nuggets', '/nuggets'], right: ['Event Handling', '/events'] } />
      </section>
    `
  }
})

export default Atom_