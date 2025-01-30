import { Component } from 'queflow'

const Events = new Component('Events', {
  data: {
    x: 0,
    y: 0
  },
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
          <Paragraph { txt: "From the example, whenever the [oninput] event is triggered, [data.msg] would be assigned the value of the input field.  The [e] is an object containing the arguments passed to an event, while [e.target] points to the element that triggered the event." } />
          
          <Heading { txt: "Types of Handlers" } />
          <Paragraph { txt: "So far we've only talked about event handlers that spans only one line, there are two types of handlers; Inline handler and method handlers." } />
          <Heading { txt: "Inline Handlers", size: 20 } />
          <Paragraph { txt: "As stated above, inline handlers are handlers that only span one line, they are mostly used in simple cases, for example:" } />
        <CodeView { code: \`
&lt;button onclick={{ data.count++ }_}&gt;Click&lt;/button&gt;
\` } />    
          <Note { txt: "The [data] property is part of a Component/App that holds reactive data, which means any changes made it would trigger updates in the UI." } />
          
          <Heading { txt: "Method Handlers", size: 20 } />
          <Paragraph { txt: "Method handlers are handlers that calls a method passed to it, they are commonly used in complex scenarios." } />
          <CodeView { code: \`
&lt;button onclick={{ increment(); }_}&gt;Click&lt;/button&gt;
\` } />
          <Paragraph { txt: "To wrap it up, let's look at a comprehensive example:" } />
          <CodeView { code: \`
const MyApp = new App("#app", {
  data: {
    x: 0,
    y: 0
  },
  template: () =&gt; {
    return &#96;
      &lt;div width="100%" height="100px" color="mediumpurple"
       ontouchmove={{
        const t = e.touches[0];
        data.x = t.clientX;
        data.y = t.clientY;
    }_}&gt;
      &lt;h2&gt;X: {{ x }_}&lt;/h2&gt;
      &lt;h2&gt;Y: {{ y }_}&lt;/h2&gt;
    &lt;/div&gt;
  &#96;
  }
})

MyApp.render();
\` } />
          <Paragraph { txt: "Move your hand on the preview 👇" } />
          <div class="preview">
            <div width="100%" height="100px" color="mediumpurple" ontouchmove={{
              const t = e.touches[0];
              data.x = t.clientX;
              data.y = t.clientY;
            }} onmousemove={{ 
              const t = e.touches[0];
              data.x = t.clientX;
              data.y = t.clientY;
            }}>
              <h2>X: {{ x }}</h2>
              <h2>Y: {{ y }}</h2>
            </div>
          </div>
          
          <
          
          <Navigator { left: ['Template', '/docs_template'], right: ['Template Syntax', '/docs_reactivity'] } />
            
        </section>
      `
  },

  stylesheet: {}
})

export default Events