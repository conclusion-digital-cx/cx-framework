import CX from '../../src/index.js'

CX({
  name: 'app-store',
  props: {
    title: 'Cool list',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }]
  }
})

CX({
  name: 'green-button',
  template: `<button onclick="console.log('Click Intern')" class='btn-ok'><slot>OK</slot></button>`,
  style: `.btn-ok { color: green; font-size:20px; }`, // Scoped style
  methods: {
    // Not working yet
    myFunction: () => {
      console.log('Click Intern')
    }
  }
})

CX({
  name: 'red-button',
  template: `<button onclick="myFunction()" class='btn-ok'><slot>OK</slot></button>`,
  style: `.btn-ok { color: red; font-size:20px; }`, // Scoped style
  methods: {
    // Not working yet
    myFunction: () => {
      console.log('Click Intern')
    }
  }
})

CX({
  name: 'my-list',
  props: {
    title: 'Cool list',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }]
  },
  render: ({ title, items }) => {
    return `<h2>${title}</h2><ul>${items
      .map(item => `<li>The ${item.title}</li>`)
      .join('')}</ul>`
  },
  created: props => {
    setInterval(function () {
      props.title = (props.title === 'Changed') ? 'Cool list' : 'Changed'
    }, 1000)
  }
})
