import React from 'react';

/**
 * Retrieves the left index value for the TreeImages component.
 *
 * @param {Object} fakeData - The fake data.
 * @param {string} selectedOption1 - The selected value for dropdown 1.
 * @param {string} selectedOption2 - The selected value for dropdown 2.
 * @param {string[]} selectedOption3 - The selected values for dropdown 3.
 * @returns {number} The left index value.
 */
function getLeftIndex(fakeData, selectedOption1, selectedOption2, selectedOption3) {
    let leftIndex = 0;
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
    if (cId >= 0) {
        const uId = fakeData.users.find(user => user.username === selectedOption1)?.userid;
        const gId = fakeData.groups.find(group => group.groupname === selectedOption1)?.groupid;
        if (uId !== undefined) {
            const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
            const selectedDiaries = diariesFromCiD.filter(diary => diary.userid === uId);
            leftIndex = Math.round(selectedDiaries[0]?.eingeloest || 0);
        } else if (gId !== undefined) {
            const groupOfUsers = fakeData.groups.find(group => group.groupname === selectedOption1)?.users || [];
            leftIndex = Math.round(groupOfUsers.reduce((acc, user) => {
                const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
                const selectedDiaries = diariesFromCiD.filter(diary => diary.userid === user);
                return acc + (selectedDiaries[0]?.eingeloest || 0);
            }, 0) / groupOfUsers.length || 0);
        } else {
            leftIndex = 0;
        }
    }
    return leftIndex;
}

/**
 * Retrieves the right index value for the TreeImages component.
 *
 * @param {Object} fakeData - The fake data.
 * @param {string} selectedOption1 - The selected value for dropdown 1.
 * @param {string} selectedOption2 - The selected value for dropdown 2.
 * @param {string[]} selectedOption3 - The selected values for dropdown 3.
 * @returns {number} The right index value.
 */
function getRightIndex(fakeData, selectedOption1, selectedOption2, selectedOption3) {
    let rightIndex = 0;
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
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
    console.log(eingeloest)
    //get the sum of all eingeloest
    const sum = eingeloest.reduce((a, b) => a + b, 0);
    //get the average of all eingeloest
    rightIndex = Math.round(sum / uniqueSelectedUsers.length || 0);
    return rightIndex;
}

/**
 * Component for displaying tree images based on selected options.
 *
 * @param {Object} props - The component props.
 * @param {number} props.leftIndex - The left index value.
 * @param {number} props.rightIndex - The right index value.
 * @param {Object} props.fakeData - The fake data used in the component.
 * @param {string} props.selectedOption2 - The selected value for dropdown 2.
 * @param {string[]} props.selectedOption3 - The selected values for dropdown 3.
 * @param {function} props.setSelectedOption1 - The function to set the selected value for dropdown 1.
 * @param {string} props.selectedOption1 - The selected value for dropdown 1.
 * @param {function} props.setSelectedOption2 - The function to set the selected value for dropdown 2.
 * @param {function} props.setSelectedOption3 - The function to set the selected values for dropdown 3.
 * @returns {JSX.Element} The rendered TreeImages component.
 */
const TreeImages = ({
                        leftIndex,
                        rightIndex,
                        fakeData,
                        selectedOption2,
                        selectedOption3,
                        setSelectedOption1,
                        selectedOption1,
                        setSelectedOption2,
                        setSelectedOption3
                    }) => {


    if (selectedOption2 === "Challenge") {
        leftIndex = 0;
        rightIndex = 0;
    } else {
        leftIndex = getLeftIndex(fakeData, selectedOption1, selectedOption2, selectedOption3);
        rightIndex = getRightIndex(fakeData, selectedOption1, selectedOption2, selectedOption3);

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
        <div>
            <h3 style={{marginTop:"4rem"}}>Hast du das Commitment öfter <br/> erreicht als die ausgewählten Gruppen?</h3>
            <div style={containerStyles}>

                <img src={leftImagePath} alt={`left tree ${leftIndex}`} style={imageStylesLeft}/>
                <img src={rightImagePath} alt={`right tree ${rightIndex}`} style={imageStylesRight}/>
            </div>
        </div>
    );
};

export default TreeImages;