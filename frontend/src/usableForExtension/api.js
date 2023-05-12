/**
 * Api.js got setup for handling login requests from the frontend. It is not used in the Project, since there were
 * Errors with the retreiving Server at the time of implementation.
 */

/**
 * Handles the diary data retrieval for the logged-in user.
 *
 * @param {Object} responseData - The response data containing the user's token.
 * @returns {Promise<Object>} A Promise that resolves to the updated data with diary information.
 * @throws {Error} If there's an error fetching or processing the diary data.
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
 *
 * @param {Object} responseData - The response data containing the user's token.
 * @returns {Promise<Object>} A Promise that resolves to the updated data with challenge information.
 * @throws {Error} If there's an error fetching or processing the challenge data.
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
 *
 * @param {Object} responseData - The response data containing the user's token.
 * @returns {Promise<Object>} A Promise that resolves to the updated data with group information.
 * @throws {Error} If there's an error fetching or processing the group data.
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
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} A Promise that resolves to the updated data after successful login.
 * @throws {Error} If there's an error during the login process or fetching group data.
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
