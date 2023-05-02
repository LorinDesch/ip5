import React, { useState } from 'react';

const Dropdown3 = ({ options, selectedOptions, onChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCheckboxChange = (event, optionValue) => {
        if (event.target.checked) {
            onChange([...selectedOptions, optionValue]);
        } else {
            onChange(selectedOptions.filter((value) => value !== optionValue));
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '2rem' }}>
            <button style={{ height: '100%', width: '100%', fontSize: '15px' }} onClick={handleToggleDropdown}>
                {selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : 'Select options'}
            </button>
            {isDropdownOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '0.5rem' }}>
                    {options.map((option) => (
                        <div key={option.value}>
                            <input type="checkbox" checked={selectedOptions.includes(option.value)} onChange={(event) => handleCheckboxChange(event, option.value)} />
                            <label>{option.label}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown3;











// const CheckboxOption = ({ data, isSelected, innerRef, innerProps, handleCheckboxChange }) => {
//     const { onClick } = innerProps;
//     const handleCheckboxClick = (event) => {
//         onClick(event);
//         handleCheckboxChange(event, data.value);
//     };

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} {...innerProps}>
//             <input type="checkbox" checked={isSelected} onChange={handleCheckboxClick} style={{ marginRight: '0.5rem' }} ref={innerRef} />
//             {data.label}
//         </div>
//     );
// };

// const Dropdown3 = ({ options, selectedOptions, handleChange, handleCheckboxChange }) => {
//     const DropdownControl = ({ children, ...props }) => {
//         const shouldShowSelectedOptions = selectedOptions.length > 0;

//         return (
//             <components.Control {...props}>
//                 {!shouldShowSelectedOptions && children}
//                 {shouldShowSelectedOptions && (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
//                         {selectedOptions.map((option) => (
//                             <div key={option.value} style={{ backgroundColor: 'lightgrey', padding: '0.5rem', borderRadius: '0.5rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}>
//                                 {option.label}
//                             </div>
//                         ))}
//                         {children}
//                     </div>
//                 )}
//             </components.Control>
//         );
//     };

//     return (
//         <Select
//             options={options}
//             isMulti
//             value={selectedOptions}
//             onChange={handleChange}
//             placeholder="Klasse auswählen"
//             components={{
//                 Control: DropdownControl,
//                 Option: (props) => <CheckboxOption {...props} handleCheckboxChange={handleCheckboxChange} />,
//             }}
//         />
//     );
// };

// export default Dropdown3;
