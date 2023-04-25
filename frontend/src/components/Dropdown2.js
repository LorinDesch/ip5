import React from 'react';

const Dropdown2 = ({ selectedOption, handleChange }) => {
    const options = ['Challenge', 'Reduktion Wasserverbrauch', 'Reduktion Stromverbrauch', 'Reduktion Fleischkonsum'];

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

export default Dropdown2;
