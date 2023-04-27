import React from 'react';
import ToggleSwitch from "./ToggleSwitch";
import TreeImages from "./TreeImages";



function Dashboard() {
    return (
        <div>
            <TreeImages leftIndex={12} rightIndex={25} />
            <ToggleSwitch leftText="Demo Data" rightText="Real Data" />
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
        </div>
    );
}

export default Dashboard;
