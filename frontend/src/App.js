import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/comparisons/DifficultyComparison";
import RestrictionComparison from "./components/comparisons/RestrictionComparison";
import EnvironmentComparison from "./components/comparisons/EnvironmentComparison";
import CurrentContributionComparison from "./components/comparisons/CurrentContributionComparison";
import AllowsMeToComparison, {getValueAttributeOnlyGroup} from "./components/comparisons/AllowsMeToComparison";
import SustainableDevelopmentComparison from "./components/comparisons/SustainableDevelopmentComparison";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Login from "./components/Login";
import {fakeData} from "./data/fakeData";

/**
 * The main App component.
 */
const App = () => {

        const [selectedOption1, setSelectedOption1] = useState(localStorage.getItem("loggedInUser"));
        const [selectedOption2, setSelectedOption2] = useState('Challenge');
        const [selectedOption3, setSelectedOption3] = useState([]);
        const loggedInUser = localStorage.getItem('loggedInUser');

        const props = {
            fakeData: fakeData,
            selectedOption1: selectedOption1,
            setSelectedOption1: setSelectedOption1,
            selectedOption2: selectedOption2,
            setSelectedOption2: setSelectedOption2,
            selectedOption3: selectedOption3,
            setSelectedOption3: setSelectedOption3,

            difficultyLabel: "Schwierigkeit",
            difficultylabelLeft: ["Leicht", "Mittel", "Schwer"], //FLIPPED
            difficultyValue: getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2),

            restrionctionLabel: "Einschränkung",
            rrestrictionlabelLeft: ["Befreit", "Mittel", "Viel"], //FLIPPED
            restrictionValue: getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2),

            environeLabel: "Umfeldreaktion",
            environmentlabelLeft: ["positiv", "neutral", "negativ"], //FLIPPED
            environmentValue: getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2),

            currentContributionLabel: "Beitrag",
            currentContributionlabelLeft: ["Gering", "Mittel", "Hoch"],
            currentContributionValue: getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2),

            allowMeToLabel: "Übernehme",
            allowMeTolabelLeft: ["Verantwortung", "Beides", "Erwartungen"],
            allowMeToValue: getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2),

            sustainableDevelopmentLabel: "Entwicklung",
            sustainableDevelopmentlabelLeft: ["Wenig", "Mittel", "Viel"], //FLIPPED
            sustainableDevelopmentValue: getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2),
        }

        return (
            <Router>
                <Routes>
                    {!loggedInUser && <Route path="/*" element={<Navigate to="/login"/>}/>}
                    <Route path="/login" element={<Login fakeData={fakeData}/>}/>
                    <Route path="/"
                           element={loggedInUser ? (<Dashboard {...props}/>) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/schwierigkeit"
                           element={loggedInUser ? (<DifficultyComparison {...props} />) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/einschraenkung"
                           element={loggedInUser ? (<RestrictionComparison {...props} />) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/umfeld"
                           element={loggedInUser ? (<EnvironmentComparison {...props} />) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/aktuellerbeitrag"
                           element={loggedInUser ? (<CurrentContributionComparison {...props} />) : (
                               <Navigate to="/login"/>)}
                    />
                    <Route path="/erlaubtmir"
                           element={loggedInUser ? (<AllowsMeToComparison {...props} />) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/nachhaltigeentwicklung"
                           element={loggedInUser ? (<SustainableDevelopmentComparison {...props} />) : (
                               <Navigate to="/login"/>)}
                    />
                </Routes>
            </Router>
        );
    }
;

export default App;