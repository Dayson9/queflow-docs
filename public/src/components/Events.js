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
        <P { txt: "Frontend frameworks such as React, Vue, and Svelte all have their ways of managing events in the DOM. QueFlow uses a unique and straightforward approach. Let's look at an example:" } />
        <CodeView { code: \`
&lt;button onclick=[[ data.count++ ]]&gt;Click&lt;/button&gt;
\` } />
        <P { txt: "Notice something? 🤔....." } />
        <P { txt: "There's nothing like [@click], [onClick], or quotes surrounding the double braces. Just write the event name, an equal-to sign, double braces, and slot in your event handler—it just works. Let's look at another example:" } />
        <CodeView { code: \`
&lt;input type="text" oninput=[[ data.msg = e.target.value ]]/&gt;
\` } />
        <P { txt: "In this example, whenever the [oninput] event is triggered, [data.msg] is assigned the value of the input field. The [e] is an object containing the arguments passed to the event, and [e.target] points to the element that triggered the event." } />
        
        <Heading { txt: "Types of Handlers" } />
        <P { txt: "So far, we've only discussed event handlers that span a single line. There are three types of handlers: inline handlers, multiline handlers, and method handlers." } />
        
        <Heading { txt: "Inline Handlers", size: 20 } />
        <P { txt: "Inline handlers are handlers that span only one line. They are mostly used in simple cases, for example:" } />
        <CodeView { code: \`
&lt;button onclick=[[ data.count++ ]]&gt;Click&lt;/button&gt;
\` } />    

        <Heading { txt: "Multiline Handlers", size: 20 } />
        <P { txt: "Multiline handlers span more than one line and are recommended for complex scenarios:" } />
        <CodeView { code: \`
&lt;button
  onclick=[[ 
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then((d) => {
        data.quote = d.quote;
        data.author = d.author;
      })
  ]]&gt;Click&lt;/button&gt;
\` } />    
        <Note { txt: "The [data] property is part of a Component/App that holds reactive data. Any changes made to it will trigger updates in the UI." } />
        
        <Heading { txt: "Method Handlers", size: 20 } />
        <P { txt: "Method handlers call a method passed to them:" } />
        <CodeView { code: \`
&lt;button onclick=[[ increment() ]]&gt;Click&lt;/button&gt;
\` } />
        
        <P { txt: "To wrap it up, let's look at a comprehensive example:" } />
        <CodeView { code: \`
const MyApp = new App("#app", {
  data: {
    x: 0,
    y: 0
  },
  template: () =&gt; {
    return &grave;
      &lt;div width="100%" height="100px" color="mediumpurple"
        ontouchmove=[[
          const t = e.touches[0];
          data.x = t.clientX;
          data.y = t.clientY;
        ]]&gt;
        &lt;h2&gt;X: [[ x ]]&lt;/h2&gt;
        &lt;h2&gt;Y: [[ y ]]&lt;/h2&gt;
      &lt;/div&gt;
    &grave;
  }
})

MyApp.render();
\` } />
        <P { txt: "Move your hand over the preview below 👇" } />
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
        
        <Navigator { left: ['Atom', '/template'], right: ['Reactivity', '/reactivity'] } />
      </section>
    `
  }
})

export default Events