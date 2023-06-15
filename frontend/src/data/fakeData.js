/**
 * This file contains the fake data for the frontend.
 */
export const fakeData  = {
    users: [
        {
            userid: 1,
            username: "Max Mustermann",
        },
        {
            userid: 2,
            username: "Peter Mueller",
        },
        {
            userid: 3,
            username: "Hans Meier",
        },
        {
            userid: 4,
            username: "Hans Meier2",
        },
        {
            userid: 5,
            username: "Emily Smith",
        },
        {
            userid: 6,
            username: "Oliver Taylor",
        },
        {
            userid: 7,
            username: "Sophia Johnson",
        },
        {
            userid: 8,
            username: "Aiden Davis",
        },
        {
            userid: 9,
            username: "Isabella Clark",
        },
        {
            userid: 10,
            username: "Liam Adams",
        },
        {
            userid: 11,
            username: "Charlotte Walker",
        },
        {
            userid: 13,
            username: "Eleanor Anderson",
        },
        {
            userid: 14,
            username: "Sebastian Martinez",
        },
        {
            userid: 15,
            username: "Amelia Thompson",
        },
        {
            userid: 16,
            username: "Nathan Rodriguez",
        },
        {
            userid: 17,
            username: "Victoria Wilson",
        },
        {
            userid: 18,
            username: "Julian Garcia",
        },
        {
            userid: 19,
            username: "Penelope Hernandez",
        },
        {
            userid: 20,
            username: "Lucas Phillips",
        },
    ],
    groups: [
        {
            groupid: 1,
            groupname: "Gruppe 1",
            users: [1, 2, 3] // userids
        },
        {
            groupid: 2,
            groupname: "Gruppe 2",
            users: [4, 5, 6] // userids
        },
        {
            groupid: 3,
            groupname: "Gruppe 3",
            users: [7, 8, 9, 10] // userids
        },
        {
            groupid: 4,
            groupname: "Gruppe 4",
            users: [11, 12] // userids
        },
        {
            groupid: 5,
            groupname: "Gruppe 5",
            users: [13, 14, 15] // userids
        },
        {
            groupid: 6,
            groupname: "Gruppe 6",
            users: [16, 17] // userids
        },
        {
            groupid: 7,
            groupname: "Gruppe 7",
            users: [18, 19, 20] // userids
        }

    ],
    commitments: [
        {
            commitmentid: -1,
            commitmentname: "Challenge",
        },
        {
            commitmentid: 1,
            commitmentname: "Ich ernähre mich vegan",
        },
        {
            commitmentid: 2,
            commitmentname: "Ich esse nur einmal pro Woche Fleisch.",
        },
        {
            commitmentid: 3,
            commitmentname: "Ich dusche maximal fünf Minuten pro Tag.",
        },

    ],
    diary: [
        {
            diaryid: 1,
            userid: 1,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe gelernt, dass ich mit kleinen Dingen einen grossen Beitrag leisten kann.",
                sozial: "Meine Eltern haben micht erst nicht so unterstützt",
                politik: "Politiker ist es eigentlich egal",
                produkt: "Diese sind auch nur auf Profit aus",
            },
            eingeloest: 20,
            feelings: [0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 0, 0.1, 0.8],
            difficulty: [0.4, 0.8],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        }, {
            diaryid: 2,
            userid: 2,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich ernähre mich jetzt gesünder",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
            },
            eingeloest: 28,
            feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.7],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        }, {
            diaryid: 3,
            userid: 3,
            commitmentid: 2,
            schluesse: {
                selbst: "Ich ernähre mich jetzt gesünder",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
            },
            eingeloest: 24,
            feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.8],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        }, {
            diaryid: 4,
            userid: 4,
            commitmentid: 2,
            schluesse: {
                selbst: "Durch die Reduzierung meines Fleischkonsums habe ich meinen eigenen ökologischen Fußabdruck verringert und fühle mich gesünder und vitaler.",
                sozial: "Indem ich meinen Fleischkonsum eingeschränkt habe, habe ich meine Freunde dazu ermutigt, sich bewusster mit ihrer Ernährung auseinanderzusetzen und wir unterstützen uns gegenseitig dabei.",
                politik: "Ich habe erkannt, dass es wichtig ist, politische Maßnahmen zu unterstützen, die den ökologischen Schaden durch Massentierhaltung und Fleischproduktion begrenzen.",
                produkt: "Die Suche nach fleischlosen Alternativen hat meinen kulinarischen Horizont erweitert und ich entdecke neue köstliche Gerichte.",
            },
            eingeloest: 2,
            feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.1],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        },
        {
            diaryid: 5,
            userid: 5,
            commitmentid: 2,
            schluesse: {
                selbst: "Die Entscheidung, nur einmal pro Woche Fleisch zu essen, hat sich positiv auf meine Gesundheit ausgewirkt und ich fühle mich leichter und energiegeladener.",
                sozial: "Durch meine Einschränkung des Fleischkonsums habe ich meine Freunde dazu inspiriert, ihre eigene Ernährungsgewohnheiten zu überdenken und wir teilen jetzt gemeinsam vegetarische und vegane Rezepte.",
                politik: "Ich habe erkannt, wie wichtig es ist, politische Maßnahmen zu unterstützen, die die nachhaltige Produktion von Fleisch fördern und den Umweltschutz stärker berücksichtigen.",
                produkt: "Die Vielfalt an fleischfreien Produkten hat meine Kochkünste erweitert und ich entdecke immer wieder neue schmackhafte Alternativen zu Fleischgerichten.",
            },
            eingeloest: 6,
            feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.8],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        },
        {
            diaryid: 6,
            userid: 6,
            commitmentid: 3,
            schluesse: {
                selbst: "Ich dusche jetzt kürzer",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
            },
            eingeloest: 20,
            feelings: [0.2, 0.3, 0.4, 0.2, 0.6, 0.9, 0.8, 0.5, 0.4, 1, 0.6, 0.1, 0.2, 0.2, 0.5, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.7, 0.3],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        },
        {
            diaryid: 7,
            userid: 7,
            commitmentid: 3,
            schluesse: {
                selbst: "Es war mir zu kalt",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
            },
            eingeloest: 15,
            feelings: [0.2, 0.3, 0.4, 0.2, 0.6, 0.9, 0.8, 0.5, 0.4, 1, 0.6, 0.1, 0.2, 0.2, 0.5, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.8],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        },
        {
            diaryid: 8,
            userid: 8,
            commitmentid: 3,
            schluesse: {
                selbst: "Es ist nicht so kalt",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
            },
            eingeloest: 10,

            feelings: [0.2, 0.3, 0.4, 0.2, 0.6, 0.9, 0.8, 0.5, 0.4, 1, 0.6, 0.1, 0.2, 0.2, 0.5, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
            difficulty: [0.4, 0.8],
            restriction: [0.2, 0.6],
            environment: [0.1, 0.5],
            currentContribution: [0.3, 0.7],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.6, 1],
        },
        {
            diaryid: 1,
            userid: 5,
            commitmentid: 3,
            schluesse: {
                selbst: "Durch die Begrenzung meiner Duschzeit auf maximal fünf Minuten pro Tag habe ich nicht nur Wasser und Energie gespart, sondern auch meine Morgenroutine effizienter gestaltet.",
                sozial: "Mein bewusster Umgang mit Wasser hat dazu geführt, dass ich auch in meinem sozialen Umfeld über die Bedeutung des Wassersparens gesprochen habe und andere dazu ermutige, ebenfalls ihre Duschgewohnheiten zu überdenken.",
                politik: "Ich habe erkannt, dass Wasserknappheit ein globales Problem ist und engagiere mich nun für politische Maßnahmen zur nachhaltigen Nutzung und Bewirtschaftung von Wasserressourcen.",
                produkt: "Die Überlegung, wie viel Wasser ich täglich beim Duschen verbrauche, hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und umweltfreundliche Duschgels zu verwenden.",
            },
            eingeloest: 14,
            feelings: [
                0.2, 0.3, 0.2, 0.1, 0.9, 1, 0.1,
                0.8, 0.6, 0.6, 0.6, 0.2, 0.5, 0.9,
                0.6, 0.2, 0.6, 0.1, 0.7, 0, 0.9,
                0.8, 0.8, 0.5, 0.5, 0.3, 0.5, 0.5
            ],
            difficulty: [0, 0.16],
            restriction: [0.8, 0.98],
            environment: [0.08, 0.79],
            currentContribution: [0.8, 0.6],
            allowsMeTo: [0.1, 0.4],
            sustainableDevelopment: [0.9, 0.4]
        },
        {
            diaryid: 2,
            userid: 17,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe gelernt, dass ich mit kleinen Dingen einen grossen Beitrag leisten kann.",
                sozial: "Meine Eltern haben micht erst nicht so unterstützt",
                politik: "Politiker ist es eigentlich egal",
                produkt: "Diese sind auch nur auf Profit aus",
            },
            eingeloest: 0,
            feelings: [
                0.8, 0.1, 0.5, 0.9, 0.5, 0.8, 1,
                0.7, 0.9, 0.1, 0.2, 1, 0.5, 0.8,
                0.3, 0.3, 0.9, 0.2, 0.3, 0.1, 0.6,
                0.7, 0.9, 0.4, 0.6, 0.8, 0.5, 0.9
            ],
            difficulty: [0.7, 0.81],
            restriction: [0.8, 0.91],
            environment: [0.57, 0.96],
            currentContribution: [0.6, 0.8],
            allowsMeTo: [0.5, 0.9],
            sustainableDevelopment: [0.9, 0.5]
        },
        {
            diaryid: 3,
            userid: 18,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Begrenzung meiner Duschzeit hat dazu geführt, dass ich bewusster mit meiner Zeit umgehe und mich auf das Wesentliche konzentriere.",
                sozial: "Ich habe bemerkt, dass meine Veränderung der Duschgewohnheiten zu interessanten Gesprächen mit Freunden und Familie geführt hat, bei denen wir über den nachhaltigen Umgang mit Wasser gesprochen haben.",
                politik: "Die Auseinandersetzung mit dem Thema Wasserverbrauch hat mich dazu motiviert, mich für politische Maßnahmen zur Wassereinsparung einzusetzen und Bewusstsein dafür zu schaffen.",
                produkt: "Durch meine Entscheidung, weniger Wasser beim Duschen zu verbrauchen, habe ich begonnen, umweltfreundliche Duschprodukte zu verwenden und unterstütze damit Unternehmen, die sich für Nachhaltigkeit einsetzen.",
            },
            eingeloest: 19,
            feelings: [
                0.7, 0.4, 0.7, 0, 0.1, 0.5, 0.7,
                0.8, 0, 0, 0.3, 0.5, 0.9, 0.7,
                0.8, 0.6, 0.7, 0.4, 0.4, 0.9, 0.1,
                0.3, 1, 0.9, 0.4, 0.7, 0.1, 0.1
            ],
            difficulty: [0.6, 0.55],
            restriction: [0.8, 0.24],
            environment: [0.71, 0.85],
            currentContribution: [0.6, 0.5],
            allowsMeTo: [0.4, 0.5],
            sustainableDevelopment: [0.1, 0.3]
        },
        {
            diaryid: 4,
            userid: 3,
            commitmentid: 2,
            schluesse: {
                selbst: "Die bewusste Entscheidung, meinen Fleischkonsum einzuschränken, hat meine Körpergesundheit verbessert und ich fühle mich in Einklang mit meinen ethischen Überzeugungen.",
                sozial: "Ich habe eine Gemeinschaft von Menschen gefunden, die sich ebenfalls für eine reduzierte Fleischernährung engagieren, und wir teilen Erfahrungen, Rezepte und unterstützen uns gegenseitig.",
                politik: "Ich setze mich aktiv dafür ein, dass politische Maßnahmen ergriffen werden, um nachhaltige Ernährungsgewohnheiten zu fördern und die Auswirkungen der Fleischindustrie auf die Umwelt zu minimieren.",
                produkt: "Die kulinarische Vielfalt der vegetarischen und veganen Küche hat meinen Speiseplan bereichert und ich entdecke immer wieder köstliche fleischlose Alternativen.",
            },
            eingeloest: 11,
            feelings: [
                0.5, 0.5, 0.6, 0.1, 0.4, 0.6, 0.8,
                0.9, 0.5, 0.8, 0.7, 0.4, 1, 0.4,
                0.7, 0.1, 0, 0, 0.4, 0.8, 0.3,
                0.2, 0.5, 0.2, 0.3, 0.1, 0.3, 0.3
            ],
            difficulty: [0.5, 0.07],
            restriction: [0.4, 0.47],
            environment: [0.13, 0.46],
            currentContribution: [1, 0],
            allowsMeTo: [0.6, 0.6],
            sustainableDevelopment: [0, 0.6]
        },
        {
            diaryid: 5,
            userid: 16,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe gelernt, dass ich mit kleinen Dingen einen grossen Beitrag leisten kann.",
                sozial: "Meine Eltern haben micht erst nicht so unterstützt",
                politik: "Politiker ist es eigentlich egal",
                produkt: "Diese sind auch nur auf Profit aus",
            },
            eingeloest: 27,
            feelings: [
                0.2, 0.9, 0.4, 0.5, 1, 0.5,
                0.4, 0.9, 0.2, 0.5, 0.9, 0.6,
                0.5, 0.3, 0.8, 0.3, 0.5, 0.4,
                0.2, 0.1, 0.6, 0.7, 0.6, 0.6,
                0.1, 0.9, 0.4, 0.1
            ],
            difficulty: [0.4, 0.22],
            restriction: [0.6, 0.26],
            environment: [0.98, 0.76],
            currentContribution: [0.9, 0.4],
            allowsMeTo: [1, 1],
            sustainableDevelopment: [0.2, 0.8]
        },
        {
            diaryid: 6,
            userid: 9,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe gelernt, dass meine Ernährungsgewohnheiten einen großen Einfluss auf die Umwelt haben.",
                sozial: "Meine Freunde und Familie unterstützen mich jetzt mehr in meiner Entscheidung, mich vegan zu ernähren.",
                politik: "Ich habe erkannt, dass politische Maßnahmen wichtig sind, um den Umweltschutz zu fördern.",
                produkt: "Ich habe festgestellt, dass es eine Vielzahl von leckeren veganen Produkten gibt, die ich ausprobieren kann.",
            },
            eingeloest: 5,
            feelings: [
                0.6, 0.1, 0.3, 0.4, 0.3, 0.9, 0.7,
                1, 0.8, 0.8, 0, 1, 0.8, 0.5,
                0.8, 0.4, 0.9, 0.8, 0.3, 0.6, 0.8,
                0.4, 0.7, 0.4, 0.3, 0.8, 0.6, 0.9
            ],
            difficulty: [0.5, 0.01],
            restriction: [0.2, 0.06],
            environment: [0.14, 0.38],
            currentContribution: [0.8, 0.9],
            allowsMeTo: [0.1, 0.7],
            sustainableDevelopment: [0.9, 0.6]
        },
        {
            diaryid: 7,
            userid: 1,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Beschränkung meiner Duschzeit hat mir geholfen, bewusster mit meinem Wasserverbrauch umzugehen und meine ökologische Fußabdruck zu reduzieren.",
                sozial: "Meine Veränderung der Duschgewohnheiten hat dazu geführt, dass ich in meinem sozialen Umfeld über Ressourcenschonung und Wassereinsparung spreche und andere dazu inspiriere, ebenfalls Maßnahmen zu ergreifen.",
                politik: "Die Erkenntnis, wie wichtig es ist, Wasserressourcen zu schützen, hat mein Interesse an politischen Entscheidungen und Initiativen zur nachhaltigen Wassernutzung geweckt.",
                produkt: "Ich habe entdeckt, dass es innovative Produkte wie wassersparende Duschköpfe und umweltfreundliche Duschgels gibt, die mir helfen, meinen Wasserverbrauch weiter zu reduzieren.",
            },
            eingeloest: 21,
            feelings: [
                0.3, 0.7, 0.7, 0.4, 0.7, 0.9,
                0.9, 0.4, 0.5, 0.4, 0.9, 0.2,
                0.2, 0.9, 0.9, 0.2, 0.1, 0.6,
                0.5, 0.1, 0.8, 0.8, 0.2, 0.9,
                0.4, 0.2, 0.6, 0.3
            ],
            difficulty: [0.1, 0.65],
            restriction: [0.8, 0.24],
            environment: [0.21, 0.51],
            currentContribution: [0.1, 0],
            allowsMeTo: [0.9, 0.8],
            sustainableDevelopment: [0.9, 0.6]
        },
        {
            diaryid: 8,
            userid: 15,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Begrenzung meiner Duschzeit auf fünf Minuten pro Tag hat dazu geführt, dass ich morgens mehr Zeit für andere Aktivitäten habe und mich produktiver fühle.",
                sozial: "Ich habe gemerkt, dass meine bewusste Entscheidung, weniger Wasser beim Duschen zu verbrauchen, auch mein Umfeld beeinflusst hat, da ich über die Bedeutung des Wassersparens gesprochen und andere dazu ermutigt habe, ebenfalls ihre Duschgewohnheiten anzupassen.",
                politik: "Durch mein Engagement für Wassereinsparung habe ich erkannt, wie wichtig es ist, politische Maßnahmen zur nachhaltigen Wassernutzung zu unterstützen und setze mich aktiv für umweltfreundliche Wasserpolitik ein.",
                produkt: "Die Überlegung meines Wasserverbrauchs beim Duschen hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und biologisch abbaubare Duschgels zu nutzen.",
            },
            eingeloest: 5,
            feelings: [
                0.9, 0.6, 0, 0.5, 0.9, 0.6, 0.5,
                0.5, 0.9, 0.6, 0.8, 0.6, 0.9, 0.4,
                0.5, 0.4, 0.3, 0.6, 0.8, 0.5, 0.6,
                0.8, 1, 0.1, 0.1, 0.6, 0.7, 0.1
            ],
            difficulty: [0.4, 0.62],
            restriction: [0.5, 0.25],
            environment: [0.18, 0.84],
            currentContribution: [0.2, 0.8],
            allowsMeTo: [0.8, 0.3],
            sustainableDevelopment: [0.3, 1]
        },
        {
            diaryid: 9,
            userid: 4,
            commitmentid: 2,
            schluesse: {
                selbst: "Die bewusste Entscheidung, meinen Fleischkonsum zu reduzieren, hat zu einer Gewichtsabnahme und einer Verbesserung meiner körperlichen Fitness geführt.",
                sozial: "Durch meine Entscheidung, weniger Fleisch zu essen, habe ich meine Familie und Freunde dazu ermutigt, sich ebenfalls mit einer gesünderen und umweltfreundlicheren Ernährung auseinanderzusetzen.",
                politik: "Ich habe erkannt, dass es wichtig ist, politische Veränderungen zu unterstützen, um den Einfluss der Fleischindustrie auf die Umwelt und das Klima zu verringern.",
                produkt: "Die Suche nach fleischlosen Alternativen hat mich dazu gebracht, neue Lebensmittel und Rezepte auszuprobieren, die ich vorher nicht gekannt habe.",
            },
            eingeloest: 3,
            feelings: [
                0.6, 0.9, 0.4, 0.5, 0.7, 0.6,
                0.4, 0.3, 0.7, 0.8, 0.9, 0.6,
                0.7, 0.4, 0.7, 0.7, 0.8, 0.1,
                0.9, 0.3, 0.8, 0.1, 0.8, 0.8,
                0.7, 0.4, 0.7, 0.8
            ],
            difficulty: [0.8, 0.69],
            restriction: [0.5, 0.45],
            environment: [0.83, 0.71],
            currentContribution: [0.8, 0.6],
            allowsMeTo: [0.2, 0.8],
            sustainableDevelopment: [0.6, 0.3]
        },
        {
            diaryid: 10,
            userid: 16,
            commitmentid: 2,
            schluesse: {
                selbst: "Durch die Reduzierung meines Fleischkonsums habe ich ein besseres Verständnis für meine Ernährung entwickelt und mich intensiver mit gesunden Nahrungsquellen beschäftigt.",
                sozial: "Mein Engagement für weniger Fleischkonsum hat dazu geführt, dass ich mich mit Gleichgesinnten vernetzt habe und wir uns gegenseitig bei unseren Ernährungszielen unterstützen.",
                politik: "Ich habe erkannt, dass die Förderung einer nachhaltigen und ethischen Lebensmittelproduktion politische Unterstützung erfordert und engagiere mich dafür.",
                produkt: "Die Entdeckung von vegetarischen und veganen Produkten hat meine kulinarischen Fähigkeiten erweitert und mich dazu inspiriert, kreativer in der Küche zu sein.",
            },
            eingeloest: 2,
            feelings: [
                0.5, 0.5, 0.3, 0.2, 0.8, 0.8, 0.6,
                0.7, 0.4, 0.7, 0.6, 0.1, 0.8, 0.7,
                0.6, 0.8, 0.6, 0.1, 0.5, 0.2, 0.1,
                0.2, 0.9, 1, 1, 1, 0.6, 0.5
            ],
            difficulty: [0.2, 0.16],
            restriction: [0.5, 0.12],
            environment: [0.1, 0.94],
            currentContribution: [0.3, 0.8],
            allowsMeTo: [0.8, 0.4],
            sustainableDevelopment: [0.1, 0.9]
        },
        {
            diaryid: 11,
            userid: 7,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Reduzierung meiner Duschzeit hat mich dazu gebracht, achtsamer mit meinen Ressourcen umzugehen und mich insgesamt umweltbewusster zu fühlen.",
                sozial: "Meine Veränderung der Duschgewohnheiten hat zu interessanten Diskussionen mit Freunden und Familie geführt und dazu beigetragen, das Bewusstsein für den nachhaltigen Umgang mit Wasser zu schärfen.",
                politik: "Ich habe erkannt, dass der verantwortungsvolle Umgang mit Wasser auch politisches Engagement erfordert, um politische Maßnahmen zur Wassereinsparung und zum Schutz der Wasserressourcen zu unterstützen.",
                produkt: "Die Auseinandersetzung mit meinem Wasserverbrauch hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und umweltfreundliche Seifen zu verwenden, um meinen ökologischen Fußabdruck zu reduzieren.",
            },
            eingeloest: 14,
            feelings: [
                0.5, 0.9, 0.4, 0.3, 0.5, 0.5, 1,
                0.7, 0.5, 0.5, 1, 0.6, 0.7, 0.2,
                0.2, 0.2, 0.7, 0.6, 0.1, 0.4, 0.2,
                0.9, 0.1, 0.9, 1, 0.6, 0.4, 0.9
            ],
            difficulty: [0.5, 0.05],
            restriction: [0.5, 0.75],
            environment: [0.01, 0.49],
            currentContribution: [0.5, 0.4],
            allowsMeTo: [0.9, 0.8],
            sustainableDevelopment: [0.6, 0.1]
        },
        {
            diaryid: 12,
            userid: 7,
            commitmentid: 2,
            schluesse: {
                selbst: "Die bewusste Entscheidung, meinen Fleischkonsum zu reduzieren, hat meine Energielevels gesteigert und ich fühle mich insgesamt vitaler und ausgeglichener.",
                sozial: "Durch meine Veränderung der Ernährungsgewohnheiten habe ich positive Gespräche über nachhaltige Ernährung angestoßen und andere dazu ermutigt, ihre eigene Fleischkonsum zu überdenken.",
                politik: "Ich bin mir nun bewusst, dass politische Maßnahmen erforderlich sind, um den Fleischkonsum zu regulieren und die Umweltauswirkungen der Massentierhaltung zu minimieren.",
                produkt: "Die Vielfalt an fleischfreien Alternativen hat meinen Speiseplan bereichert und ich habe neue köstliche Gerichte entdeckt, die ich vorher nicht ausprobiert hätte.",
            },
            eingeloest: 11,
            feelings: [
                0.2, 0.2, 0.1, 0.4, 0.4, 0.5,
                0.6, 0.1, 0.3, 0.1, 0.1, 0.2,
                0.3, 0.9, 0.8, 0.3, 0.5, 0.1,
                0.9, 0.4, 0.8, 0.6, 0.1, 0.9,
                0.4, 0.6, 0.8, 0.7
            ],
            difficulty: [0.1, 0.41],
            restriction: [1, 0.23],
            environment: [0.78, 0.98],
            currentContribution: [1, 0.1],
            allowsMeTo: [0.7, 0.8],
            sustainableDevelopment: [0.1, 0.4]
        },
        {
            diaryid: 13,
            userid: 13,
            commitmentid: 2,
            schluesse: {
                selbst: 'Durch mein Engagement für eine pflanzliche Ernährung habe ich bemerkt, wie viel Energie ich habe und wie gut ich mich körperlich fühle.',
                sozial: 'Mein Engagement für eine fleischreduzierte Ernährung hat zu interessanten Gesprächen mit Familie und Freunden geführt, bei denen wir uns über Nachhaltigkeit und Tierwohl ausgetauscht haben.',
                politik: 'Mein bewusster Verzicht auf Fleisch hat mich dazu sensibilisiert, wie wichtig es ist, politische Maßnahmen zur Förderung einer nachhaltigen Lebensmittelproduktion und zum Schutz der Umwelt zu unterstützen.',
                produkt: 'Die Umstellung auf eine fleischreduzierte Ernährung hat mich dazu gebracht, neue Lebensmittel auszuprobieren und mich verstärkt mit den Vorteilen pflanzlicher Alternativen auseinanderzusetzen.'
            },
            eingeloest: 6,
            feelings: [
                0.1, 0.6, 0.6, 0.9, 0.6, 0.4, 0.1,
                0.3, 0.4, 0.4, 0.8, 0.9, 0.7, 1,
                0.5, 0.1, 0, 0.5, 0.1, 1, 0.2,
                0.2, 0.6, 1, 0.3, 0.2, 0.2, 0.9
            ],
            difficulty: [0.1, 0.17],
            restriction: [0.6, 0.52],
            environment: [0.32, 0.86],
            currentContribution: [0.6, 0.3],
            allowsMeTo: [0.4, 0.9],
            sustainableDevelopment: [0.5, 0.3]
        },
        {
            diaryid: 14,
            userid: 8,
            commitmentid: 2,
            schluesse: {
                selbst: "Die bewusste Entscheidung, meinen Fleischkonsum zu reduzieren, hat mein Verständnis für gesunde Ernährung erweitert und mir gezeigt, dass ich mich auch ohne Fleisch ausgewogen ernähren kann.",
                sozial: "Ich habe meine Lieben dazu ermutigt, gemeinsam mit mir neue vegetarische und vegane Gerichte auszuprobieren, und wir haben dadurch unsere kulinarischen Horizonte erweitert.",
                politik: "Ich engagiere mich aktiv in lokalen Initiativen und Petitionen, um auf die Auswirkungen der Massentierhaltung aufmerksam zu machen und positive Veränderungen in der politischen Landschaft zu bewirken.",
                produkt: "Ich habe festgestellt, dass es eine Vielzahl an schmackhaften fleischfreien Produkten gibt, die ich vorher nicht kannte, und ich entdecke ständig neue Favoriten.",
            },
            eingeloest: 16,
            feelings: [
                0.3, 0.2, 0.3, 0.7, 0.2, 0.9, 0.1,
                0.8, 0.3, 0.5, 0.4, 0, 0.4, 0.7,
                1, 0.1, 0.4, 0.1, 0.1, 0.5, 0.5,
                0.7, 0.3, 1, 0.2, 0.9, 0.8, 0.3
            ],
            difficulty: [0.7, 0.56],
            restriction: [0.2, 0.16],
            environment: [0.11, 0.68],
            currentContribution: [0.4, 0.9],
            allowsMeTo: [0.7, 0],
            sustainableDevelopment: [0.3, 0.3]
        },
        {
            diaryid: 15,
            userid: 3,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe festgestellt, dass eine vegane Ernährung meine Energie und Vitalität steigert.",
                sozial: "Ich habe begonnen, mich mit anderen Veganern auszutauschen und neue Freundschaften zu knüpfen.",
                politik: "Ich unterstütze nun aktiv politische Maßnahmen zur Förderung einer pflanzlichen Ernährung und setze mich für Tierrechte ein.",
                produkt: "Durch meine vegane Ernährung habe ich entdeckt, dass es viele leckere pflanzliche Alternativen zu tierischen Produkten gibt.",
            },
            eingeloest: 23,
            feelings: [
                0.6, 0.8, 0.5, 0.7, 0.2, 0.4, 0.2,
                0.1, 0.3, 0, 0.4, 0.2, 0.7, 0.9,
                0.9, 0.5, 0.3, 0, 0.9, 0.5, 0.8,
                0.9, 0.5, 0.9, 0.3, 0.2, 0.7, 0.6
            ],
            difficulty: [0.5, 0.92],
            restriction: [0.3, 0.54],
            environment: [0.51, 0.1],
            currentContribution: [0.2, 0.3],
            allowsMeTo: [0.1, 0.5],
            sustainableDevelopment: [0.3, 0.8]
        },
        {
            diaryid: 16,
            userid: 8,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Beschränkung meiner Duschzeit hat mir geholfen, bewusster mit meinen Gewohnheiten umzugehen und mich auf das Wesentliche zu konzentrieren.",
                sozial: "Durch meine Veränderung der Duschgewohnheiten habe ich interessante Gespräche über Nachhaltigkeit und Ressourcenschonung geführt und andere dazu ermutigt, ihre eigenen Maßnahmen zu ergreifen.",
                politik: "Ich habe erkannt, dass wir alle eine Verantwortung tragen, umweltfreundliche Entscheidungen zu treffen, und setze mich dafür ein, dass auch politische Maßnahmen zur nachhaltigen Wassernutzung ergriffen werden.",
                produkt: "Die Auseinandersetzung mit meinem Wasserverbrauch hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und biologisch abbaubare Duschgels zu verwenden, um einen positiven Einfluss auf die Umwelt zu haben.",
            },
            eingeloest: 14,
            feelings: [
                0.2, 0.7, 0.7, 0.6, 0.7, 0.5, 1,
                0.7, 0.2, 0.6, 0.7, 0.1, 0.1, 0.9,
                0.7, 0.1, 0.1, 0.7, 0.2, 0.9, 0.5,
                0.9, 0.7, 0.2, 0.2, 0.1, 0.6, 0
            ],
            difficulty: [1, 0.15],
            restriction: [0.8, 0.92],
            environment: [0.69, 0.42],
            currentContribution: [0, 0.8],
            allowsMeTo: [0.1, 0.7],
            sustainableDevelopment: [0.1, 0.6]
        },
        {
            diaryid: 17,
            userid: 11,
            commitmentid: 2,
            schluesse: {
                selbst: 'Ich habe festgestellt, dass ich beim Kochen kreativer geworden bin und neue leckere Rezepte entdeckt habe, die auf pflanzlichen Zutaten basieren.',
                sozial: 'Indem ich meine Erfahrungen und Erkenntnisse teile, motiviere ich auch andere in meinem sozialen Umfeld dazu, über ihren eigenen Fleischkonsum nachzudenken und möglicherweise Veränderungen vorzunehmen.',
                politik: 'Durch den Austausch mit Gleichgesinnten und die Teilnahme an Veranstaltungen habe ich mein Wissen über nachhaltige Landwirtschaft und Tierrechte vertieft und kann nun fundiert an politischen Diskussionen teilnehmen.',
                produkt: 'Die bewusste Auswahl von fleischfreien Optionen hat mein Einkaufsverhalten beeinflusst und dazu geführt, dass ich vermehrt auf umweltfreundliche und nachhaltige Produkte achte.'
            },
            eingeloest: 2,
            feelings: [
                0.6, 0.9, 0.6, 0.7, 0.5, 0.7, 0.7,
                0.2, 0.5, 0.2, 0.1, 0.2, 0.7, 0.3,
                0.4, 0.8, 0, 0, 0.7, 0.5, 0.1,
                0.7, 0.7, 0.8, 0.4, 0.7, 0.5, 0.2
            ],
            difficulty: [1, 0.8],
            restriction: [0, 0.05],
            environment: [0.04, 0.35],
            currentContribution: [0.2, 0.6],
            allowsMeTo: [0, 0.4],
            sustainableDevelopment: [0.5, 0.8]
        },
        {
            diaryid: 18,
            userid: 13,
            commitmentid: 2,
            schluesse: {
                selbst: "Die Umstellung auf eine fleischreduzierte Ernährung hat dazu geführt, dass ich mich besser mit meinem Körper verbunden fühle und achtsamer auf meine Ernährungsbedürfnisse eingehe.",
                sozial: "Gemeinsame Aktivitäten wie Kochabende oder Restaurantbesuche mit Gleichgesinnten, die sich ebenfalls für eine fleischreduzierte Ernährung interessieren, haben mein soziales Netzwerk erweitert und neue Freundschaften entstehen lassen.",
                politik: "Ich bin überzeugt, dass politische Entscheidungsträger ein Umdenken in Bezug auf unseren Umgang mit Lebensmitteln und den Schutz der Umwelt unterstützen müssen, und setze mich dafür ein.",
                produkt: "Durch die Erkundung von vegetarischen und veganen Rezepten habe ich meine Kochfähigkeiten erweitert und bin experimentierfreudiger geworden.",
            },
            eingeloest: 9,
            feelings: [
                0.4, 0.6, 0.5, 0, 0.6, 0.9, 0.3,
                0.6, 0.5, 0.8, 0.8, 0.3, 0.1, 0.7,
                0.8, 0.4, 0.7, 0.8, 0.5, 0.3, 0.2,
                0.3, 0.7, 0.2, 0.8, 0.1, 0.7, 1
            ],
            difficulty: [0.5, 0.51],
            restriction: [0.7, 0.63],
            environment: [0.99, 0.3],
            currentContribution: [0.1, 0.7],
            allowsMeTo: [0, 0.6],
            sustainableDevelopment: [0.9, 0.5]
        },
        {
            diaryid: 19,
            userid: 20,
            commitmentid: 1,
            schluesse: {
                selbst: "Ich habe meine Ernährungsgewohnheiten erfolgreich umgestellt und fühle mich körperlich und mental besser.",
                sozial: "Durch meine vegane Ernährung habe ich neue Menschen kennengelernt, die ähnliche Werte teilen, und wir unterstützen uns gegenseitig.",
                politik: "Ich habe begonnen, mich für politische Veränderungen einzusetzen, um eine nachhaltigere und tierfreundlichere Lebensmittelindustrie zu fördern.",
                produkt: "Ich habe eine Vielzahl köstlicher pflanzlicher Lebensmittel entdeckt, die meinen Speiseplan bereichern und mein kulinarisches Repertoire erweitern.",
            },
            eingeloest: 17,
            feelings: [
                0.5, 0.5, 0.6, 0.1, 0.7, 0.1, 0.2,
                1, 0.4, 0.8, 1, 0.8, 0.5, 0,
                0.6, 0.4, 0.2, 0.1, 0.1, 0.4, 0.5,
                0.5, 0.5, 0.6, 0, 0.1, 0.5, 0.3
            ],
            difficulty: [0.4, 0.55],
            restriction: [0, 0.54],
            environment: [0.84, 0.49],
            currentContribution: [0.4, 0],
            allowsMeTo: [1, 0.4],
            sustainableDevelopment: [0.8, 0.2]
        },
        {
            diaryid: 20,
            userid: 13,
            commitmentid: 3,
            schluesse: {
                selbst: "Die bewusste Begrenzung meiner Duschzeit hat mir geholfen, meine Zeit besser zu organisieren und mich effizienter zu fühlen.",
                sozial: "Durch meine Entscheidung, meine Duschzeit zu reduzieren, habe ich das Bewusstsein für Wasserressourcen und Nachhaltigkeit in meinem sozialen Umfeld gestärkt.",
                politik: "Ich habe erkannt, dass Wassereinsparung eine wichtige politische Angelegenheit ist, und setze mich für umweltfreundliche Wasserpolitik ein.",
                produkt: "Die Überlegung meines Wasserverbrauchs hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und natürliche Seifen zu nutzen.",
            },
            eingeloest: 10,
            feelings: [
                0.7, 0.1, 1, 0.8, 0.7, 0.3, 0.2,
                0.3, 0.8, 0.4, 0.3, 1, 0.2, 0,
                0.6, 0.1, 0.9, 0.3, 0.2, 0.7, 0.6,
                0.8, 0.7, 0.7, 0.3, 0.4, 0.3, 0.1
            ],
            difficulty: [0.6, 0.58],
            restriction: [0.7, 0.31],
            environment: [0.59, 0.37],
            currentContribution: [0.6, 1],
            allowsMeTo: [0.9, 0.6],
            sustainableDevelopment: [0.3, 0.9]
        },
        {
            diaryid: 21,
            userid: 19,
            commitmentid: 2,
            schluesse: {
                selbst: 'Die bewusste Entscheidung, meinen Fleischkonsum zu reduzieren, hat dazu geführt, dass ich mich insgesamt gesünder und energiegeladener fühle.',
                sozial: 'Mein Engagement für eine reduzierte Fleischkonsum hat zu interessanten Gesprächen mit Freunden und Familie geführt, bei denen wir über die Auswirkungen unserer Ernährung auf die Umwelt diskutiert haben.',
                politik: 'Ich bin mir bewusst geworden, dass der Fleischkonsum einen erheblichen Einfluss auf die Umwelt hat, und setze mich nun stärker für den Schutz der Natur und nachhaltige Landwirtschaft ein.',
                produkt: 'Die Reduzierung meines Fleischkonsums hat dazu geführt, dass ich mich intensiver mit pflanzlichen Alternativen auseinandergesetzt habe und nun neue, köstliche Gerichte entdecke.'
            },
            eingeloest: 15,
            feelings: [
                0.1, 0.3, 0.3, 0.5, 0.9, 0.5, 0.7,
                0.5, 0.9, 0.4, 0.4, 0.3, 0, 0.1,
                1, 0.2, 0.2, 0.4, 0.1, 0.8, 0.1,
                0.7, 0.2, 0.5, 0.1, 0.9, 0.3, 1
            ],
            difficulty: [0.3, 0.53],
            restriction: [0.7, 0.03],
            environment: [0.91, 0.89],
            currentContribution: [0.3, 0],
            allowsMeTo: [0.5, 0.2],
            sustainableDevelopment: [0.9, 0.2]
        },
        {
            diaryid: 22,
            userid: 15,
            commitmentid: 2,
            schluesse: {
                selbst: 'Ich habe gelernt, dass meine Ernährungsgewohnheiten einen direkten Einfluss auf mein körperliches Wohlbefinden haben, und bin nun motivierter, auch andere gesunde Veränderungen in meinem Leben vorzunehmen.',
                sozial: 'Ich habe andere dazu ermutigt, ebenfalls ihren Fleischkonsum zu überdenken und alternative Ernährungsweisen auszuprobieren, und wir unterstützen uns gegenseitig dabei.',
                politik: 'Ich habe erkannt, dass politische Entscheidungen und Maßnahmen notwendig sind, um den Fleischkonsum zu regulieren und die Auswirkungen auf Klima und Ressourcen zu reduzieren.',
                produkt: 'Ich habe festgestellt, dass es eine große Vielfalt an fleischlosen Produkten gibt, die nicht nur umweltfreundlicher sind, sondern auch geschmacklich überzeugen.'
            },
            eingeloest: 0,
            feelings: [
                0.6, 0.2, 0.1, 0.9, 0.1, 0.4,
                0, 0.1, 0.8, 0.7, 0.9, 0.9,
                0.5, 0.1, 0.3, 0.9, 0.6, 0.4,
                0.6, 0.1, 0.4, 0.6, 0.4, 0.6,
                0.6, 0.1, 0.9, 0.4
            ],
            difficulty: [0.4, 0.01],
            restriction: [0.7, 0.09],
            environment: [0.78, 0.61],
            currentContribution: [0.4, 0.6],
            allowsMeTo: [0.8, 0],
            sustainableDevelopment: [0, 0.3]
        },
        {
            diaryid: 23,
            userid: 14,
            commitmentid: 2,
            schluesse: {
                selbst: "Die Herausforderung, nur einmal pro Woche Fleisch zu essen, hat mich dazu gebracht, meine Essgewohnheiten bewusster zu reflektieren und mich für eine ausgewogenere Ernährung zu interessieren.",
                sozial: "Durch meine Entscheidung, weniger Fleisch zu essen, habe ich neue kulinarische Erfahrungen gemacht und verschiedene vegetarische und vegane Gerichte entdeckt, die ich zuvor noch nie probiert hatte.",
                politik: "urch meine eigene Veränderung der Ernährungsgewohnheiten unterstütze ich auch politische Initiativen und Organisationen, die sich für eine nachhaltige Lebensmittelproduktion einsetzen.",
                produkt: "Die bewusste Auswahl von Produkten, die keinen oder nur wenig Fleisch enthalten, hat meinen Einkaufsstil verändert und mich dazu gebracht, bewusster einzukaufen und auf nachhaltige Verpackungen zu achten.",
            },
            eingeloest: 26,
            feelings: [
                0.4, 0.4, 0.7, 0.6, 0.7, 0.3, 1,
                0.1, 0.8, 0.2, 0.1, 0.6, 0.1, 0.6,
                0.6, 0.9, 0, 0.3, 0.1, 0.5, 0,
                0.6, 0.9, 0.7, 0.5, 0.9, 0.2, 0.7
            ],
            difficulty: [0.8, 0.94],
            restriction: [0.4, 0.76],
            environment: [0.77, 0.28],
            currentContribution: [0.8, 0.9],
            allowsMeTo: [0.3, 0.3],
            sustainableDevelopment: [0.5, 0.3]
        },
        {
            diaryid: 24,
            userid: 5,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Beschränkung meiner Duschzeit auf fünf Minuten hat mir geholfen, morgens frischer und energetischer zu sein.",
                sozial: "Durch meine bewusste Reduzierung der Duschzeit habe ich meine Mitbewohner dazu inspiriert, ebenfalls Wasser zu sparen und umweltbewusster zu duschen.",
                politik: "Ich habe erkannt, dass Wassereinsparung ein wichtiges Thema ist, das politische Unterstützung erfordert, um nachhaltige Veränderungen zu bewirken.",
                produkt: "Die Auseinandersetzung mit meinem Wasserverbrauch hat mich dazu gebracht, umweltfreundliche Produkte wie wassersparende Duschköpfe und biologisch abbaubare Shampoos auszuprobieren.",
            },
            eingeloest: 18,
            feelings: [
                1, 0.1, 0.7, 0.1, 0.8, 0.2, 1,
                0.1, 0.8, 0.1, 0.5, 0.1, 0, 0.4,
                0.1, 0.7, 0.6, 0.5, 0, 0.2, 0.5,
                0.3, 0.9, 0.3, 0.9, 0.3, 0.7, 0.3
            ],
            difficulty: [0.3, 0.51],
            restriction: [0.1, 0.91],
            environment: [0.02, 0.03],
            currentContribution: [0.6, 0.9],
            allowsMeTo: [0.5, 0.4],
            sustainableDevelopment: [0.1, 1]
        },
        {
            diaryid: 25,
            userid: 17,
            commitmentid: 1,
            schluesse: {
                selbst: "Die Umstellung auf eine vegane Ernährung hat meine Energie und mein Wohlbefinden gesteigert.",
                sozial: "Ich habe mich mit anderen Veganern vernetzt und wir teilen Rezepte, Tipps und Erfahrungen miteinander.",
                politik: "Ich bin mir bewusst geworden, wie wichtig es ist, politische Entscheidungsträger für nachhaltige Ernährungsoptionen zu sensibilisieren und setze mich aktiv dafür ein.",
                produkt: "Die Vielfalt an pflanzlichen Alternativen hat mich inspiriert, neue Geschmacksrichtungen auszuprobieren und meine Kochkünste zu erweitern.",
            },
            eingeloest: 26,
            feelings: [
                0.2, 0.6, 0.7, 0.6, 0.1, 0.9, 0.7,
                0.3, 0.5, 0.9, 0.7, 0, 0.1, 0.3,
                0.9, 0.6, 0.5, 0.2, 0.2, 0, 0.1,
                1, 0.6, 0.4, 0.8, 0.4, 0.2, 0.3
            ],
            difficulty: [0.9, 0.61],
            restriction: [0.3, 0.98],
            environment: [0.39, 0.6],
            currentContribution: [0.2, 0.9],
            allowsMeTo: [0.8, 0.3],
            sustainableDevelopment: [0.4, 0.3]
        },
        {
            diaryid: 26,
            userid: 13,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Begrenzung meiner Duschzeit hat mir geholfen, meine Morgenroutine zu optimieren und stressfreier in den Tag zu starten.",
                sozial: "Durch meine bewusste Entscheidung, weniger Wasser beim Duschen zu verbrauchen, habe ich meine Familie und Freunde dazu ermutigt, ihre eigenen Wasserverbrauchsgewohnheiten zu überdenken.",
                politik: "Ich bin mir nun bewusst, dass Wassereinsparung auch auf politischer Ebene gefördert werden muss, um einen nachhaltigen Umgang mit Wasser zu gewährleisten.",
                produkt: "Die Überlegung meines Wasserverbrauchs hat mich dazu gebracht, umweltfreundliche Duschprodukte zu verwenden, die sowohl meine Haut als auch die Umwelt schonen.",
            },
            eingeloest: 27,
            feelings: [
                0.3, 0.5, 0.7, 0.4, 0, 0.2, 0.1,
                0.7, 0, 0.9, 0.9, 0.5, 0, 0.9,
                0.2, 0.4, 0.7, 0.6, 0.6, 0.9, 0.9,
                0.6, 0.2, 0.1, 0.4, 0.3, 0.6, 1
            ],
            difficulty: [0.4, 0.07],
            restriction: [0.4, 0.97],
            environment: [0.75, 0.26],
            currentContribution: [0.8, 0.8],
            allowsMeTo: [0.5, 0.6],
            sustainableDevelopment: [0.3, 0]
        },
        {
            diaryid: 27,
            userid: 13,
            commitmentid: 2,
            schluesse: {
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
            },
            eingeloest: 22,
            feelings: [
                0.4, 0.3, 0.8, 0.3, 0.8, 0.7, 0.7,
                0.8, 0, 0.8, 0.3, 0.5, 0.5, 0.3,
                0.2, 0.8, 0.9, 0.3, 0.1, 0.8, 0,
                0.4, 0.6, 0.4, 0.5, 1, 0.7, 0.5
            ],
            difficulty: [1, 0.76],
            restriction: [0.3, 0.46],
            environment: [0.25, 0.67],
            currentContribution: [0.4, 0.5],
            allowsMeTo: [0, 0.7],
            sustainableDevelopment: [0.5, 0.2]
        },
        {
            diaryid: 28,
            userid: 9,
            commitmentid: 3,
            schluesse: {
                selbst: "Die Begrenzung meiner Duschzeit hat mir geholfen, bewusster mit meinem Wasserverbrauch umzugehen und meine persönliche Nachhaltigkeit zu steigern.",
                sozial: "Durch meine Entscheidung, weniger Wasser beim Duschen zu verbrauchen, habe ich meine Mitbewohner dazu ermutigt, ebenfalls umweltbewusster zu handeln und Wasser zu sparen.",
                politik: "Ich bin mir bewusst geworden, dass Wasserknappheit ein globales Problem ist und dass politische Maßnahmen erforderlich sind, um verantwortungsvollen Wasserverbrauch zu fördern.",
                produkt: "Die Reduzierung meiner Duschzeit hat mich dazu inspiriert, nach umweltfreundlichen Duschprodukten zu suchen, die weniger Wasser und Ressourcen verbrauchen.",
            },
            eingeloest: 11,
            feelings: [
                0.5, 0.7, 0.8, 0.2, 0.8, 0.1,
                0.3, 0.2, 1, 0.8, 0.2, 0.2,
                0.3, 0.8, 0.4, 0.3, 0.8, 0.5,
                0.6, 0.5, 0.3, 0.8, 0.6, 0.2,
                0.1, 0.8, 0.9, 0.9
            ],
            difficulty: [0.1, 0.64],
            restriction: [0.1, 0.66],
            environment: [0.69, 0.51],
            currentContribution: [0.6, 0.4],
            allowsMeTo: [0.5, 0.7],
            sustainableDevelopment: [0.4, 0.2]
        },
        {
            diaryid: 29,
            userid: 14,
            commitmentid: 1,
            schluesse: {
                selbst: "Meine vegane Ernährung hat meine Gesundheit verbessert und ich fühle mich vitaler als je zuvor.",
                sozial: "Ich habe eine Gemeinschaft von Gleichgesinnten gefunden und wir unterstützen uns gegenseitig dabei, unsere veganen Lebensstile aufrechtzuerhalten.",
                politik: "Ich habe erkannt, dass politische Veränderungen notwendig sind, um eine nachhaltigere Lebensmittelproduktion zu erreichen, und engagiere mich aktiv in entsprechenden Organisationen.",
                produkt: "Die pflanzlichen Alternativen haben meine Ernährung vielseitiger gemacht und ich entdecke immer wieder neue leckere Produkte.",
            },
            eingeloest: 6,
            feelings: [
                0.8, 0.5, 0.4, 0.8, 0.5, 0.1,
                0.9, 0.2, 0.2, 0.2, 0.6, 0.9,
                0.5, 0.8, 0.6, 0.3, 0.7, 0.6,
                0.7, 0.9, 1, 0.5, 0.3, 0.5,
                0.6, 0.5, 0.1, 0.8
            ],
            difficulty: [0.4, 0.91],
            restriction: [0.4, 0.52],
            environment: [0.03, 0.89],
            currentContribution: [0.9, 0.6],
            allowsMeTo: [0, 0.4],
            sustainableDevelopment: [0.3, 0.7]
        },
        {
            diaryid: 30,
            userid: 17,
            commitmentid: 2,
            schluesse: {
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
            },
            eingeloest: 20,
            feelings: [
                0.1, 0.1, 0.1, 0.8, 0.6, 0.8,
                0.7, 0.1, 0.8, 0.6, 0.8, 0.3,
                0.2, 0.2, 0.8, 0.1, 1, 0.3,
                0.5, 0.6, 0.6, 0.2, 0.5, 0.9,
                0.8, 0.4, 0.4, 0.7
            ],
            difficulty: [0.3, 0.56],
            restriction: [0.7, 0.09],
            environment: [0.99, 0.7],
            currentContribution: [0.2, 0.9],
            allowsMeTo: [0, 0.6],
            sustainableDevelopment: [0.8, 0.8]
        }
    ]
};
