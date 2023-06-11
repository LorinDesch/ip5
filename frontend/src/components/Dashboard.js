import React, {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';
import './style.css';

/**
 * Retrieves the Schluesse Challenge for a specific user or group.
 *
 * @param {string} selectedOption1 - The selected user or group.
 * @param {string} selectedOption2 - The selected commitment.
 * @param {Object} fakeData - The fake data object.
 * @returns {string[]} The Schluesse Challenge for the user or group.
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
 *
 * @param {string} selectedOption2 - The selected commitment.
 * @param {string[]} selectedOption3 - The selected groups.
 * @param {Object} fakeData - The fake data object.
 * @returns {string[]} The Schluesse Challenge for the group.
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
 * Dashboard component that displays various sections and charts.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.fakeData - The fake data object.
 * @param {string} props.selectedOption1 - The selected option 1 (user or group).
 * @param {string} props.selectedOption2 - The selected option 2 (commitment).
 * @param {string[]} props.selectedOption3 - The selected options 3 (groups).
 * @param {Function} props.setSelectedOption3 - The function to set the selected options 3.
 * @param {Function} props.setSelectedOption1 - The function to set the selected option 1.
 * @param {Function} props.setSelectedOption2 - The function to set the selected option 2.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
function Dashboard({
                       fakeData,
                       selectedOption1,
                       selectedOption2,
                       selectedOption3,
                       setSelectedOption3,
                       setSelectedOption1,
                       setSelectedOption2
                   }) {


    const schluesseSelectedDropdown1 = getSchluesseSelectedDropdown1(selectedOption1, selectedOption2, fakeData);
    const schluesseSelectedDropdown3 = getSchluesseSelectedDropdown3(selectedOption2, selectedOption3, fakeData);


    return (

        <div>
            <header>
                <TopNavbar fakeData={fakeData} selectedOption1={selectedOption1}
                           setSelectedOption1={setSelectedOption1}
                           selectedOption2={selectedOption2}
                           setSelectedOption2={setSelectedOption2}
                           selectedOption3={selectedOption3}
                           setSelectedOption3={setSelectedOption3}/>
            </header>


            <div>
                <SideNavbar/>
            </div>


            <div>
                <Container fluid>
                    <div>
                        <Row className="justify-content-center">
                            <Col md={4}
                                // style={{backgroundColor: 'red'}}
                            >
                                <Row
                                    // style={{backgroundColor: 'blue'}}
                                >
                                    <SchluesseAusChallenge className="schluesseLinks" schluesse={schluesseSelectedDropdown1}
                                    />
                                </Row>
                                <Row
                                    // style={{backgroundColor: 'darkgray'}}
                                >
                                    <FeelingsBar className="feelingsbar"
                                                 fakeData={fakeData} selectedOption1={selectedOption1}
                                                 setSelectedOption1={setSelectedOption1}
                                                 selectedOption2={selectedOption2}
                                                 setSelectedOption2={setSelectedOption2}
                                                 selectedOption3={selectedOption3}
                                                 setSelectedOption3={setSelectedOption3}
                                                 width={window.innerWidth <= 768 ? 500 : 600}
                                                 height={window.innerWidth <= 768 ? 150 : 180}/>
                                </Row>
                            </Col>
                            <Col md={3}
                                // style={{backgroundColor: 'green'}}
                            >
                                <TreeImages
                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}/>
                            </Col>
                            <Col md={3}
                                // style={{backgroundColor: 'yellow'}}
                            >
                                <Row
                                    // style={{backgroundColor: 'blue'}}
                                >
                                    <SchluesseAusChallenge className="schluesseRechts" schluesse={schluesseSelectedDropdown3}/>
                                </Row>
                                <Row
                                    // style={{backgroundColor: 'darkgray'}}
                                >
                                    <CommitmentsBar className="commitmentsbar"
                                                    width={window.innerWidth <= 768 ? 400 : 700}
                                                    height={window.innerWidth <= 768 ? 180 : 200}
                                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                                    setSelectedOption1={setSelectedOption1}
                                                    selectedOption2={selectedOption2}
                                                    setSelectedOption2={setSelectedOption2}
                                                    selectedOption3={selectedOption3}
                                                    setSelectedOption3={setSelectedOption3}/>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
{/*</div>*/
}


{/*<Row>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <div>*/
}
{/*                <SchluesseAusChallenge schluesse={schluesseSelectedDropdown1}/>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}

{/*    <Col md={4}>*/
}
{/*        <div>*/
}

{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <div style={{height: '300px'}}>*/
}
{/*                <SchluesseAusChallenge schluesse={schluesseSelectedDropdown3}/>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}

{/*</Row>*/
}

{/*<Row>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <FeelingsBar fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                         setSelectedOption1={setSelectedOption1}*/
}
{/*                         selectedOption2={selectedOption2}*/
}
{/*                         setSelectedOption2={setSelectedOption2}*/
}
{/*                         selectedOption3={selectedOption3}*/
}
{/*                         setSelectedOption3={setSelectedOption3} width={600} height={180}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <TreeImages*/
}
{/*                fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                setSelectedOption1={setSelectedOption1}*/
}
{/*                selectedOption2={selectedOption2}*/
}
{/*                setSelectedOption2={setSelectedOption2}*/
}
{/*                selectedOption3={selectedOption3}*/
}
{/*                setSelectedOption3={setSelectedOption3}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <CommitmentsBar width={700} height={200}*/
}
{/*                            fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                            setSelectedOption1={setSelectedOption1}*/
}
{/*                            selectedOption2={selectedOption2}*/
}
{/*                            setSelectedOption2={setSelectedOption2}*/
}
{/*                            selectedOption3={selectedOption3}*/
}
{/*                            setSelectedOption3={setSelectedOption3}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*</Row>*/
}