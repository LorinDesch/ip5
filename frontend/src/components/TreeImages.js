import React from 'react';

const TreeImages = ({ leftIndex, rightIndex, isOn, fakeData, selectedOption2, selectedOption3, setSelectedOption1, selectedOption1, setSelectedOption2, setSelectedOption3 }) => {

    console.log("TreeImages.js: selectedOption1: ", selectedOption1)
    console.log("TreeImages.js: selectedOption2: ", selectedOption2)
    console.log("TreeImages.js: selectedOption3: ", selectedOption3)
    console.log("TreeImages.js: fakeData: ", fakeData)

    if(selectedOption2 === "Challenge"){
        leftIndex = 0;
        rightIndex= 0;
    } else {
        //for leftIdx
        const cId = fakeData.commitments.filter(commitment => commitment.commitmentname === selectedOption2)[0].commitmentid;
        let uId= undefined;
        try{
            uId = fakeData.users.filter(user => user.username === selectedOption1)[0].userid;
        } catch (e) {
            uId = fakeData.groups.filter(group => group.groupname === selectedOption1)[0].groupid;
        }
        const diary = fakeData.diary.find(d => d.userid === uId && d.commitmentid === cId);
        leftIndex = diary.eingeloest;

        //for rightIdx
        const selectedUsers = selectedOption3.flatMap(option =>
            fakeData.groups.filter(group => group.groupname === option)
                .map(group => group.users)
                .reduce((acc, val) => acc.concat(val), [])
        );
        const diaries = fakeData.diary.filter(d => d.commitmentid === cId && selectedUsers.includes(d.userid));
        rightIndex = diaries.reduce((acc, val) => acc + val.eingeloest, 0) / diaries.length;
        if(diaries.length === 0){
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