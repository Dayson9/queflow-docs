import { Component } from "queflow"

const Template_ = new Component('Template_', {
  template: function(data) {
    return `
      <section>
        <Heading { txt: "Template", size: 36} />
      </section>
    `
  },
  stylesheet: {

  }
})

export default Template_