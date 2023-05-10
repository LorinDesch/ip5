import React from 'react';

const TreeImages = ({ leftIndex, rightIndex, fakeData, selectedOption2, selectedOption3, setSelectedOption1, selectedOption1, setSelectedOption2, setSelectedOption3 }) => {

    if (selectedOption2 === "Challenge") {
        leftIndex = 0;
        rightIndex = 0;
    } else {
        // Calculate left index
        const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
        let groupOfUsers;
        if (selectedOption1 === "Max Mustermann") {
            const uId = fakeData.users.find(user => user.username === "Max Mustermann")?.userid;
            const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
            const selectedDiaries = diariesFromCiD.filter(diary => diary.userid === uId);
            leftIndex = selectedDiaries[0]?.eingeloest || 0;
        } else if (selectedOption1 === "Gruppe 1") {
            groupOfUsers = fakeData.groups.find(group => group.groupname === "Gruppe 1")?.users || [];
            leftIndex = groupOfUsers.reduce((acc, user) => {
                const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
                const selectedDiaries = diariesFromCiD.filter(diary => diary.userid === user);
                return acc + (selectedDiaries[0]?.eingeloest || 0);
            }, 0) / groupOfUsers.length || 0;

        } else {
            leftIndex = 0;
        }


        //TODO: Calculate right index better
        //get each userId from each group
        const selectedUsers = selectedOption3.flatMap(option =>
            fakeData.groups.filter(group => group.groupname === option)
                .map(group => group.users)
                .reduce((acc, val) => acc.concat(val), [])
        );
        //each user can only be in the selectedUsers once
        const uniqueSelectedUsers = [...new Set(selectedUsers)];

        //get all diaries from the selected commitment
        const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
        //get all diaries from the selected users
        const selectedDiaries = diariesFromCiD.filter(diary => uniqueSelectedUsers.includes(diary.userid));
        //get all eingeloest from the selected diaries
        const eingeloest = selectedDiaries.map(diary => diary.eingeloest);
        //get the sum of all eingeloest
        const sum = eingeloest.reduce((a, b) => a + b, 0);
        //get the average of all eingeloest
        rightIndex = sum / uniqueSelectedUsers.length || 0;

        if (isNaN(leftIndex)) {
            leftIndex = 0;
        }
        if (isNaN(rightIndex)) {
            rightIndex = 0;
        }
    }


    const leftImagePath = `${process.env.PUBLIC_URL}/images/tree_left/l${leftIndex}-min-min.png`;
    const rightImagePath = `${process.env.PUBLIC_URL}/images/tree_right/r${rightIndex}-min-min.png`;

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const imageStylesRight = {
        marginLeft: '-30rem',
        width: '60rem',
        height: 'auto',
    };
    const imageStylesLeft = {
        marginRight: '-30rem',
        width: '60rem',
        height: 'auto',
    };

    return (
        <div style={containerStyles}>
            <img src={leftImagePath} alt={`left tree ${leftIndex}`} style={imageStylesLeft} />
            <img src={rightImagePath} alt={`right tree ${rightIndex}`} style={imageStylesRight} />
        </div>
    );
};

export default TreeImages;