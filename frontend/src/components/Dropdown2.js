import React from 'react';


/**
 * Dropdown component for selecting options.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.fakeData - The fake data object.
 * @param {Function} props.onChange - The function to handle the onChange event.
 * @param {Object} props.styling - The styles for the dropdown.
 * @param {string[]} props.options - The available options for the dropdown.
 * @param {Object} props.changeableFakeData - The changeable fake data object.
 * @param {Function} props.setChangeableFakeData - The function to set the changeable fake data.
 * @param {string} props.selectedOptions2 - The selected option 2.
 * @returns {JSX.Element} The rendered Dropdown component.
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
