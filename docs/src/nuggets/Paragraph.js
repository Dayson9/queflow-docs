import { Nugget } from 'queflow'

const Paragraph = new Nugget("Paragraph", {
  template: (data) => {
    return `
      <Text { txt: '{{ txt }}', color: 'rgba(255, 255, 255, 0.9)', size: 17, align: 'left', weight: 300 } />
    `
  }
})

export default Paragraph