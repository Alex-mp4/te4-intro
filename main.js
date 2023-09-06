import './style.css'
import { setup } from './code.js'

document.querySelector('#app').innerHTML = `
<div id="output"></div>
<button id="option1">Button1</button>
<button id="option2">Button2</button>
`

//<input id="input"></input>

setup(document.querySelector('#app'))
