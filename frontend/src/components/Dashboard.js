import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';


export function getSchluesseChallengeUserGroup(selectedOption1, selectedOption2, fakeData) {
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

export function getSchluesseChallengeGroups(selectedOption2, selectedOption3, fakeData) {
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

function Dashboard({
                       fakeData,
                       selectedOption1,
                       selectedOption2,
                       selectedOption3,
                       setSelectedOption3,
                       setSelectedOption1,
                       setSelectedOption2
                   }) {


    const schluesseChallengeUserGroup = getSchluesseChallengeUserGroup(selectedOption1, selectedOption2, fakeData);
    const schluesseChallengeGroups = getSchluesseChallengeGroups(selectedOption2, selectedOption3, fakeData);


    return (

        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
                <TopNavbar fakeData={fakeData} selectedOption1={selectedOption1}
                           setSelectedOption1={setSelectedOption1}
                           selectedOption2={selectedOption2}
                           setSelectedOption2={setSelectedOption2}
                           selectedOption3={selectedOption3}
                           setSelectedOption3={setSelectedOption3}/>
            </header>
            <div style={{
                position: 'fixed',
                top: '55px',
                left: 0,
                bottom: 0,
                width: '5rem',
                backgroundColor: '#f8f9fa',
                zIndex: 1
            }}>
                <SideNavbar/>
            </div>


            <div style={{flex: '1', overflowY: 'auto', overflowX: 'auto'}}>
                <Container fluid style={{maxWidth: '2000px', marginLeft: '7rem'}}>
                    <Row>
                        <Col md={4}>
                            <div className="d-flex justify-content-center align-items-center text-center" style={{ marginRight: '12rem' }}>
                                <div style={{ height: '300px' }}>
                                    <SchluesseAusChallenge schluesse={schluesseChallengeUserGroup} />
                                </div>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="d-flex justify-content-center align-items-center text-center">

                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex justify-content-center align-items-center text-center" style={{ marginRight: '12rem' }}>
                                <div style={{ height: '300px' }}>
                                    <SchluesseAusChallenge schluesse={schluesseChallengeUserGroup} />
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={4} style={{marginTop: '24.4rem'}}>
                            <div className="d-flex justify-content-center align-items-center text-center"
                                 style={{marginLeft: '12rem'}}>
                                <FeelingsBar fakeData={fakeData} selectedOption1={selectedOption1}
                                             setSelectedOption1={setSelectedOption1}
                                             selectedOption2={selectedOption2}
                                             setSelectedOption2={setSelectedOption2}
                                             selectedOption3={selectedOption3}
                                             setSelectedOption3={setSelectedOption3} width={600} height={180}/>
                            </div>
                        </Col>
                        <Col md={4} style={{marginBottom: '6rem'}}>
                            <div className="d-flex justify-content-center align-items-center text-center"
                                 style={{
                                     height: '1%',
                                     transform: 'scale(0.95)',
                                     marginRight: '11rem',
                                     marginTop: '9.3rem'
                                 }}>
                                <TreeImages
                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}/>
                            </div>
                        </Col>
                        <Col md={4} style={{marginTop: '23.3rem'}}>
                            <div className="d-flex justify-content-center align-items-center text-center"
                                 style={{marginRight: '30rem'}}>
                                <CommitmentsBar  width={700} height={200}
                                                fakeData={fakeData} selectedOption1={selectedOption1}
                                                setSelectedOption1={setSelectedOption1}
                                                selectedOption2={selectedOption2}
                                                setSelectedOption2={setSelectedOption2}
                                                selectedOption3={selectedOption3}
                                                setSelectedOption3={setSelectedOption3}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
