export function setup(element) {

    const output = element.querySelector('#output')
    //const input = element.queryselector('#input')
    const option1 = element.querySelector('#option1')
    const option2 = element.querySelector('#option2')

    function start() {
        showScenario(1)
    }

    function showScenario(scenarioId) {
        const scenario = scenarios.find(scenario => scenario.id === scenarioId)
        output.innerText = scenario.text

        console.log(scenario.text)

        option1.innerText = scenario.choices[0].text
        option2.innerText = scenario.choices[1].text

        option1.addEventListener('click', (e) => {
            e.preventDefault()
            showScenario(scenario.choices[0].nextScenario)
            console.log(scenario.choices[0].nextScenario)
        })
        option2.addEventListener('click', (e) => {
            e.preventDefault()
            showScenario(scenario.choices[1].nextScenario)
            console.log(scenario.choices[1].nextScenario)
        })
    }

    const scenarios = [
        {
            id: 1,
            text: 'Wowza',
            choices: [
                {
                    text: 'Bruh',
                    nextScenario: 2
                },
                {
                    text: 'Yahoo',
                    nextScenario: 2
                }
            ]
        },
        {
            id: 2,
            text: 'Nä nu jävlar',
            choices: [
                {
                    text: 'What',
                    nextScenario: 3
                },
                {
                    text: 'the Hell',
                    nextScenario: 3
                }
            ]
        }
    ]

    start()
}