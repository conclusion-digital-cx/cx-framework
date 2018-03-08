CX({
  tag: 'my-list',
  props: {
    title: 'Cool list',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }]
  },
  render: (props) => {
    let { title, items } = props
    console.log('Render')
    return `<h2>${title}</h2><ul>${items.map(item => `<li>The ${item.title}</li>`).join('')}</ul>`
  },
  created: (props) => {
    // console.log("Component created");
    setTimeout(function () {
      props.title = 'Changed'
    // console.log("ey")
    }, 500)
  }
})
