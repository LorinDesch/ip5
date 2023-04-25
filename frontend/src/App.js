import React, { useState } from 'react';
import Select from 'react-select';

const CheckboxOption = ({ data, isSelected, innerRef, innerProps, handleCheckboxChange }) => {
    const { onClick } = innerProps;
    const handleCheckboxClick = (event) => {
        onClick(event);
        handleCheckboxChange(event, data.value);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} {...innerProps}>
            <input type="checkbox" checked={isSelected} onChange={handleCheckboxClick} style={{ marginRight: '0.5rem' }} ref={innerRef} />
            {data.label}
        </div>
    );
};



function App() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const options1 = ['Ich', 'Meine Klasse'];
    const options2 = [
        'Challenge',
        'Reduktion Wasserverbrauch',
        'Reduktion Stromverbrauch',
        'Reduktion Fleischkonsum',
    ];

    const options3 = Array.from(Array(10), (_, index) => ({
        value: `Klasse ${index + 1}`,
        label: `Klasse ${index + 1}`,
    }));

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

    const handleChange3 = (selectedOptions) => {
        setSelectedOption3(selectedOptions.map((option) => option.value));
    };

    const handleCheckboxChange = (event, optionValue) => {
        if (event.target.checked) {
            setSelectedClasses([...selectedClasses, optionValue]);
        } else {
            setSelectedClasses(selectedClasses.filter((value) => value !== optionValue));
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <select value={selectedOption1} onChange={handleChange1}>
                    {options1.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
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
                    {options2.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ position: 'relative' }}>
                {selectedOption1 === 'Meine Klasse' && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {options3.map((option) => (
                            <label key={option.value} style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                                <input type="checkbox" checked={selectedClasses.includes(option.value)} onChange={(event) => handleCheckboxChange(event, option.value)} style={{ marginRight: '0.5rem' }} />
                                {option.label}
                            </label>
                        ))}
                    </div>
                )}
                {selectedOption1 === 'Ich' && (
                    <Select
                        options={options3}
                        isMulti
                        value={selectedOption3}
                        onChange={handleChange3}
                        placeholder="Klasse auswählen"
                        components={{
                            Option: (props) => <CheckboxOption {...props} handleCheckboxChange={handleCheckboxChange} />,
                        }}
                    />
                )}
            </div>
        </div>
    );

}

export default App;