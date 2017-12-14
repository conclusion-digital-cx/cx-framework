import CX from '../../src/index.js'
import SceneService from './SceneService.js'

import FancyTabs from './components/FancyTabs.js'
customElements.define('fancy-tabs', FancyTabs)



CX.instance({
        el: 'app',
        props: { title: "Hello" }
    })
    //.created(init)
CX.component('my-world').template(`<div>Hello World</div>`)
CX.component('my-scene').template(`<div>Hello {{text}}</div>`).prop('data')

init()

async function init() {
    const result = await SceneService.get()
    console.log(result)
}