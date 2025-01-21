import { Component } from "queflow"

const List = new Component("List", {
  data: {
    list: ['Oluwalonimi', 'Chisom', 'Danjuma']
  },
  template: function(data){
    return `
      <h1 color="slateblue">List</h1>
      <ul font-weight="450">
        ${ data.list.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <input type="text" id="input" value="Alex"/>
      <button font-weight="450" onclick={{
        data.list.push(input.value);
        input.value = ""
        input.focus()
      }}>Add +</button>
      `
  },
  stylesheet: {
    'button': `
      padding-inline: 17px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background: slateblue;
      color: white;
    `,
    'input': `
      width: 130px;
      height: 28px;
      border-radius: 5px;
      border: none;
      padding-left: 5px;
      background: rgba(100, 50, 180,.5);
      color: white;
      font-weight: 450;
    `
  }
})

export default List