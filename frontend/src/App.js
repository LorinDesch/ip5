import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/comparisons/DifficultyComparison";
import RestrictionComparison from "./components/comparisons/RestrictionComparison";
import EnvironmentComparison from "./components/comparisons/EnvironmentComparison";
import CurrentContributionComparison from "./components/comparisons/CurrentContributionComparison";
import SustainableDevelopmentComparison from "./components/comparisons/SustainableDevelopmentComparison";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Login from "./components/Login";
import {fakeData} from "./data/fakeData";
import {getValueAttributeOnlyGroup} from "./components/helperFunctions/HelperFunctions";
import AllowsMeToComparison from "./components/comparisons/AllowsMeToComparison";

/**
 * The main App component.
 */
const App = () => {
        const [selectedOption1, setSelectedOption1] = useState(localStorage.getItem("selectedOption1") || "");
        const [selectedOption2, setSelectedOption2] = useState(localStorage.getItem("selectedOption2") || "Challenge");
        const [selectedOption3, setSelectedOption3] = useState(JSON.parse(localStorage.getItem("selectedOption3")) || []);
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

        useEffect(() => {
            // Store the values in localStorage whenever they change
            localStorage.setItem("selectedOption1", selectedOption1);
            localStorage.setItem("selectedOption2", selectedOption2);
            localStorage.setItem("selectedOption3", JSON.stringify(selectedOption3));

        }, [selectedOption1, selectedOption2, selectedOption3]);

        return (
            <Router>
                <Routes>
                    {!loggedInUser && <Route path="/*" element={<Navigate to="/login"/>}/>}
                    <Route path="/login" element={<Login fakeData={props.fakeData}/>}/>
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
                    <Route path="/beitrag"
                           element={loggedInUser ? (<CurrentContributionComparison {...props} />) : (
                               <Navigate to="/login"/>)}
                    />
                    <Route path="/ermoeglicht"
                           element={loggedInUser ? (<AllowsMeToComparison {...props} />) : (<Navigate to="/login"/>)}
                    />
                    <Route path="/entwicklung"
                           element={loggedInUser ? (<SustainableDevelopmentComparison {...props} />) : (
                               <Navigate to="/login"/>)}
                    />
                    <Route path="*" element={<Login fakeData={props.fakeData}/>} />
                </Routes>
            </Router>
        );
    }
;

export default App;