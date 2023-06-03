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
                selbst: "Ich ernähre mich jetzt gesünder",
                sozial: "Meine Freunde haben grad mitgemacht",
                politik: "Politiker sind nicht so interessiert",
                produkt: "Alles ist 3x verpackt",
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
                selbst: "platzhalter",
                sozial: "platzhalter",
                politik: "platzhalter",
                produkt: "platzhalter",
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
                selbst: 'Generated random data',
                sozial: 'Generated random data',
                politik: 'Generated random data',
                produkt: 'Generated random data'
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
