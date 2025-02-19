import { Template } from 'queflow'

const List = new Template('List', {
  template: () => `
    <li>{{ text }}</li>
  `
}, 'mount')

export default List