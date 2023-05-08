import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/comparisons/DifficultyComparison";
import RestrictionComparison from "./components/comparisons/RestrictionComparison";
import EnvironmentComparison from "./components/comparisons/EnvironmentComparison";
import CurrentContributionComparison from "./components/comparisons/CurrentContributionComparison";
import AllowsMeToComparison from "./components/comparisons/AllowsMeToComparison";
import SustainableDevelopmentComparison from "./components/comparisons/SustainableDevelopmentComparison";

const App = () => {
    const [fakeData, setFakeData] = useState([200, 30, 160, 50, 300, 400]);

    const [isOn, setIsOn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/"
                       element={<Dashboard fakeData={fakeData} isOn={isOn} setIsOn={setIsOn}/>}/>
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
