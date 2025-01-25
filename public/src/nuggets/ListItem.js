import { Nugget } from 'queflow'

const ListItem = new Nugget('ListItem', {
  template: (data) => {
    return `
      <ul class="inter" ${ data.top ? 'margin-top={{ top }}px' : '' }>
        ${ data.items.map(item => {
        const path = item.click;
        item = typeof item === "object" ? item.label : item;
        let added = "";
          if (item.startsWith("#")) {
            added+= 'font-size="18px" font-weight="650" '
            item = item.slice(1)
          } else {
            added+= 'list-style-type="none" '
          }
          
        const hlReg = /\[[^\[]+\]/

        item = item.replace(hlReg, (match) => `<span class="highlighted">${ match.slice(1, match.length-1)}</span>`)
        console.log(path)
        return `<li ${ added } ${ path ? `onclick="toPage('${path}')"` : '' }>${ item }</li>`
        }).join('') }
        
      </ul>
    `
  },

  stylesheet: {
    'li': `
      margin-block: 13px;
      line-height: 1.3em;
    `
  }
})

export default ListItem