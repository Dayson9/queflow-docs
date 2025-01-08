import { subComponent } from 'queflow'
import Heading from '../nuggets/Heading.js'
import CodeView from '../nuggets/CodeView.js'

const GetStarted = new subComponent('GetStarted', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
      <section display={{ this.data.display }}>
        <Heading { txt: 'Get Started', size: 40 } />
        <Heading { txt: 'Installation' } />
        <Paragraph { txt: 'To quickly get your hands dirty with QueFlowJS, add the below code to the body section of an HTML file, as shown below 👇' } />
        
        <CodeView { code: ['&lt;script type="importmap"&gt;', '{', '"imports": {', '"queflow": "https://cdn.jsdelivr.net/gh/dayson9/queflowJS@main/lib/queflow.esm-browser.min.js"', '}}', '&lt;/script&gt;'] } />
      </section>
    `
  },

  stylesheet: {
    'section': `
      box-sizing: border-box;
      padding-inline: 7%;
    `
  }
})

export default GetStarted