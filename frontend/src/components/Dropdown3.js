import React from 'react';
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

const Dropdown3 = ({ options, selectedOptions, handleChange, handleCheckboxChange }) => {
    return (
        <Select
            options={options}
            isMulti
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Klasse auswählen"
            components={{
                Option: (props) => <CheckboxOption {...props} handleCheckboxChange={handleCheckboxChange} />,
            }}
        />
    );
};

export default Dropdown3;
