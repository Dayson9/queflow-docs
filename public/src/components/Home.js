import { Component } from 'queflow'
import HotFeature from '../nuggets/HotFeature.js'

const width = window.innerWidth;

const Home = new Component('Home', {
  template: () => {
    return `
    <div>
      <h1 class="pxp-el8 maren">
        <span class="pxp-el9">Craft highly</span>
        <span class="pxp-el10">Performant </span>
        <span class="pxp-el11">Web Apps at scale</span>
      </h1>
      <p class="pxp-el12 inter">Deliver highly optimized web apps without much effort.</p>
      <div class="flex-${ width < 768 ? 'col' : 'row' } btn">
      
      <Link { to: "/get-started", label: \`
        <button class="inter pxp-el13">
        <span class="pxp-el14">Get Started</span>
        <span class="bx bx-right-arrow-alt pxp-el15"></span>
      </button>\` } />
     
     <Link { to: "/docs", label: \` 
      <button class="pxp-el16 inter">
        <span class="pxp-el14">Explore Docs</span>
        <span class="bx bx-menu pxp-el17"></span>
      </button> \` } />
      </div>
      <div id="description">
        <h2 class="pxp-el10 maren">What is QueFlow?</h2>
        <P { txt: 'QueFlow is a JavaScript framework for building performant, optimized websites in a declarative manner.' } />
        
        <HotFeature { title: 'Fast', class: 'bxs-rocket', summary: 'QueFlow was designed to build fast interactive sites with so much ease. Updates are fast and performance optimized.' }/>
        <HotFeature { title: 'Data-Driven', class: 'bxs-data', summary: 'QueFlow can handle rendering data-driven/data-heavy websites. Which makes it suitable for building websites that requires real-time updates.' }/>
        <HotFeature { title: 'Performant', class: 'bxs-zap', summary: 'Reactive, compiler optimized rendering that rarely requires manual handling.' }/>
        <HotFeature { title: 'Unique', class: 'bxs-bulb', summary: 'Does not use virtual DOM, interacts directly with the DOM thereby improving performance, smoother updates.' }/>
      </div>
     </div>
    `
  },

  stylesheet: {
    '> *': `
      margin-block: 70px;
    `,
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
        color: rgba(255,255,255,.9);
    `,

    '.pxp-el12': `  
        color: rgba(255,255,255,.9);
        text-align: center;
        font-size: 18px;
    `,
    '.btn': `
        width: ${ width < 768 ? 100 : 45 }vw;
        height: auto;
        margin: 0 auto;
    `,
    '.pxp-el13': `  
        width: ${ width < 768 ? 60 : 20 }vw;
        height: ${ width < 768 ? 45 : 57 }px;
        border: none;
        border-radius: 15px;
        text-align: center;
        margin-block: 5px;
        color: black;
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
        width: ${ width < 768 ? 60 : 20 }vw;
        height: ${ width < 768 ? 45 : 57 }px;
        border-radius: 15px;
        margin-block: 5px;
        text-align: center;
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