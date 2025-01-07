import { subComponent } from 'queflow'

const GetStarted = new subComponent('GetStarted', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file, as shown below' } />
      </section>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `
  }
})

export default GetStarted