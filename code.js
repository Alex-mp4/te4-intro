import json from "./scenarios.json"

export function setup(element) {

    //const output = element.querySelector('#output')
    const buttonList = element.querySelector('#buttonContainer')
    const div = document.querySelector('#div');
    let state = {}

    function start() {
        state = {}
        showScenario(0)
    }

    function showScenario(scenarioId) {
        console.log(scenarioId)
        let scenario = json[scenarioId]
        let scenarioT = document.createElement("p")
        scenarioT.classList.add('fadein')
        let textChoice = document.createElement("p")
        textChoice.classList.add('choice')


        scenarioT.innerText = scenario.text
        div.appendChild(scenarioT);

        scenario.choices.forEach((choice) =>{
            let button = document.createElement("button")
            button.innerText = choice.text
            button.addEventListener("click", () => {
                console.log(choice)
                textChoice.innerText = '>' + choice.text
                div.appendChild(textChoice)
                scenarioId = choice.nextScenario
                buttonList.innerHTML = ''
                showScenario(scenarioId)
            })
            buttonList.appendChild(button)
        })
    }

    start()
}