import React from 'react';

/**
 * Dropdown component for selecting options.
 */
const Dropdown1 = ({ fakeData, onChange, styling, options, changeableFakeData, setChangeableFakeData, selectedOptions1 }) => {

    console.log(fakeData)
    //select the user where user.username === the user in localstorage
    const user = fakeData.users.find(user => user.username === localStorage.getItem('loggedInUser'));
    //select the group where the user is a member of
    const group = fakeData.groups.find(group => group.users.includes(user.userid));

    const selectedUser = user.username;
    const selectedGroup = group.groupname;

    //set options to the user and the group
    options = [selectedUser, selectedGroup];

    return (
        <select value={selectedOptions1} onChange={onChange} style={{...styling}}>
            {options.map((option) => (
                <option key={option} style={styling}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown1;
