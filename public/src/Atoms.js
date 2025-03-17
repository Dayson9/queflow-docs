import { Atom } from 'queflow'

const List = new Atom('List', {
  template: () => `
    <li>{{ text }}</li>
  `
}, 'mount')

export default List