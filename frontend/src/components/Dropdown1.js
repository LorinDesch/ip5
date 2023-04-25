import React from 'react';

const Dropdown1 = ({ selectedOption, handleChange }) => {
    const options = ['Ich', 'Meine Klasse'];

    return (
        <select value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown1;
