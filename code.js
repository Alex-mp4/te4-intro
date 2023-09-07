export function setup(element) {

    const output = element.querySelector('#output')
    //const input = element.queryselector('#input')
    const option1 = element.querySelector('#option1')
    const option2 = element.querySelector('#option2')
    const option3 = element.querySelector('#option3')
    const option4 = element.querySelector('#option4')
    const list = element.querySelector('#list')

    function start() {
        showScenario(1)
    }

    function showScenario(scenarioId) {
        const scenario = scenarios.find(scenario => scenario.id === scenarioId)
        output.innerText = scenario.text

        console.log(scenario.text)
        //console.log(scenario.choices[0].text)
        //console.log(scenario.choices[1].text)
        //console.log(scenario.choices[2].text)
        //console.log(scenario.choices[3].text)

        if (scenario.choices[0].text === '') {
            option1.style.display = "none"
        }
        else {
            option1.style.display = "initial"
            option1.innerText = scenario.choices[0].text
        }
        try {
            option2.style.display = "initial"
            option2.innerText = scenario.choices[1].text
        }
        catch {
            option2.style.display = "none"
        }
        try {
            option3.style.display = "initial"
            option3.innerText = scenario.choices[2].text
        }
        catch {
            option3.style.display = "none"
        }
        try {
            option4.style.display = "initial"
            option4.innerText = scenario.choices[3].text
        }
        catch {
            option4.style.display = "none"
        }

        option1.addEventListener('click', (e) => {
            e.preventDefault()
            const li = document.createElement('li')
            li.textContent = scenario.text + '\n\n>' + scenario.choices[0].text
            list.appendChild(li)
            showScenario(scenario.choices[0].nextScenario)
            console.log(scenario.choices[0].nextScenario)
        })
        option2.addEventListener('click', (e) => {
            e.preventDefault()
            const li = document.createElement('li')
            li.textContent = scenario.text + '\n\n>' + scenario.choices[1].text
            list.appendChild(li)
            showScenario(scenario.choices[1].nextScenario)
            console.log(scenario.choices[1].nextScenario)
        })
        option3.addEventListener('click', (e) => {
            e.preventDefault()
            const li = document.createElement('li')
            li.textContent = scenario.text + '\n\n>' + scenario.choices[2].text
            list.appendChild(li)
            showScenario(scenario.choices[2].nextScenario)
            console.log(scenario.choices[2].nextScenario)
        })
        option4.addEventListener('click', (e) => {
            e.preventDefault()
            const li = document.createElement('li')
            li.textContent = scenario.text + '\n\n>' + scenario.choices[3].text
            list.appendChild(li)
            showScenario(scenario.choices[3].nextScenario)
            console.log(scenario.choices[3].nextScenario)
        })
    }

    const scenarios = [
        {
            id: 1,
            text: "In a world not so dissimilar from our own, but far removed from its once-thriving glory, the remnants of civilization stand as mere shadows of their former selves. In this modern-day dystopia, the boundaries between science and magic blur, giving rise to a realm where creatures of ancient fantasy roam alongside the remnants of advanced technology. The skyline, once adorned with gleaming skyscrapers and bustling metropolises, now boasts twisted spires and towering fortresses, reminiscent of a medieval age long past. Ruined cities, overtaken by nature, serve as haunting reminders of humanity's fall from grace.\n\nThe air is thick with an eerie mixture of despair and wonder. Beneath the ominous crimson skies, mythical creatures that once existed solely in the pages of ancient folklore have returned from the brink of extinction. Majestic dragons soar through the heavens, their scales glinting with an otherworldly luminescence, while trolls and ogres lurk in the abandoned subway tunnels, their grotesque forms illuminated by the soft glow of bioluminescent fungi. In this dystopian world, magic has become as much a science as any technology once was. The relics of the past, from advanced artificial intelligence systems to smartphones, are now considered ancient artifacts, their purpose and meaning lost to the sands of time.",
            choices: [
                {
                    text: 'Understood.',
                    nextScenario: 2
                }
            ]
        },
        {
            id: 2,
            text: "In this modern-day dystopian world, amidst the chaotic convergence of science and fantasy, you have control of Alexander's destiny—weaving through his reality as it were. Born into the ruins of a once-great city, Alexander embodied the spirit of resilience and curiosity that had become increasingly rare in this harsh new reality.\n\nThe travels across the grueling cities were far from ordinary, to the common folk, as he—or you, rather—had to tough through dangers unknown. Upon having such thought, an orc, much larger than yourself walks out of a nearby alleway and threatens your life as their stomach rumbles.",
            choices: [
                {
                    text: 'Draw your sword.',
                    nextScenario: 3
                },
                {
                    text: 'Hide.',
                    nextScenario: 7
                }
            ]
        },
        {
            id: 3,
            text: "With your sword in hand, you ready yourself for combat. The orc, now towering over you with its mere presence, smiles in glee as it bends forward. You swing your sword at it, but the creature merely catches the weapon and throws it away.",
            choices: [
                {
                    text: 'Draw another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 6
                }
            ]
        },
        {
            id: 4,
            text: "You swing for the orc. It catches the blade once more and throws it to the side.",
            choices: [
                {
                    text: 'Draw yet another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 5
                }
            ]
        },
        {
            id: 5,
            text: "You turn around in an attempt to pace away from the creature, but due to stepping on one of the blades you trip and fall. The orc crushes you behind its might.",
            choices: [
                {
                    text: 'Start over.',
                    nextScenario: 1
                },
            ]
        },
        {
            //gamestate: no sword
            id: 6,
            text: "Realizing you are no match for the orc, you tuck-tail and run. The orc, much slower than you, gets outpaced while you continue on your journey.\n\nAfter another while of traveling a familiar building crosses your path. A group of four spires with a distinct purple hue, solemnly reaching for the skies. One saying 'Teknik', the next 'El och energi', 'Estet' and the last 'Handel'. Which one do you enter?",
            choices: [
                {
                    text: 'Teknik.',
                    nextScenario: 8
                },
                {
                    text: 'El och energi.',
                    nextScenario: 9
                },
                {
                    text: 'Estet.',
                    nextScenario: 10
                },
                {
                    text: 'Handel.',
                    nextScenario: 11
                }
            ]
        },
        {
            //gamestate: hurt leg
            id: 7,
            text: "You lunge over to a stray box in the area even though it explicitly saw you. It slams its fist into the box, causing some of the rubble to shoot into their eyes but also your ankle. You limp away in the chaos and flee.\n\nDespite your bum ankle, you travel until a familiar building crosses your path. A group of four spires with a distinct purple hue, solemnly reaching for the skies. One saying 'Teknik', the next 'El och energi', 'Estet' and the last 'Handel'. Which one do you enter?",
            choices: [
                {
                    text: 'Teknik.',
                    nextScenario: 8
                },
                {
                    text: 'El och energi.',
                    nextScenario: 9
                },
                {
                    text: 'Estet.',
                    nextScenario: 10
                },
                {
                    text: 'Handel.',
                    nextScenario: 11
                }
            ]
        },
        {
            id: 8,
            text: "Teknik",
            choices: [
                {
                    text: 'Draw yet another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 5
                }
            ]
        },
        {
            id: 9,
            text: "El och Energi.",
            choices: [
                {
                    text: 'Draw yet another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 5
                }
            ]
        },
        {
            id: 10,
            text: "Estet.",
            choices: [
                {
                    text: 'Draw yet another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 5
                }
            ]
        },
        {
            id: 11,
            text: "Handel.",
            choices: [
                {
                    text: 'Draw yet another sword.',
                    nextScenario: 4
                },
                {
                    text: 'Flee.',
                    nextScenario: 5
                }
            ]
        },
    ]

    start()
}