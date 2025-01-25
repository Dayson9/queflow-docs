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
            { label: "@Template [class]" , click: '/docs_template'}
            ],
            top: 50 } />
        </section>
      `
  },

  stylesheet: {}
})

export default Docs