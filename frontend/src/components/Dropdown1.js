import React from 'react';

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
