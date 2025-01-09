import { subComponent } from 'queflow'

const QComp = new subComponent('QComp', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Heading { txt: 'QComponent', size: 36 } />
        <Paragraph { txt: 'QComponent is a class that's used to rendering a QueFlow app.' } />
      </section>
    `
  },

  stylesheet: {
  }
})

export default QComp