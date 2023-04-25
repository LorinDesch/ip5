import React, { useState } from 'react';

function App() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState('Gruppen');
    const [classCheckboxes, setClassCheckboxes] = useState(Array.from(Array(10), () => false));

    const options1 = ['Ich', 'Meine Klasse'];
    const options2 = ['Challenge', 'Reduktion Wasserverbrauch', 'Reduktion Stromverbrauch', 'Reduktion Fleischkonsum'];

    const handleCheckboxChange = (index) => {
        const newClassCheckboxes = [...classCheckboxes];
        newClassCheckboxes[index] = !newClassCheckboxes[index];
        setClassCheckboxes(newClassCheckboxes);
    };

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    }

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    }

    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <select value={selectedOption1} onChange={handleChange1}>
                {options1.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            <option key={`class-${option}`} value={`Klasse ${option}`}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span>{`Klasse ${option}`}</span>
                                    <input type="checkbox" id={`class-${option}`} checked={classCheckboxes[option - 1]} onChange={() => handleCheckboxChange(option - 1)} />
                                </div>
                            </option>
                        ))}
                    </optgroup>
                </select>
                <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%' }}>
                    {Array.from(Array(10), (x, index) => index + 1).map(option => (
                        <div key={`checkbox-${option}`}>
                            <input type="checkbox" id={`class-${option}`} checked={classCheckboxes[option - 1]} onChange={() => handleCheckboxChange(option - 1)} />
                            <label htmlFor={`class-${option}`}>{`Klasse ${option}`}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
