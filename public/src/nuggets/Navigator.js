import { Nugget } from 'queflow'

const width = window.innerWidth

const Navigator = new Nugget("Navigator", {
  template: (data) => {
    return `
      <div class='nav flex-col inter' color='inherit' height="${ !data.left[0] || !data.right[1] ? 70 : 150 }px">
          <div class='inner flex-col' align-items="flex-start" ${data.left[1] ? "onclick=\"toPage('"+data.left[1]+"')\"" : ''}>
            ${data.left[0] ? '<Text { txt: "Prev", bottom: 15, size: 14 }/>' : ''}
          <div class="flex-row" color="teal" width="auto">
            ${data.left[0] ? "<Text { txt:'"+data.left[0]+"', size: 20 } />" : ''}
          </div>
        </div>
      
        <div class='inner flex-col' align-items="flex-end" ${data.right[1] ? "onclick=\"toPage('"+data.right[1]+"')\"" : ''}>
          ${data.right[0] ? '<Text { txt: "Next", bottom: 15, size: 14 }/>' : ''}
          <div class="flex-row" color="teal" width="auto">
          ${data.right[0] ? "<Text { txt:'"+data.right[0]+"', size: 20 } />" : ''}
          </div>
        </div>
      </div>
    `
  },
  
  stylesheet: {
    '.nav' : `
      width: ${ width < 768 ? '100' : '70' }%;
      height: 150px;
      background: transparent;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 0px;
      transform: translateX(-4%);
      padding-inline: 4%;
    `,
    
    '.inner': `
      width: 100%;
      min-height: 30%;
      padding-inline: 20px;
    `
  }
})

export default Navigator