import CX from '../../src/index.js'



import './components/my-list/index.js'



CX({
    tag: 'green-button',
    template: `<button onclick="console.log('Click Intern')" class='btn-ok'><slot>OK</slot></button>`,
    style: `.btn-ok { color: green; font-size:20px; }`, //Scoped style
    methods: {
        //Not working yet
        myFunction: () => {
            console.log("Click Intern")
        }
    }
})






CX({
    tag: 'my-nav',
    props: {
        title: "Test App"
    },
    render: (props) => {
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