import { Nugget } from 'queflow'
import Icon from './Icon.js'
import P from './Paragraph.js'

const HotFeature = new Nugget('HotFeature', {
  template: () => {
    return `
      <div class='main inter' border-color={{ $theme.mode == 'dark' ? '#353B41' : '#D7D9DF'}} color={{ $theme.mode == 'dark' ? '#FCFCFD' : 'rgb(0,0,0,.9)' }} background={{ $theme.mode == 'dark' ? '#18191B' : 'white' }}>
        <div class='outer'>
          <div class='inner' background={{ $theme.mode == 'dark' ? 'rgb(12, 16, 18)' : '#FCFCFD' }}>
            <Icon { class: '{{ class }}', size: 33 } />
          </div>
        </div>
        <Text { txt: '{{ title }}', size: 30, align: 'left', bottom: 13, wt: 700, class: "maren" } />
        <P { txt: '{{ summary }}' } />
      </div>
    `
  },
  stylesheet: {
    '.main' : `
      width: 100%;
      height: auto;
      text-align: left;
      margin: 0 auto;
      padding: 10px 20px;
      box-sizing: border-box;
      margin-block: 15px;
      border: 1px solid #353B41;
      border-radius: 10px;
    `,
    '.main > *': "margin-block: 0px;",
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
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  `
  }
})

export default HotFeature