import { Nugget } from 'queflow'

const Warning = new Nugget('Warning', {
  template: () => {
    return `
      <div class="note inter" color="rgba(255, 255, 255, .9)">
        <div class="flex-row">
          <Text { txt: '⚠️', size: 28 } />
          <Text { txt: 'Warning', size: 15 } />
        </div>
        <Text { txt: '{{ txt }}', size: 13, align: 'left' } />
      </div>
    `
  },

  stylesheet: {
    '.note': `
      width: 85%;
      height: auto;
      padding: 10px 5px;
      background: rgb(179,64, 30, .3);
      margin-block: 25px;
      border-radius: 5px;
      border: 1px solid rgb(179,94, 30);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 20px;
    `,

    'span': `
      width: 85%;
    `,
    'i': `
      margin-right: 5px;
    `
  }
})

export default Warning