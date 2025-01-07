import { Nugget } from 'queflow'

const Heading = new Nugget("Heading", {
  template: (data) => {
    return `
      <h1 color='rgba(255, 255,255, 0.9)' ${data.size ? 'font-size={{ size }}px' : '' }>{{ txt }}</h1>
    `
  }
})

export default Heading