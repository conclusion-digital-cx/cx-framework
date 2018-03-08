// window.CX = new CX
export default new CX()
// module.exports = new CX

function CX () {
  const components = {}
  this.components = components

  this.instance = function (settings) {
    // return new CX(settings)
    return this
  }

  this.component = function (tagName, Class) {
    components[tagName] = new CXComponent(tagName, Class)
    return components[tagName]
  }
}

function CXComponent (tagName, Class) {
  let template = '<div>Just a basic custom element.</div>'

  class BasicElement extends HTMLElement {
    connectedCallback () {
      // this.textContent = template
      this.innerHTML = template
    }
  }
  customElements.define(tagName, BasicElement)

  // Chains
  this.template = (_template) => { template = _template; return this }
  this.prop = () => { return this }
  this.events = () => { return this }
}
