import { Nugget } from 'queflow'

const UserCard = new Nugget('UserCard', {
  template: () => {
    return `
      <div class="card">
      <img src={{ src }}/>
      <div class="right">
        <h3>{{ name }}</h3>
        <p color="wheat">{{ job }}</p>
        <p>Lorem ipsum dolor sit amet cenq queres finito quadros.</p>
      </div>
    </div> 
   `
  },
  stylesheet: {
  '.card': `
    width: 290px;
    height: auto;
    padding: 10px 5px;
    margin-block: 10px;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: .8em;
  `,
  'img': `
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `,
  '.right': `
    width: 60%;
    height: 100px;
    box-sizing: border-box;
  `,
  'h3,p': `
    margin-block: 7px;
    color: white;
  `
  }
})

export default UserCard