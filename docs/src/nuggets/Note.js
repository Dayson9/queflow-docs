import { subComponent } from 'queflow'

const Note = new subComponent('Note', {
  template: () => {
    return `
      <div class="note flex-row" color="rgba(255, 255, 255, .9)">
        <Icon { class: 'bx-info-circle', size: 24 } />
        <Text { txt: '{{ txt }}', size: 13, align: 'left' } />
      </div>
    `
  },

  stylesheet: {
    '.note': `
      width: 85%;
      height: auto;
      padding: 10px 5px;
      background: rgb(30,64, 179, .3);
      margin-top: 17px;
      border-radius: 5px;
      border: 1px solid rgb(30,94, 179);
    `,
    
    'span': `
      width: 85%;
    `,
    
    'i': 'transform: translateY(-14px);'
  }
})

export default Note