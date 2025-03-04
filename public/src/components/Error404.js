import { Component } from 'queflow'

const Error404 = new Component('Error404', {
  template: () => {
    return `
        <section text-align="center" width="100%" margin="0" padding="0 5px 0 5px">
          <Heading { txt: "404", size: 150, top: 30 } />
          <Heading { txt: "Page not found", size: 36 } />
          <ALink { text: "The page you requested was not found or moved to another URL, you can navigate back [home]", click: "toPage('/')" } />
        </section>
      `
  },

  stylesheet: {
    'section': `
      height: auto;
      box-sizing: border-box;
    `
  }
})

export default Error404