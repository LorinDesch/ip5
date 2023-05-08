import React from 'react';

const Dropdown1 = ({ selectedOption, handleChange, styling }) => {
    const options = ['Ich', 'Meine Klasse'];

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <select value={selectedOption} onChange={handleChange} style={styling}>
                {options.map((option) => (
                    <option key={option} value={option} style={styling}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown1;
