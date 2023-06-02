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
import {fakeData} from "./data/data";

/**
 * The main App component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {

        const [selectedOption1, setSelectedOption1] = useState(localStorage.getItem("loggedInUser"));
        const [selectedOption2, setSelectedOption2] = useState('Challenge');
        const [selectedOption3, setSelectedOption3] = useState([]);
        const loggedInUser = localStorage.getItem('loggedInUser');

        const difficultyLabel = "Schwierigkeit"
        const difficultylabelLeft = ["Leicht", "Mittel", "Schwer"] //FLIPPED
        const difficultyValueRightBar = getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2)
        const difficultyValueLeftBar = getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2)

        const restrionctionLabel = "Einschränkung"
        const rrestrictionlabelLeft = ["Befreit", "Mittel", "Viel"] //FLIPPED
        const restrictionValueRightBar = getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2)
        const restrictionValueLeftBar = getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2)

        const environeLabel = "Umfeldreaktion"
        const environmentlabelLeft = ["positiv", "neutral", "negativ"] //FLIPPED
        const environmentValueRightBar = getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2)
        const environmentValueLeftBar = getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2)

        const currentContributionLabel = "Beitrag"
        const currentContributionlabelLeft = ["Gering", "Mittel", "Hoch"]
        const currentContributionValueRightBar = getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2)
        const currentContributionValueLeftBar = getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2)

        const allowMeToLabel = "Übernehme"
        const allowMeTolabelLeft = ["Verantwortung", "Beides", "Erwartungen"]
        const allowMeToValueRightBar = getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2)
        const allowMeToValueLeftBar = getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2)

        const sustainableDevelopmentLabel = "Entwicklung"
        const sustainableDevelopmentlabelLeft = ["Wenig", "Mittel", "Viel"] //FLIPPED
        const sustainableDevelopmentValueRightBar = getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2)
        const sustainableDevelopmentValueLeftBar = getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2)

        const props = {
            fakeData: fakeData,
            selectedOption1: selectedOption1,
            setSelectedOption1: setSelectedOption1,
            selectedOption2: selectedOption2,
            setSelectedOption2: setSelectedOption2,
            selectedOption3: selectedOption3,
            setSelectedOption3: setSelectedOption3,
            difficultyLabel: difficultyLabel,
            difficultylabelLeft: difficultylabelLeft,
            difficultyValueRightBar: difficultyValueRightBar,
            difficultyValueLeftBar: difficultyValueLeftBar,
            restrionctionLabel: restrionctionLabel,
            rrestrictionlabelLeft: rrestrictionlabelLeft,
            restrictionValueRightBar: restrictionValueRightBar,
            restrictionValueLeftBar: restrictionValueLeftBar,
            environeLabel: environeLabel,
            environmentlabelLeft: environmentlabelLeft,
            environmentValueRightBar: environmentValueRightBar,
            environmentValueLeftBar: environmentValueLeftBar,
            currentContributionLabel: currentContributionLabel,
            currentContributionlabelLeft: currentContributionlabelLeft,
            currentContributionValueRightBar: currentContributionValueRightBar,
            currentContributionValueLeftBar: currentContributionValueLeftBar,
            allowMeToLabel: allowMeToLabel,
            allowMeTolabelLeft: allowMeTolabelLeft,
            allowMeToValueRightBar: allowMeToValueRightBar,
            allowMeToValueLeftBar: allowMeToValueLeftBar,
            sustainableDevelopmentLabel: sustainableDevelopmentLabel,
            sustainableDevelopmentlabelLeft: sustainableDevelopmentlabelLeft,
            sustainableDevelopmentValueRightBar: sustainableDevelopmentValueRightBar,
            sustainableDevelopmentValueLeftBar: sustainableDevelopmentValueLeftBar
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