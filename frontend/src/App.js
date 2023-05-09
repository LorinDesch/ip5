import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/comparisons/DifficultyComparison";
import RestrictionComparison from "./components/comparisons/RestrictionComparison";
import EnvironmentComparison from "./components/comparisons/EnvironmentComparison";
import CurrentContributionComparison from "./components/comparisons/CurrentContributionComparison";
import AllowsMeToComparison from "./components/comparisons/AllowsMeToComparison";
import SustainableDevelopmentComparison from "./components/comparisons/SustainableDevelopmentComparison";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


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
        ],
        groups: [
            {
                groupid: 1,
                groupname: "Gruppe 1",
                users: [1] // userids
            },
            {
                groupid: 2,
                groupname: "Gruppe 2",
                users: [2] // userids
            },
        ],
        commitments: [
            {
                commitmentid: -1,
                commitmentname: "Challenge",
            }
            , {
                commitmentid: 1,
                commitmentname: "WC nur klein spülen 1",
            }],


    });
    const [selectedOption1, setSelectedOption1] = useState('Peter Mueller');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);
    console.log(selectedOption3)
    console.log(selectedOption2)
    console.log(selectedOption1)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard fakeData={fakeData} selectedOption1={selectedOption1}
                                                    setSelectedOption1={setSelectedOption1}
                                                    selectedOption2={selectedOption2}
                                                    setSelectedOption2={setSelectedOption2}
                                                    selectedOption3={selectedOption3}
                                                    setSelectedOption3={setSelectedOption3}/>}/>
                <Route path="/difficulty" element={<DifficultyComparison/>}/> { /* Schwierigkeit */}
                <Route path="/restriction" element={<RestrictionComparison/>}/> { /* Einschränkung */}
                <Route path="/environment"
                       element={<EnvironmentComparison/>}/> { /*  Umfeld reagiert positiv / negativ */}
                <Route path="/currentcontribution"
                       element={<CurrentContributionComparison/>}/> { /* aktueller Beitrag Nachhaltigkeit */}
                <Route path="/allowsmeto"
                       element={<AllowsMeToComparison/>}/> { /* Verantwortung übernehmen / Erwartungen nachkommen */}
                <Route path="/sustainabledevelopment" element={
                    <SustainableDevelopmentComparison/>}/> { /* trägt zu einer nachhaltigen Entwicklung bei */}
            </Routes>
        </Router>
    );
}

export default App;