import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/comparisons/DifficultyComparison";
import RestrictionComparison from "./components/comparisons/RestrictionComparison";
import EnvironmentComparison from "./components/comparisons/EnvironmentComparison";
import CurrentContributionComparison from "./components/comparisons/CurrentContributionComparison";
import AllowsMeToComparison from "./components/comparisons/AllowsMeToComparison";
import SustainableDevelopmentComparison from "./components/comparisons/SustainableDevelopmentComparison";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Login from "./components/Login";


/**
 * The main App component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
        const [fakeData, setFakeData] = useState({
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
                        // {
                        //     commitmentid: 4,
                        //     commitmentname: "Ich nutze, wenn möglich, die kleine Toilettenspülung."
                        // },
                        // {
                        //     commitmentid: 5,
                        //     commitmentname: "Ich lasse den Geschirrspüler nur voll laufen.",
                        // },
                        // {
                        //     commitmentid: 6,
                        //     commitmentname: "Ich spüle Geschirr nicht unter fliessendem Wasser.",
                        // },
                        // {
                        //     commitmentid: 7,
                        //     commitmentname: "Ich stecke Ladegeräte nur so lange wie nötig ein."
                        // },
                        // {
                        //     commitmentid: 8,
                        //     commitmentname: "Ich schalte meine Geräte ganz aus (kein Standby)."
                        // },
                        // {
                        //     commitmentid: 9,
                        //     commitmentname: "Ich kaufe nur regionales & saisonales Obst/Gemüse."
                        // },
                        // {
                        //     commitmentid: 10,
                        //     commitmentname: "Ich kaufe, wo möglich, regionale Lebensmittel.",
                        // },
                        // {
                        //     commitmentid: 11,
                        //     commitmentname: "Ich kaufe nur regionale Lebensmittel.",
                        // },
                        // {
                        //     commitmentid: 12,
                        //     commitmentname: "Ichk trinke meinen Kafee/Tee in der Tasse vor Ort.",
                        // },
                        // {
                        //     commitmentid: 13,
                        //     commitmentname: "Ich kaufe, wo möglich, regionale Lebensmittel.",
                        // },
                        // {
                        //     commitmentid: 14,
                        //     commitmentname: "Ich kaufe nur regionale Lebensmittel.",
                        // },
                        // {
                        //     commitmentid: 15,
                        //     commitmentname: "Ich trinke meinen Kaffee/Tee in der Tasse vor Ort.",
                        // },
                        // {
                        //     commitmentid: 16,
                        //     commitmentname: "Ich nutze unterwegs ein auffüllbares Trinkgefäss",
                        // },
                        // {
                        //     commitmentid: 17,
                        //     commitmentname: "Ich verwende nur wiederverwendbare Taschen für meinen Einkauf.",
                        // }
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
                            feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3],
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

                            feelings: [0.2, 0.3, 0.1, 0.5, 0.7, 0.5, 0.9, 0.1, 0.3, 0.6],
                            difficulty: [0.4, 0.8],
                            restriction: [0.2, 0.6],
                            environment: [0.1, 0.5],
                            currentContribution: [0.3, 0.7],
                            allowsMeTo: [0.5, 0.9],
                            sustainableDevelopment: [0.6, 1],
                        },
                    ]
                }
            )
        ;
        const [selectedOption1, setSelectedOption1] = useState(localStorage.getItem("loggedInUser"));
        const [selectedOption2, setSelectedOption2] = useState('Challenge');
        const [selectedOption3, setSelectedOption3] = useState([]);
        const loggedInUser = localStorage.getItem('loggedInUser');

        return (
            <Router>
                <Routes>
                    {!loggedInUser && <Route path="/*" element={<Navigate to="/login"/>}/>}
                    <Route path="/login" element={<Login fakeData={fakeData}/>}/>
                    <Route
                        path="/"
                        element={
                            loggedInUser ? (
                                <Dashboard
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/schwierigkeit"
                        element={
                            loggedInUser ? (
                                <DifficultyComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/einschraenkung"
                        element={
                            loggedInUser ? (
                                <RestrictionComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/umfeld"
                        element={
                            loggedInUser ? (
                                <EnvironmentComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/aktuellerbeitrag"
                        element={
                            loggedInUser ? (
                                <CurrentContributionComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/erlaubtmir"
                        element={
                            loggedInUser ? (
                                <AllowsMeToComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                    <Route
                        path="/nachhaltigeentwicklung"
                        element={
                            loggedInUser ? (
                                <SustainableDevelopmentComparison
                                    fakeData={fakeData}
                                    selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}
                                />
                            ) : (
                                <Navigate to="/login"/>
                            )
                        }
                    />
                </Routes>
            </Router>
        );
    }
;

export default App;