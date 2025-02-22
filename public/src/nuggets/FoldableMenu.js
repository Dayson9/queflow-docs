import { Nugget } from "queflow"

const width = window.innerWidth

const FoldableMenu = new Nugget('FoldableMenu', {
  template: function(data){
    this.menuIndex = this.menuIndex||0;
    let out = data.items.map(({ label, children }) => {
      return `
        <div class="outer inter">
          <div class="top" onclick="data.example.menuSwitch[${this.menuIndex}] = !data.example.menuSwitch[${this.menuIndex}]">
          <Icon { class: "bx-menu", size: 15 } />
          <Text { txt: "${label}", weight: 600, align: "left" } />
          </div>
          <div class="inner" display={{ example.menuSwitch[${this.menuIndex}] ? 'block' : 'none' }}>
            ${ children.map(label => `
            <Text { txt: "${label}", align: "left", click: \`
              const key = e.target.innerText
              loadExample(key, data)
              data.menuIsOpen = false
            \` } />`).join('') }
          </div>
        </div>
      `
    }).join('')
    this.menuIndex++
    return out
  },
  stylesheet: {
    '.outer': `
      width: 100%;
      height: auto;
      color: rgb(255,255,255,.7);
      text-align: left!important;
      box-sizing: border-box;
      padding: 10px;
    `,
    '.inner': `
      width: 80%;
      margin-left: 15%;
      height: auto;
    `,
    'i': `
      display: inline;
    `,
    '.top > span': `
      display: inline;
    `,
    'span': `
      margin-block: 5px;
    `
  }
})

export default FoldableMenu