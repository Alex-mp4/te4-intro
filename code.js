import json from "./scenarios.json"

export function setup(element) {

    const output = element.querySelector('#output')
    //const input = element.queryselector('#input')
    const list = element.querySelector('#list')
    const buttonList = element.querySelector('#buttonList')

    function start() {
        showScenario(0)
    }

    function buttonPress() {

    }

    function showScenario(scenarioId) {
        
        console.log(scenarioId)
        let scenario = json[scenarioId]

        output.innerText += scenario.text


        scenario.choices.forEach((choice) =>{
            let button = document.createElement("button")
            button.innerText = choice.text
            button.addEventListener("click", () => {
                console.log(choice)
                output.innerText += '\n\n>' + choice.text + '\n\n'
                scenarioId = choice.nextScenario
                showScenario(scenarioId)
            })
            element.appendChild(button)
        })
    }

    start()
}