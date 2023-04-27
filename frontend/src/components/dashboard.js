import React from 'react';
import ToggleSwitch from "./ToggleSwitch";



function Dashboard() {
    return (
        <div>
            <ToggleSwitch leftText="Demo Data" rightText="Real Data" />
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
        </div>
    );
}

export default Dashboard;
