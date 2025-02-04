import { Component } from 'queflow' 

const Reactivity = new Component('Reactivity', {
  template: () => `
    <section>
     <Heading { txt: "Reactivity", size: 36 } />
     <Paragraph { txt: "So far we've only covered the basics of Reactivity in QueFlow, now let's move on to the advanced ones." } />
     <Paragraph { txt: "Defining a reactive template is quite straightforward, for example:", top: 20 } />
     <CodeView { code: \`
&lt;cite&gt;-[[ author ]]&lt;/cite&gt;
\` } />

      <Paragraph { txt: "What happens under the hood" } />
      <ListItem { items: ["QueFlow loops through the attributes of an element, searching for reactive expressions.", "If QueFlow finds one, QueFlow evaluates it, while replacing it with the evaluated version.", "Then pushes the reactive attribute into an array which would be used for triggering updates in the DOM."] } />
      <Paragraph { txt: "When updating the DOM, same array would be used, reducing unnecessary overhead, making it much better than DOM diffing." } />
      
      <Heading { txt: "Reactivity in Components and App", top: 50 } />
      
      <Heading { txt: "In run() method", size: 20 } />
      <CodeView { code: \`
// Run is a method that runs immediately after a Component/App is rendered onto the DOM.
  run: (data) =&gt; {
    data.author = 'Aristotle'
  }
\` } />

      <Paragraph { txt: "Noticed the [data] parameter?, it represents the data property of an App/Component." } />
      <Heading { txt: "In Event Listeners", size: 20 } />
      <CodeView { code: \`
&lt;button onclick=[[
  data.count++;
  console.log(e.target.innerText);
]]&gt;Count is [[ count ]]&lt;/button&gt;
\` } />

      <Paragraph { txt: "The [e] is an argument that's passes to an event" } />
    </section>
  `
})

export default Reactivity