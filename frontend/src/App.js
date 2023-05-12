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
                userid: 12,
                username: "Peter Mueller",
            },
            {
                userid: 3,
                username: "Hans Meier",
            }, {
                userid: 4,
                username: "Hans Meier2",
            }
        ],
        groups: [
            {
                groupid: 1,
                groupname: "Gruppe 1",
                users: [1, 12] // userids
            },
            {
                groupid: 2,
                groupname: "Gruppe 2",
                users: [4] // userids
            },
            {
                groupid: 3,
                groupname: "Gruppe 3",
                users: [3] // userids
            }
        ],
        commitments: [
            {
                commitmentid: -1,
                commitmentname: "Challenge",
            }
            , {
                commitmentid: 1,
                commitmentname: "Ich ernähre mich vegan",
            },
            {
                commitmentid: 2,
                commitmentname: "Wasserhahn beim Zähneputzen abstellen",
            },
            {
                commitmentid: 3,
                commitmentname: "Ich kaufe nur noch Second-Hand Kleider",
            }
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
                userid: 12,
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
                userid: 12,
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
                userid: 4,
                commitmentid: 2,
                schluesse: {
                    selbst: "plartzhalter",
                    sozial: "plartzhalter",
                    politik: "plartzhalter",
                    produkt: "plartzhalter",
                },
                eingeloest: 6,
                feelings: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.5, 0.4, 1, 0.3, 0.1, 0.2, 0.3, 0.4, 0.5],
                difficulty: [0.4, 0.8],
                restriction: [0.2, 0.6],
                environment: [0.1, 0.5],
                currentContribution: [0.3, 0.7],
                allowsMeTo: [0.5, 0.9],
                sustainableDevelopment: [0.6, 1],
            }

        ]
    });
    const [selectedOption1, setSelectedOption1] = useState('Max Mustermann');
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
};

export default App;