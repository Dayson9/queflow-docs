import { Nugget } from 'queflow'

const UserCard = new Nugget('UserCard', {
  template: () => {
    return `
      <div class="card" background={{ $theme.mode == 'dark' ? '#18191B' : 'white' }} border-color={{ $theme.mode == 'dark' ? '#353B41' : '#D7D9DF'}}>
      <img src={{ src }} alt="{{ name }}'s picture"/>
      <div class="right">
        <h3>{{ name }}</h3>
        <p color="wheat">{{ job }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
    height: auto;
    box-sizing: content-box;
  `,
  'h3,p': `
    margin-block: 7px;
    color: inherit;
  `
  }
})

export default UserCard