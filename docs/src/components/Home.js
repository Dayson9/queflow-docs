import { subComponent } from 'queflow'

const Home = new subComponent('Home', {
  template: () => {
    return `
      <header>
        
      </header>
    `
  },

  stylesheet: {
    '.silver': `
      color: rgb(200, 200, 200);
    `
  }
})

export default Home