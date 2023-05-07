import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/DifficultyComparison";
import RestrictionComparison from "./components/RestrictionComparison";
import EnvironmentComparison from "./components/EnvironmentComparison";
import CurrentContributionComparison from "./components/CurrentContributionComparison";
import AllowsMeToComparison from "./components/AllowsMeToComparison";
import SustainableDevelopmentComparison from "./components/SustainableDevelopmentComparison";

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/difficulty" element={<DifficultyComparison/>}/> // Schwierigkeit
                <Route path="/restriction" element={<RestrictionComparison/>}/> // Einschränkung
                <Route path="/environment" element={<EnvironmentComparison/>}/> // Umfeld reagiert positiv / negativ
                <Route path="/currentcontribution" element={<CurrentContributionComparison/>}/> // aktueller Beitrag
                Nachhaltigkeit
                <Route path="/allowsmeto" element={<AllowsMeToComparison/>}/> // Verantwortung übernehmen / Erwartungen
                nachkommen
                <Route path="/sustainabledevelopment" element={<SustainableDevelopmentComparison/>}/> // trägt zu einer nachhaltigen
                Entwicklung bei
            </Routes>
        </Router>
    );
}

export default App;