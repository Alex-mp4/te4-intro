import './style.css'
import { setup } from './code.js'

document.querySelector('#app').innerHTML = `
<ul id="list"></ul>
<div id="output"></div>
<hr>
<div id="buttonContainer"></div>
`

//<input id="input"></input>

setup(document.querySelector('#app'))
