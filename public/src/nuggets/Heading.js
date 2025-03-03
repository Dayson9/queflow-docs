import { Nugget } from 'queflow'

const Heading = new Nugget("Heading", {
  template: (data) => {
    const marginBlock = data.size > 50 ? 'margin-block="80px 10px"' : data.size === 25 && data.id !== "fr" ? 'margin-top="50px"' : '';
    
    const id = data.id ? 'id={{ id }}' : '';
    return `
      <h1 ${id} ${ marginBlock } ${ data.size === 36 ? 'margin="0 0 30px 0"' : '' } color='inherit' ${data.size ? 'font-size="{{ size }}px"' : '' } ${ data.bottom ? 'margin-bottom="{{ bottom }}px"' : '' } ${ data.top ? 'margin-top="{{ top }}px"' : '' } class="inter">{{ txt }}</h1>
    `
  }
})

export default Heading