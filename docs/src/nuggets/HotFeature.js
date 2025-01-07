import { Nugget } from 'queflow'
import Icon from './Icon.js'
import Paragraph from './Paragraph.js'

const HotFeature = new Nugget('HotFeature', {
  template: () => {
    return `
      <div class='main' color='rgba(255, 255, 255, 0.9)'>
        <div class='outer'>
          <div class='inner'>
            <Icon { class: 'bx {{ class }}', size: 33 } />
          </div>
        </div>
        <Text { txt: '{{ title }}', size: 30, align: 'left', bottom: 13, weight: 700 } />
        <Paragraph { txt: '{{ summary }}' } />
      </div>
    `
  },
  stylesheet: {
    '.main' : `
      width: 100%;
      height: 170px;
      text-align: left;
      margin: 0 auto;
      padding-inline: 20px;
      box-sizing: border-box;
      margin-top: 40px;
    `,
    
   '.main .outer' : `
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: linear-gradient(45deg, rgb(20, 148, 129), rgb(11, 76, 71));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 13px;
   `,
   
  '.main .inner' : `
      width: 65px;
      height: 65px;
      background: rgb(5,10,5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  `
  }
})

export default HotFeature