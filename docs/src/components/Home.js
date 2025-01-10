import { subComponent } from 'queflow'
import HotFeature from '../nuggets/HotFeature.js'

const Home = new subComponent('Home', {
  data: {
    display: 'block'
  },
  template: () => {
    return `
    <div display={{ this.data.display }}>
      <h1 class="pxp-el8"><span class="pxp-el9">Craft highly</span>
        <span class="pxp-el10">Performant </span>
        <span class="pxp-el11">Web Apps at scale</span>
      </h1>
      <p class="pxp-el12">Deliver highly optimized web apps without much effort.</p>
      <button class="pxp-el13" onclick={{ toPage('/qcomponent') }}>
        <span class="pxp-el14">Get Started</span>
        <span class="bx bx-right-arrow-alt pxp-el15"></span>
      </button>
      <button class="pxp-el16">
        <span class="pxp-el14">Explore Docs</span>
        <span class="bx bx-menu pxp-el17"></span>
      </button>
      
      <div id="description">
        <h2 class="pxp-el10">What is QueFlow?</h2>
        <Text { txt: 'QueFlow is a JavaScript framework for building performant, optimized websites in a declarative manner.', color: 'rgba(255, 255, 255, 0.9)', align: 'left' } />
        
        <HotFeature { title: 'Fast', class: 'bxs-rocket', summary: 'QueFlow was designed to build fast interactive sites with so much ease. Updates are fast and performance optimized.' }/>
        <HotFeature { title: 'Data-Driven', class: 'bxs-data', summary: 'QueFlow can handle rendering data-driven/data-heavy websites. Which makes it suitable for building websites that requires real-time updates.' }/>
        <HotFeature { title: 'Performant', class: 'bxs-rocket', summary: 'Reactive, compiler optimized rendering that rarely requires manual handling.' }/>
        <HotFeature { title: 'Unique', class: 'bxs-rocket', summary: 'Does not use virtual DOM, interacts directly with the DOM thereby improving performance, smoother updates.' }/>
      </div>
     </div>
    `
  },

  stylesheet: {
    '.pxp-el8': `  
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
        font-size: 40px;
        transform: translateY(6vh);
        margin: 40px 10px 60px;
    `,

    '.pxp-el10': `  
        -webkit-text-fill-color: transparent;
        background: linear-gradient(135deg, rgb(20, 138, 129), rgb(11, 76, 71));
        -webkit-background-clip: text;
    `,

    '.pxp-el11': `
        color: white;
    `,

    '.pxp-el12': `  
        color: white;
        text-align: center;
    `,

    '.pxp-el13': `  
        width: 60%;
        height: 45px;
        border: none;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 16%;
        margin: 0vh 0px 0px 20vw;
        background: rgb(255, 255, 255);
    `,

    '.pxp-el14': `  
        font-family: Inter;
        font-weight: 550;
        font-size: 14.5px;
    `,

    '.pxp-el15': `  
        font-family: Inter;
        font-size: 20px;
        font-weight: 700;
        transform: translateY(2px);
        color: rgb(20, 138, 129);
    `,

    '.pxp-el16': `  
        width: 60%;
        height: 45px;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 14%;
        margin: 2vh 0px 0px 20vw;
        background: transparent;
        border: 2px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
    `,

    '.pxp-el17': `  
        font-family: Inter;
        font-size: 20px;
        font-weight: 700;
        transform: translateY(2px);
    `,
   '#description' : `
      width: 80%;
      height: auto;
      margin: 0 auto;
      text-align: left;
      margin-top: 20vh;
      margin-bottom: 10vh;
   `
  }
})

export default Home