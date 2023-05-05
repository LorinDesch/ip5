import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import DifficultyComparison from "./components/DifficultyComparison";
const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/difficulty" element={<DifficultyComparison/>}/>
            </Routes>
        </Router>
    );
}

export default App;