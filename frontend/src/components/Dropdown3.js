import React, { useState } from 'react';

/**
 * Dropdown component with checkboxes for selecting multiple options.
 */
const Dropdown3 = ({ options, selectedOptions, onChange, styling, fakeData  }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdown3 = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCheckboxChange = (event, optionValue) => {
        if (event.target.checked) {
            onChange([...selectedOptions, optionValue]);
        } else {
            onChange(selectedOptions.filter((value) => value !== optionValue));
        }
    };



    const dropdownStyle = {
        position: 'relative',
        width: '16.5rem',
        height: '3rem',

    };

    const buttonStyle = {
        ...styling,
        height: '100%',
        width: '100%',
        padding: '7px 30px 12px 12px',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath fill=\'%23000000\' fill-rule=\'evenodd\' d=\'M5 6L0 .666666667 1.11111111 0l3.88888889 3.666666667L8.88888889 0 10 .666666667\'/%3E%3C/svg%3E")',
        backgroundPosition: 'right 10px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 30%',
        border: '2px solid black',
        borderRadius: '4px',
        backgroundColor: '#fff',
        appearance: 'none',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        cursor: 'pointer',
    };

    const ulStyle = {
        padding: '2px',
        display: isDropdownOpen ? 'block' : 'none',
        margin: 0,
        border: '1px solid #ccc',
        borderTop: 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        background: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        zIndex: 1,
        fontSize: '20px',
        fontFamily: 'sans-serif',
    };

    const liStyle = {
        listStyle: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        userSelect: 'none',
    };

    const checkboxStyle = {
        marginRight: '10px',
        transform: 'scale(1.5)',
        cursor: 'pointer',
    };

    const labelStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
    };

    const labelTextStyle = {
        marginLeft: '5px',
    };

    return (
        <div style={dropdownStyle}>
            <button style={buttonStyle} onClick={handleDropdown3}>
                {selectedOptions.length === 0 ? 'Gruppen auswählen' : `${selectedOptions.length} ${selectedOptions.length === 1 ? 'Gruppe' : 'Gruppen'} ausgewählt`}
            </button>
            <ul style={ulStyle}>
                {options.map((option) => (
                    <li key={option.value} style={liStyle}>
                        <label htmlFor={option.value} style={labelStyle}>
                            <input
                                type="checkbox"
                                id={option.value}
                                checked={selectedOptions.includes(option.value)}
                                onChange={(event) => handleCheckboxChange(event, option.value)}
                                style={checkboxStyle}
                            />
                            <span style={labelTextStyle}>{option.label}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown3;
