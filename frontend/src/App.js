import React, { useState } from 'react';

function App() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState('Gruppen');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const options1 = ['Ich', 'Meine Klasse'];
    const options2 = ['Challenge', 'Reduktion Wasserverbrauch', 'Reduktion Stromverbrauch', 'Reduktion Fleischkonsum'];

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <select value={selectedOption1} onChange={handleChange1}>
                    {options1.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <form onSubmit={handleLogin} style={{ marginLeft: '1rem' }}>
                    <input type="text" placeholder="Benutzername" value={username} onChange={handleUsernameChange} />
                    <input type="password" placeholder="Passwort" value={password} onChange={handlePasswordChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <select value={selectedOption2} onChange={handleChange2}>
                    {options2.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div style={{ position: 'relative' }}>
                <select value={selectedOption3} onChange={handleChange3}>
                    <option value="Gruppen">Gruppen</option>
                    <optgroup label="Klassen">
                        {Array.from(Array(10), (x, index) => index + 1).map(option => (
                            <option key={`class-${option}`} value={`Klasse ${option}`}>{`Klasse ${option}`}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
        </div>
    );
}

export default App;
