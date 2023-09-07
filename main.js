import './style.css'
import { setup } from './code.js'

document.querySelector('#app').innerHTML = `
<ul id="list"></ul>
<div id="output"></div>
<hr>
<button id="option1">Button1</button>
<button id="option2">Button2</button>
<button id="option3">Button3</button>
<button id="option4">Button4</button>
`

//<input id="input"></input>

setup(document.querySelector('#app'))
