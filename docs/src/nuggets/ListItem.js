import { Nugget } from 'queflow'

const ListItem = new Nugget('ListItem', {
  template: (data) => {
    return `
      <ul class="inter">
        ${ data.items.map(item => `<li>${item}</li>`).join('') }
      </ul>
    `
  },

  stylesheet: {
    'li': `
      color: rgba(255,255,255,.9);
      margin-block: 13px;
      line-height: 1.3em;
    `
  }
})

export default ListItem