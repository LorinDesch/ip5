/**
 * Retrieves the second difficulty value for each group in the selectedOption3 array,
 * based on the provided attribute, selectedOption2, and fakeData.
 * If a valid commitment ID is found for selectedOption2, the function searches for the group.userIds
 * in fakeData and returns an array of second difficulty values for each group.
 * If no valid commitment ID is found, an array of zeros is returned.
 */
export function getValueAttributeOnlyGroup(attribute, selectedOption3, fakeData, selectedOption2) {
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
    const zeros = [];
    if (cId > 0) {
        //for each selectedOption3 find the group.userIds and get the second difficulty value for each group
        const selectedGroupsDifficulties = selectedOption3.flatMap(groupName => fakeData.groups.find(group => group.groupname === groupName) || [])
            .map(group => group.users.flatMap(userId => {
                const diary = fakeData.diary.find(diary => diary.userid === userId && diary.commitmentid === cId);
                return diary ? diary[attribute][1] : [];
            }).reduce((acc, val, idx, arr) => {
                acc += val;
                if (idx === arr.length - 1) {
                    acc /= arr.length;
                }
                return acc;
            }, 0));
        return selectedGroupsDifficulties.length > 0 ? selectedGroupsDifficulties : zeros;
    }
    return zeros;
}

/**
 * Retrieves the Schluesse Challenge for a specific user or group.
 */
export function getSchluesseSelectedDropdown1(selectedOption1, selectedOption2, fakeData) {
    const selectedCommitment = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2);
    const commitmentId = selectedCommitment?.commitmentid;
    const categorizedArray = [];

    if (commitmentId > 0) {
        const selectedUser = fakeData.users.find(user => user.username === selectedOption1);
        const userId = selectedUser?.userid;
        let returnValue = [];

        if (userId !== undefined) {
            returnValue = fakeData.diary.filter(diary => diary.userid === userId && diary.commitmentid === commitmentId);
            returnValue = returnValue.map(diary => diary.schluesse || "-");
        } else {
            const selectedGroup = fakeData.groups.find(group => group.groupname === selectedOption1);
            const groupUsers = selectedGroup?.users || [];
            returnValue = groupUsers.flatMap(user => fakeData.diary.filter(diary => diary.userid === user && diary.commitmentid === commitmentId));
            returnValue = returnValue.map(diary => diary.schluesse || "-");
        }

        // Randomly select one value for each category
        const randomIndex = Math.floor(Math.random() * returnValue.length);

        categorizedArray.push(returnValue[randomIndex]?.politik || "-");
        categorizedArray.push(returnValue[randomIndex]?.produkt || "-");
        categorizedArray.push(returnValue[randomIndex]?.selbst || "-");
        categorizedArray.push(returnValue[randomIndex]?.sozial || "-");

        return categorizedArray;
    } else {
        return ["-", "-", "-", "-"];
    }
}

/**
 * Retrieves the Schluesse Challenge for a specific group.
 */
export function getSchluesseSelectedDropdown3(selectedOption2, selectedOption3, fakeData) {
    const selectedCommitment = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2);
    const commitmentId = selectedCommitment?.commitmentid;
    let returnValue = [];
    const categorizedArray = [];

    if (commitmentId > 0) {
        const selectedGroup = selectedOption3.flatMap(group => fakeData.groups.filter(group2 => group2.groupname === group));
        const groupUsers = selectedGroup.flatMap(group => group.users);
        returnValue = groupUsers.flatMap(user => fakeData.diary.filter(diary => diary.userid === user && diary.commitmentid === commitmentId));
        returnValue = returnValue.map(diary => diary.schluesse || "-");
        // Randomly select one value for each category but not only from the same user
        const randomIndex = Math.floor(Math.random() * returnValue.length);

        categorizedArray.push(returnValue[randomIndex]?.politik || "-");
        categorizedArray.push(returnValue[randomIndex]?.produkt || "-");
        categorizedArray.push(returnValue[randomIndex]?.selbst || "-");
        categorizedArray.push(returnValue[randomIndex]?.sozial || "-");

        return categorizedArray;
    } else {
        return ["-", "-", "-", "-"];
    }
}

/**
 * Retrieves the left index value for the TreeImages component.
 */
export function getLeftIndex(fakeData, selectedOption1, selectedOption2, selectedOption3) {
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
 */
export function getRightIndex(fakeData, selectedOption1, selectedOption2, selectedOption3) {
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
    //get the sum of all eingeloest
    const sum = eingeloest.reduce((a, b) => a + b, 0);
    //get the average of all eingeloest
    rightIndex = Math.round(sum / uniqueSelectedUsers.length || 0);
    return rightIndex;
}

/**
 * Helper function to retrieve the array of feelings (eingeloeste) based on selected options.
 *
 * @param {Object} fakeData - The fake data object.
 * @param {string} selectedOption1 - The selected option 1.
 * @param {string} selectedOption2 - The selected option 2.
 * @param {string[]} selectedOption3 - The selected option 3.
 * @returns {number[]} The array of feelings (eingeloeste).
 */
export function getFeelingsArray(fakeData, selectedOption1, selectedOption2, selectedOption3) {
    let eingeloeste = [];

    const cId = fakeData.commitments.filter(commitment => commitment.commitmentname === selectedOption2)[0].commitmentid;

    if (cId >= 0) {
        selectedOption3.map(option => {
            const groupOfUsers = fakeData.groups.filter(group => group.groupname === option)[0].users;
            const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
            const selectedDiaries = diariesFromCiD.filter(diary => groupOfUsers.includes(diary.userid));
            const eingeloest = selectedDiaries.map(diary => diary.eingeloest);
            const sum = eingeloest.reduce((a, b) => a + b, 0);
            const avg = sum / groupOfUsers.length || 0;
            eingeloeste.push(avg);
            return avg;
        });
    }
    return eingeloeste;
}