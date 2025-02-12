import { Nugget } from 'queflow'

const Cooking = new Nugget('Cooking', {
  template: () => {
    return `
        <div>
          <img src="./src/assets/img/cooking.gif">
          <Heading { txt: "Page under construction 🚧" } />
          <P { txt: "Dev is cooking something delicious, come back later.", align: "center" } />
        </div>
      `
  },

  stylesheet: {
    'div': `
      width: 100%;
      height: auto;
      text-align: center;
      box-sizing: border-box;
      padding-inline: 5px;
      padding-block: 12vh;
    `,
    'img': `
      border-radius: 10px;
      border: 2px solid white;
    `
  }
})

export default Cooking