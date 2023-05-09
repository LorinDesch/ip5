import React from 'react';

const Dropdown1 = ({ fakeData, onChange, styling, options, changeableFakeData, setChangeableFakeData,selectedOptions1 }) => {

    return (
        <select value={selectedOptions1} onChange={onChange} style={styling}>
            {options.map((option) => (
                <option key={option} style={styling}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown1;
