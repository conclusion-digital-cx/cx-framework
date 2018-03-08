// window.CX = new CX
export default createComponent
// module.exports = new CX

/*
https://medium.com/dev-channel/the-case-for-custom-elements-part-2-2efe42ce9133
*/

// ----------
// CX Framework
// ----------
function createComponent (input) {
  let { tag, template, props, el, created, render, methods, style, shadow } = input

  // Proxy Props
  if (props) {
    // console.log("Props proxy handler installed", props)
    var _props = new Proxy(props, {
      set: (target, property, value) => {
        target[property] = value
        console.log(`Property '${property}' changed to:`, value)

        // Trigger rerender
        template = render(props)
        console.log(TheComp, template)
        document.querySelector('my-list').render(template)

        // Indicate success
        return true
      },
      get: (target, property) => {
        var value = target[property]
        // console.log(obj)
        return value
      }
    })
  }
  // http://localhost:5000/examples/minimal/

  if (_props) props = _props

  // Template from el?
  if (el) {
    template = document.getElementById(el).innerHTML
    // console.log(el, template)
  }

  // Template from render?
  if (render) {
    template = render(props)
    console.log(template)
  }

  // From slot?

  // Shadow?
  if (style) { shadow = true } else { shadow = false }

  class TheComp extends HTMLElement {
    // myFunction() {
    //     console.log("Click 3")
    // }
    constructor () {
      // Called when an instance of the element is created or upgraded
      super() // always call super() first in the ctor.
      // Bind render to this instance so we
      // can call it from within our template
      this.render = this.render.bind(this)

      // Call created
      if (created) created(props)
    }

    connectedCallback () {
      this.render(template)
    }
    disconnectedCallback () {
      // Called every time the element is removed from the DOM.
      console.log(`disconnectedCallback`)
    }
    attributeChangedCallback (attrName, oldVal, newVal) {
      // Called when an attribute was added, removed, or updated
      console.log(`attributeChangedCallback ${attrName}, ${oldVal}, ${newVal}`)
    }
    adoptedCallback () {
      // Called if the element has been moved into a new document
      console.log(`adoptedCallback`)
    }

    // Custom methods
    render (template) {
      if (shadow) {
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
                      <style>${style}</style>
                      ${template}
                    `
      } else {
        this.innerHTML = template
      }
    }
  }

  // Register el
  customElements.define(tag, TheComp)
}
