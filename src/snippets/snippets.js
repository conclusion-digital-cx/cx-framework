//Register custom component
class BasicElement extends HTMLElement {
    connectedCallback() {
        this.textContent = 'Welcome to CX.'
    }
}
customElements.define('basic-element', BasicElement)