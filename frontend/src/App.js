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


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/difficulty" element={<DifficultyComparison/>}/>  { /* Schwierigkeit */}
                <Route path="/restriction" element={<RestrictionComparison/>}/> { /* Einschränkung */}
                <Route path="/environment" element={<EnvironmentComparison/>}/> { /*  Umfeld reagiert positiv / negativ */}
                <Route path="/currentcontribution" element={<CurrentContributionComparison/>}/> { /* aktueller Beitrag Nachhaltigkeit */}
                <Route path="/allowsmeto" element={<AllowsMeToComparison/>}/> { /* Verantwortung übernehmen / Erwartungen nachkommen */}
                <Route path="/sustainabledevelopment" element={<SustainableDevelopmentComparison/>}/> { /* trägt zu einer nachhaltigen Entwicklung bei */}
            </Routes>
        </Router>
    );
}

export default App;