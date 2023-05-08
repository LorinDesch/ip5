import React from 'react';

const Dropdown2 = ({ selectedOption, handleChange, styling }) => {
    const options = ['Challenge', 'Reduktion Wasserverbrauch', 'Reduktion Stromverbrauch', 'Reduktion Fleischkonsum'];

    return (
        <select value={selectedOption} onChange={handleChange} style={styling}>
            {options.map((option) => (
                <option key={option} value={option} style={styling}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown2;
