import { Nugget } from 'queflow'

const TextField = new Nugget('TextField', {
  template: (data) => {
    return `
      <input type='text' id={{ id }} class="input" color="inherit" ${ data.input ? 'oninput={{ input }}' : '' } value={{ value }} margin-top="15px">
    `
  }
})

export default TextField