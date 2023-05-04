import React, { useState } from 'react';

import { handleLogin } from '../api';

function Login({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newData = "realData" /*await handleLogin(username, password);*/ //TODO: replace with real data
            sessionStorage.setItem("realData", JSON.stringify(newData));
            console.log(newData);
            onClose(); // Schließe das Login-Fenster, wenn der Login erfolgreich ist
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        onClose(); // Schließe das Login-Fenster, wenn der Benutzer auf "Abbrechen" klickt
    }

    return (
        <div style={{ padding: '1rem' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <button type="submit" style={{ marginRight: '0.5rem' }}>Use Real Data</button>
                    <button type="button" onClick={handleCancel} style={{ backgroundColor: 'grey', color: 'white' }}>Cancel</button> {/* Neuer Button zum Schließen des Login-Fensters */}
                </div>
            </form>
        </div>
    );
}

export default Login;
