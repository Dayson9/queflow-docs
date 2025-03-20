import { Nugget } from 'queflow'

const MovieCard = new Nugget('MovieCard', {
  stylesheet: {
    '.card': `
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 15px;
      padding: 10px;
      margin: 10px auto;
      color: inherit;
    `,
    'img': `
      width: 100%;
      border-radius: 8px;
      height: 340px;
    `,
    'h3, p': `
      margin: 5px 0;
    `
  },
  template: () => `
    <div class="card">
      <img src={{ poster }} alt="{{ title }} poster" />
      <h3>{{ title }}</h3>
      <p color="orange">Rating: {{ rating }}</p>
      <p>{{ summary }}</p>
    </div>
`
});

export default MovieCard