import CX from '../../src/index.js'

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
  name: 'my-list',
  props: {
    title: 'Cool list',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }]
  },
  render: props => {
    let { title, items } = props
    console.log('Render')
    return `<h2>${title}</h2><ul>${items
      .map(item => `<li>The ${item.title}</li>`)
      .join('')}</ul>`
  },
  created: props => {
    // console.log("Component created");
    setTimeout(function () {
      props.title = 'Changed'
      // console.log("ey")
    }, 500)
  }
})

CX({
  name: 'my-nav',
  props: {
    title: 'Test App'
  },
  render: props => {
    let { title } = props

    return `
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">${title}</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
        `
  }
})
