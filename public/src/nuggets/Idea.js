import { Nugget } from 'queflow'

const Idea = new Nugget('Idea', {
  template: () => {
    return `
      <div class="idea inter" color="rgba(255, 255, 255, .9)">
        <div class="flex-row">
          <Icon { class: 'bx-info-circle', size: 28 } />
          <Text { txt: 'Tip', size: 15 } />
        </div>
        <Text { txt: '{{ txt }}', size: 13, align: 'left' } />
      </div>
    `
  },

  stylesheet: {
    '.idea': `
      width: 85%;
      height: auto;
      padding: 10px 5px;
      background: rgb(30, 129, 64, .3);
      margin-block: 25px;
      border-radius: 5px;
      border: 1px solid rgb(30, 129, 74);
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
    `,
    '.flex-row': `
      margin-bottom: 10px;
    `
  }
})

export default Idea