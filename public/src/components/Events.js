import { Component } from 'queflow'

const Events = new Component('Events', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Event handling", size: 36 } />
          <Paragraph { txt: "Frontend frameworks such as React, Vue, Svelte all have their ways of managing events in the DOM. QueFlow uses a unique and straightforward way of achieving that, let's look at an example:" } />
        <CodeView { code: \`
&lt;button onclick={{ count++ }_}&gt;Click&lt;/button&gt;
\` } />
          <Paragraph { txt: "Noticed something? 🤔....." } />
          <Paragraph { txt: "There's nothing like [@click] or [onClick] or quotes surrounding the double braces. Just write the event name, an equal-to sign, double braces and slot in your event handler, and it works. Let's look at another example:" } />
          <CodeView { code: \`
&lt;input type="text" oninput={{ data.msg = e.target.value }_}/&gt;
\` } />
        </section>
      `
  },

  stylesheet: {}
})

export default Events