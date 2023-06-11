import React from 'react';


/**
 * Dropdown component for selecting options.
 */
const Dropdown2 = ({ fakeData, onChange, styling, options, changeableFakeData, setChangeableFakeData,selectedOptions2 }) => {

    return (
        <select value={selectedOptions2} onChange={onChange} style={{ ...styling}}>
            {options.map((option) => (
                <option key={option} style={styling}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown2;
