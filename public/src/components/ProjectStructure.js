import { Component } from 'queflow'

const ProjectStructure = new Component('ProjectStructure', {
  template: () => {
    return `
      <section>
        <Heading { txt: "Project Structure", size:38 } />
        <P { txt: "When working with QueFlowJS, it is highly recommended to follow this project structure:", top: 20 } />
        
        <div class="structure">
          <pre color="rgba(255,255,255,.9)">
  my-queflow-app/

        ├── public/

        │   ├── index.html

        │   └── favicon.ico 

        ├── src/

        │   ├── App.js
        
        │   ├── Templates.js

        │   ├── components/ 

        │   │   ├── Header.js

        │   │   ├── Footer.js

        │   │   ├── Article.js 

        │   │   └── Homepage.js

        │   ├── nuggets/ 

        │   │   ├── Heading.js

        │   │   ├── Paragraph.js

        │   │   ├── Button.js 

        │   │   └── GlowingText.js  
  
        │   ├── styles/ 

        │   │   ├── App.css

        │   │   ├── Header.css

        │   │   └── Button.css

        │   ├── services/ 

        │   │   ├── api.js 

        │   ├── utils/ 

        │   │   ├── helpers.js

        │   ├── index.js 

        │   └── assets/ 

        │       ├── images/ 

        │       │   ├── logo.png

        │       │   └── background.jpg

        │       └── fonts/ 

        │           ├── myfont.ttf

        ├── package.json

        ├── README.md 
          </pre>
        </div>
        
      </section>
    `
  },

  stylesheet: {
    '.structure': `
      width: 95%;
      height: auto;
      border-radius: 10px;
      background: rgb(30, 35, 35);
      padding-block: 20px;
      margin-top: 15px;
      margin-bottom: 28px;
      padding-inline: 10px;
      box-sizing: border-box;
      overflow-x: scroll;
   `
  }
})

export default ProjectStructure              