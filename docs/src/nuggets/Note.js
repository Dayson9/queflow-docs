import { Nugget } from 'queflow'

const Note = new Nugget('Note', {
  template: () => {
    return `
      <div class="note" color="rgba(255, 255, 255, .9)">
        <div class="flex-row">
          <Icon { class: 'bx-info-circle', size: 28 } />
          <Text { txt: 'Note', size: 15 } />
        </div>
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 20px;
    `,
    
    'span': `
      width: 85%;
    `,
    'i': `
      margin-right: 5px;
    `
  }
})

export default Note