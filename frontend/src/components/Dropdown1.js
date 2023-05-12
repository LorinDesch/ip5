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
 * @param {string} props.selectedOptions1 - The selected option 1.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown1 = ({ fakeData, onChange, styling, options, changeableFakeData, setChangeableFakeData, selectedOptions1 }) => {

    //select the user where user.username === the user in localstorage
    const user = fakeData.users.find(user => user.username === localStorage.getItem('loggedInUser'));
    //select the group where the user is a member of
    const group = fakeData.groups.find(group => group.users.includes(user.userid));

    const selectedUser = user.username;
    const selectedGroup = group.groupname;

    //set options to the user and the group
    options = [selectedUser, selectedGroup];

    return (
        <select value={selectedOptions1} onChange={onChange} style={{...styling, width: '16rem'}}>
            {options.map((option) => (
                <option key={option} style={styling}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown1;
