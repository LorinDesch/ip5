import React, { useState } from 'react';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';

function Dashboard() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);

    const options3 = Array.from(Array(10), (_, index) => ({
        value: `Klasse ${index + 1}`,
        label: `Klasse ${index + 1}`,
    }));

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
                <Dropdown1 selectedOption={selectedOption1} handleChange={handleChange1} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown2 selectedOption={selectedOption2} handleChange={handleChange2} />
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
            </div>
            <Dropdown3 options={options3} selectedOptions={selectedOption3} handleChange={handleChange3} handleCheckboxChange={handleCheckboxChange} />
        </div>
    );


}

export default Dashboard;

