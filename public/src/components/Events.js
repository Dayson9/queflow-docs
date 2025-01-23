import { Component } from 'queflow'

const Events = new Component('Events', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Event Handling", size: 36 } />
          <Paragraph { txt: "Frontend frameworks such as React, Vue, Svelte all have their ways of managing events in the DOM. QueFlow uses a unique and straightforward way of achieving that, let's look at an example:" } />
        <CodeView { code: \`
&lt;button onclick={{ data.count++ }_}&gt;Click&lt;/button&gt;
\` } />
          <Paragraph { txt: "Noticed something? 🤔....." } />
          <Paragraph { txt: "There's nothing like [@click] or [onClick] or quotes surrounding the double braces. Just write the event name, an equal-to sign, double braces and slot in your event handler, and it works. Let's look at another example:" } />
          <CodeView { code: \`
&lt;input type="text" oninput={{ data.msg = e.target.value }_}/&gt;
\` } />
          <Paragraph { txt: "From the example, whenever the [oninput] event is triggered, [data.msg] would be assigned the value of the input field.  The [e] is an object that contains everything about an event, while [e.target] points to the element that triggered the event." } />
          
          <Heading { txt: "Types of Handlers" } />
          <Paragraph { txt: "So far we've only talked about event handlers that spans only one line, there are two types of handlers; Inline handler and multiline handlers." } />
          <Heading { txt: "Inline Handlers", size: 20 } />
          <Paragraph { txt: "As stated above, inline handlers are handlers that only span one line, they are mostly used in simple cases, for example:" } />
        <CodeView { code: \`
&lt;button onclick={{ data.count++ }_}&gt;Click&lt;/button&gt;

\` } />   <Heading { txt: "Method Handlers", size: 20 } />
          <Paragraph { txt: "Method handlers are handlers that calls a method passed to it, they are used in complex scenarios." } />
        <CodeView { code: \`
&lt;button onclick={{ increment(); }_}&gt;Click&lt;/button&gt;
\` } />
        </section>
      `
  },

  stylesheet: {}
})

export default Events