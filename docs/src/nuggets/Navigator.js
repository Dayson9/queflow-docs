import { Nugget } from 'queflow'

const width = window.innerWidth

const Navigator = new Nugget("Navigator", {
  template: (data) => {
    return `
      <div class='nav' color='rgba(255, 255, 255, 0.9)'>
        <div class='inner'  ${data.left[1] ? "onclick=\"toPage('"+data.left[1]+"')\"" : ''}>
          ${data.left[0] ? "<Icon { class: 'bx-left-arrow-alt', size: 20 }/>" : '' }
          ${data.left[0] ? "<Text { txt:'"+data.right[0]+"' } />" : ''}
        </div>
      
        <div class='inner'  ${data.right[1] ? "onclick=\"toPage('"+data.right[1]+"')\"" : ''}>
          ${data.right[0] ? "<Text { txt:'"+data.right[0]+"' } />" : ''}
          ${data.right[0] ? "<Icon { class: 'bx-right-arrow-alt', size: 20 }/>" : '' }
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    
    '.inner': `
      width: 35%;
      height: 30%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `
  }
})

export default Navigator