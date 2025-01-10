import { subComponent } from 'queflow'

const Note = new subComponent('Note', {
  template: () => {
    return `
      <div class="note" color="rgba(255,255,255,.9)">
        <Icon { class: 'bx-info-circle' } />
        <Text { txt: '{{ txt }}' } />
      </div>
    `
  },

  stylesheet: {
    '.note': `
      width: 80%;
      height: auto;
      padding: 10px;
      background: rgb(30,64, 179, .3);
    `,
    '.note *': 'display: inline;'
  }
})

export default Note