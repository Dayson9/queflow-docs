import { Nugget } from 'queflow'

const Heading = new Nugget("Heading", {
  template: (data) => {
    const marginBlock = data.size > 50 ? 'margin-block="80px 10px"' : '';
    return `
      <h1 ${ marginBlock } ${ data.size === 36 ? 'margin-bottom="30px"' : '' } color='rgba(255, 255,255, 0.9)' ${data.size ? 'font-size="{{ size }}px"' : '' } ${ data.bottom ? 'margin-bottom="{{ bottom }}px"' : '' } ${ data.top ? 'margin-top="{{ top }}px"' : '' } class="maren">{{ txt }}</h1>
    `
  }
})

export default Heading