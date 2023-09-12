import json from "./scenarios.json"

export function setup(element) {

    const output = element.querySelector('#output')
    //const input = element.queryselector('#input')
    const list = element.querySelector('#list')
    const buttonList = element.querySelector('#buttonContainer')
    const div = document.querySelector('#div');
    let state = {}

    function start() {
        state = {}
        showScenario(0)
    }

    function buttonPress() {

    }

    function showScenario(scenarioId) {
        console.log(scenarioId)
        let scenario = json[scenarioId]

        let scenarioT = document.createElement("p")
        scenarioT.innerText += scenario.text
        div.appendChild(scenarioT);

        scenario.choices.forEach((choice) =>{
            let button = document.createElement("button")
            button.innerText = choice.text
            button.addEventListener("click", () => {
                console.log(choice)
                output.innerText += scenario.text + '\n\n>' + choice.text + '\n\n'
                scenarioId = choice.nextScenario
                buttonList.innerHTML = ''
                scenarioT.innerHTML = ''
                showScenario(scenarioId)
            })
            buttonList.appendChild(button)
        })
    }

    start()
}