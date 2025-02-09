import { Nugget } from 'queflow'

const ListItem = new Nugget('ListItem', {
  template: (data) => {
    return `
      <ul class="inter" ${ data.top ? 'margin-top="{{ top }}px"' : '' }>
        ${ data.items.map(item => {
        const path = item.click;
        item = typeof item === "object" ? item.label : item;
        let added = "";
          if (item.startsWith("#")) {
            added+= 'font-size="18px" font-weight="650" margin-top="28px" '
            item = item.slice(1)
          } 
          
          if(item.startsWith("@")){
            added+= 'list-style-type="none" '
          }
          
        const hlReg = /\[[^\[]+\]/g
        item = item.replace(hlReg, (match) => `<span class="highlighted">${ match.slice(1, match.length-1)}</span>`)
  
        if(path){
          return `
            <li ${ added }>
              <Link { to: "${path}", label: "${ item.startsWith("@") ? item.slice(1) : item }" } />
            </li>`
        } else {
          return `
            <li ${ added }>
              ${ item.startsWith("@") ? item.slice(1) : item }
            </li>`
        }
        }).join('') }
        
      </ul>
    `
  },

  stylesheet: {
    'li': `
      font-size: 18px;
      margin-block: 13px;
      line-height: 1.1em;
      `,
     'a': `
      color: rgb(255,255,255,.9);
    `
  }
})

export default ListItem