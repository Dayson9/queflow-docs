import { Nugget } from "queflow"

const width = window.innerWidth

const FoldableMenu = new Nugget('FoldableMenu', {
  template: function(data) {
    this.menuIndex = this.menuIndex || -1;
    let out = data.items.map(({ label, children }) => {
      this.menuIndex++
      return `
        <div class="outer inter">
          <div class="top" margin-top="-10px" onclick="data.example.menuSwitch[${this.menuIndex}] = !data.example.menuSwitch[${this.menuIndex}]">
          <Icon { size: "15px", class: "bx bx-chevron-{{ example.menuSwitch[${this.menuIndex}] ? 'down' : 'right' }}" } />
          <Text { txt: "${label}", weight: 600, align: "left", size: 15 } />
          </div>
          <div class="inner" display={{ example.menuSwitch[${this.menuIndex}] ? 'block' : 'none' }}>
            ${ children.map(label => `
            <Text { txt: "${label}", align: "left", click: \`
              const key = e.target.innerText
              loadExample(key, data)
              data.menuIsOpen = false
            \`, size: 15 } />`).join('') }
          </div>
        </div>
      `
    }).join('')
    return out
  },
  stylesheet: {
    '.outer': `
      width: 100%;
      height: auto;
      text-align: left!important;
      box-sizing: border-box;
      padding: 10px;
    `,
    '.inner': `
      width: 100%;
      margin-left: 12%;
      height: auto;
    `,
    'i': `
      display: inline;
      margin-right: -6px;
    `,
    '.top > span': `
      display: inline;
    `,
    '.inner span': `
      margin-block: 5px;
    `
  }
})

export default FoldableMenu