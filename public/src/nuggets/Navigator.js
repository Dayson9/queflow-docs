import { Nugget } from 'queflow'

const width = window.innerWidth

const Navigator = new Nugget("Navigator", {
  template: (data) => {
    return `
      <div class='nav flex-row inter' color='rgba(255, 255, 255, 0.9)'>
          <div class='inner flex-col' align-items="flex-start" ${data.left[1] ? "onclick=\"toPage('"+data.left[1]+"')\"" : ''}>
            ${data.left[0] ? '<Text { txt: "Prev", bottom: 15, size: 14 }/>' : ''}
          <div class="flex-row" color="teal">
            ${data.left[0] ? "<Text { txt:'"+data.left[0]+"', size: 20 } />" : ''}
          </div>
        </div>
      
        <div class='inner flex-col' align-items="flex-end" ${data.right[1] ? "onclick=\"toPage('"+data.right[1]+"')\"" : ''}>
          ${data.right[0] ? '<Text { txt: "Next", bottom: 15, size: 14 }/>' : ''}
          <div class="flex-row" color="teal">
          ${data.right[0] ? "<Text { txt:'"+data.right[0]+"', size: 20 } />" : ''}
          </div>
        </div>
      </div>
    `
  },
  
  stylesheet: {
    '.nav' : `
      width: ${ width < 768 ? '100' : '70' }%;
      height: 100px;
      background: transparent;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 10px;
      transform: translateX(-4%);
      padding-inline: 4%;
    `,
    
    '.inner': `
      width: auto;
      height: 30%;
    `
  }
})

export default Navigator