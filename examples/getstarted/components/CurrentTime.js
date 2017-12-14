class CurrentTime extends HTMLElement {
    constructor() {
        super();
        // Bind render to this instance so we
        // can call it from within our template
        this.render = this.render.bind(this);
        this.render();
    }
    render() {
        // Note the diff.html tagged template string
        diff.innerHTML(this, diff.html `
        <button onclick="${this.render}">
          Show current unix time
        </button>
        <span>${Date.now()}</span>
      `);
    }
}