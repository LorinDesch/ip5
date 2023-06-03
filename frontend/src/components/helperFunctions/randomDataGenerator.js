/**
 * This file generates random data for the frontend.
*/

const users = [
    {
        userid: 1,
        username: "Max Mustermann",
    },
    {
        userid: 2,
        username: "Peter Mueller",
    },
    {
        userid: 3,
        username: "Hans Meier",
    },
    {
        userid: 4,
        username: "Hans Meier2",
    },
    {
        userid: 5,
        username: "Emily Smith",
    },
    {
        userid: 6,
        username: "Oliver Taylor",
    },
    {
        userid: 7,
        username: "Sophia Johnson",
    },
    {
        userid: 8,
        username: "Aiden Davis",
    },
    {
        userid: 9,
        username: "Isabella Clark",
    },
    {
        userid: 10,
        username: "Liam Adams",
    },
    {
        userid: 11,
        username: "Charlotte Walker",
    },
    {
        userid: 13,
        username: "Eleanor Anderson",
    },
    {
        userid: 14,
        username: "Sebastian Martinez",
    },
    {
        userid: 15,
        username: "Amelia Thompson",
    },
    {
        userid: 16,
        username: "Nathan Rodriguez",
    },
    {
        userid: 17,
        username: "Victoria Wilson",
    },
    {
        userid: 18,
        username: "Julian Garcia",
    },
    {
        userid: 19,
        username: "Penelope Hernandez",
    },
    {
        userid: 20,
        username: "Lucas Phillips",
    },
    // ... rest of the user data
];

const commitments = [
    {
        commitmentid: -1,
        commitmentname: "Challenge",
    },
    {
        commitmentid: 1,
        commitmentname: "Ich ernähre mich vegan",
    },
    {
        commitmentid: 2,
        commitmentname: "Ich esse nur einmal pro Woche Fleisch.",
    },
    {
        commitmentid: 3,
        commitmentname: "Ich dusche maximal fünf Minuten pro Tag.",
    },
    // ... rest of the commitment data
];

const diaryRecords = [];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a unique diary record
function generateUniqueDiaryRecord(previousDiary) {
    const newUser = users[getRandomNumber(0, users.length - 1)];
    const newCommitment = commitments[getRandomNumber(1, 3)];

    // Generate a unique diaryid by incrementing the previous diary's diaryid
    const newDiaryId = previousDiary ? previousDiary.diaryid + 1 : 1;

    // Generate unique data for the diary record
    const newSchluesse = {
        selbst: "Generated random data",
        sozial: "Generated random data",
        politik: "Generated random data",
        produkt: "Generated random data",
    };
    const newEingeloest = getRandomNumber(0, 28);
    const newFeelings = Array.from({length: 28}, () =>
        Number(Math.random().toFixed(1))
    );
    const newDifficulty = [Number(Math.random().toFixed(1)), Number(Math.random().toFixed(2))];
    const newRestriction = [Number(Math.random().toFixed(1)), Number(Math.random().toFixed(2))];
    const newEnvironment = [Number(Math.random().toFixed(2)), Number(Math.random().toFixed(2))];
    const newCurrentContribution = [
        Number(Math.random().toFixed(1)),
        Number(Math.random().toFixed(1)),
    ];
    const newAllowsMeTo = [
        Number(Math.random().toFixed(1)),
        Number(Math.random().toFixed(1)),
    ];
    const newSustainableDevelopment = [
        Number(Math.random().toFixed(1)),
        Number(Math.random().toFixed(1)),
    ];

    // Create the new diary record
    const newDiaryRecord = {
        diaryid: newDiaryId,
        userid: newUser.userid,
        commitmentid: newCommitment.commitmentid,
        schluesse: newSchluesse,
        eingeloest: newEingeloest,
        feelings: newFeelings,
        difficulty: newDifficulty,
        restriction: newRestriction,
        environment: newEnvironment,
        currentContribution: newCurrentContribution,
        allowsMeTo: newAllowsMeTo,
        sustainableDevelopment: newSustainableDevelopment,
    };

    return newDiaryRecord;
}

// Generate the desired number of diary records starting from index 10
const numDiaryRecords = 30; // Change this to the desired number
let previousDiary = diaryRecords.length >= 10 ? diaryRecords[9] : null; // Get the previous diary record from index 9

for (let i = 10; i < numDiaryRecords + 10; i++) {
    const newDiaryRecord = generateUniqueDiaryRecord(previousDiary);
    diaryRecords.push(newDiaryRecord);
    previousDiary = newDiaryRecord;
}

console.log(diaryRecords);
