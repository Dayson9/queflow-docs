import { Component } from 'queflow'

const Docs = new Component('Docs', {
  template: () => {
    return `
        <section>
          <Heading { txt: "Documentation", size: 36 } />
          <P { txt: "This page contains everything you need to start using  QueFlowJS in your projects." } />
          <ListItem { items: ["#Introduction",
            { label: "@Quick Start", click: '/quick-start' },
            { label: "@Syntax Highlighting" , click: '/highlighting'},
            { label: "@Template Syntax", click: '/template-syntax' }, "#Core APIs",
            { label: "@App", click: '/app' },
            { label: "@Component", click: '/component' },
            { label: "@Component & App Methods" , click: '/methods'},
            { label: "@Nugget", click: '/nuggets' },
            { label: "@Atom" , click: '/atom'},
            "#Advanced",
            { label: "@Event Handling" , click: '/events'},
            { label: "@Reactivity" , click: '/reactivity'},
            { label: "@Global State" , click: '/global_state'},
            "#Extras",
            { label: "@Project Structure" , click: '/project-structure'}
            ],
            top: 30 } />
        </section>
      `
  },

  stylesheet: {}
})

export default Docs