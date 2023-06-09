/**
 * api.js got setup for handling login requests from the besmarth API.
 * It is not used in the Project, since there were Errors with the retreiving Server at the time of implementation.
 */

/**
 * Handles the diary data retrieval for the logged-in user.
 */
export const handleDiaryData = async (responseData) => {
    try {
        const diaryResponse = await fetch('http://localhost:3001/diary/', {
            headers: { Authorization: `Token ${responseData.token}` },
        });

        if (!diaryResponse.ok) {
            throw new Error('Failed to fetch Diary');
        }

        const diaryData = await diaryResponse.json();

        const newData = {
            ...responseData,
            diary: diaryData,
        };

        return newData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Handles the challenge data retrieval for the logged-in user.
 */
export const handleChallengeData = async (responseData) => {
    try {
        const challengesResponse = await fetch('http://localhost:3001/challenges/', {
            headers: { Authorization: `Token ${responseData.token}` },
        });

        if (!challengesResponse.ok) {
            throw new Error('Failed to fetch challenges');
        }

        const challengesData = await challengesResponse.json();

        const newData = {
            ...responseData,
            challenges: challengesData,
        };

        const diaryData = await handleDiaryData(responseData);

        return { ...newData, diary: diaryData.diary };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Handles the group data retrieval for the logged-in user.
 */
export const handleGroupData = async (responseData) => {
    try {
        const groupsResponse = await fetch('http://localhost:3001/groups/', {
            headers: { Authorization: `Token ${responseData.token}` },
        });

        if (!groupsResponse.ok) {
            throw new Error('Failed to fetch groups');
        }

        const groupsData = await groupsResponse.json();

        const newData = {
            username: responseData.username,
            token: responseData.token,
            userId: responseData.user_id,
            groups: [],
        };

        for (const group of groupsData) {
            const groupMembersResponse = await fetch(`http://localhost:3001/groups/${group.id}/groupAffiliations/`, {
                headers: { Authorization: `Token ${responseData.token}` },
            });

            if (!groupMembersResponse.ok) {
                throw new Error('Failed to fetch group members');
            }

            const groupMembersData = await groupMembersResponse.json();

            const groupObject = {
                groupId: group.id,
                groupName: group.group_name,
                members: groupMembersData.map((groupMember) => ({
                    memberId: groupMember.member,
                    adminStatus: groupMember.admin_status,
                })),
            };

            newData.groups.push(groupObject);
        }

        const challengeData = await handleChallengeData(responseData);
        const diaryData = await handleDiaryData(responseData);

        return { ...newData, challenges: challengeData.challenges, diary: diaryData.diary };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Handles the login process for the user.
 */
export const handleLogin = async (username, password) => {
    try {
        const response = await fetch('http://localhost:3001/account/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        const responseData = await response.json();

        const newData = await handleGroupData(responseData);

        return newData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
