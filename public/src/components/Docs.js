import { Component } from 'queflow'

const Docs = new Component('Docs', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Documentation", size: 36 } />
          <Paragraph { txt: "This page contains everything you need to start using  QueFlowJS in your projects." } />
          <ListItem { items: ["#Core APIs",
            { label: "@App [class]", click: '/docs_app' },
            { label: "@Component [class]", click: '/docs_component' },
            { label: "@Nugget [class]", click: '/docs_nuggets' },
            { label: "@Template [class]" , click: '/docs_template'},
            "#Advanced",
            { label: "@Template Syntax" , click: '/docs_template-syntax'},
            { label: "@Event Handling" , click: '/docs_events'},
            { label: "@Reactivity" , click: '/docs_reactivity'}
            "#Extras",
            { label: "@Project Structure" , click: '/docs_project-structure'}
            ],
            top: 30 } />
        </section>
      `
  },

  stylesheet: {}
})

export default Docs