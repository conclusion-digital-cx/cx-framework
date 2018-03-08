CX, a minimal JS Framework

Features
---
- Minimal
- Inherently it is is a wrapper for the: customElements.define('fancy-tabs', class extends HTMLElement { })

Links
---
Render engine https://css-tricks.com/html-templates-via-javascript-template-literals/


Get started
---
Just open one of the examples local in your browser.


Example
---

#index.html

    <script type="module" src="./app.js"></script>
    <green-button onclick='console.log(this)'>Cool</green-button>

#app.js

    import CX from '../../src/index.js'
    CX({
        tag: 'green-button',
        template: `<button onclick="console.log('Click Intern')" class='btn-ok'><slot>OK</slot></button>`,
        style: `.btn-ok { color: green; font-size:20px; }`, //Scoped style
    })




Related projects
---
https://github.com/skatejs/skatejs
http://robdodson.me/interoperable-custom-elements/
https://developers.google.com/web/fundamentals/web-components/shadowdom
https://www.polymer-project.org/2.0/start/quick-tour
https://gist.github.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b