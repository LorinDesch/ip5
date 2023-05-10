import React from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

function getValueAttributeUserGroup(attribute, selectedOption1, selectedOption2, fakeData) {
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
    let difficulty = 0;
    if (cId > 0) {
        const uId = fakeData.users.find(user => user.username === selectedOption1)?.userid;
        if (uId !== undefined) {
            difficulty = fakeData.diary.find(diary => diary.userid === uId && diary.commitmentid === cId)?.[attribute]?.[1] || 0;
        } else {
            let groupOfUsers = fakeData.groups.find(group => group.groupname === selectedOption1)?.users || [];
            let totalDifficulty = groupOfUsers.reduce((acc, userId) => {
                const userDiary = fakeData.diary.find(diary => diary.userid === userId && diary.commitmentid === cId);
                return userDiary ? acc + userDiary[attribute][1] : acc;
            }, 0);
            difficulty = groupOfUsers.length ? totalDifficulty / groupOfUsers.length : 0;
        }
    }
    return difficulty;
}


function getValueAttributeOnlyGroup(attribute, selectedOption3, fakeData, selectedOption2) {
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
    const zeros = Array(selectedOption3.length).fill(0);
    if (cId > 0) {
        //for each selectedOption3 find the group.userIds and get the second difficulty value for each group
        const selectedGroupsDifficulties = selectedOption3.flatMap(groupName => fakeData.groups.find(group => group.groupname === groupName) || [])
            .map(group => group.users.flatMap(userId => {
                const diary = fakeData.diary.find(diary => diary.userid === userId && diary.commitmentid === cId);
                return diary ? diary.difficulty[1] : [0];
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


const DifficultyComparison = ({
                                  data,
                                  width,
                                  height,
                                  fakeData,
                                  selectedOption1,
                                  selectedOption3,
                                  selectedOption2,
                                  setSelectedOption1,
                                  setSelectedOption2,
                                  setSelectedOption3
                              }) => {

    const difficultyLabel = "Schwierigkeit"
    const difficultylabelLeft = ["Leicht", "Mittel", "Schwer"] //FLIPPED
    const difficultyValueLeftBar = getValueAttributeUserGroup("difficulty", selectedOption1, selectedOption2, fakeData)
    const difficultyValueRightBar = getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2)
    console.log(difficultyValueRightBar)

    const restrionctionLabel = "Einschränkung"
    const rrestrictionlabelLeft = ["Befreit", "Mittel", "Viel"] //FLIPPED
    const restrictionValueLeftBar = getValueAttributeUserGroup("restriction", selectedOption1, selectedOption2, fakeData)

    const environeLabel = "Umfeldreaktion"
    const environmentlabelLeft = ["positiv", "neutral", "negativ"] //FLIPPED
    const environmentValueLeftBar = getValueAttributeUserGroup("environment", selectedOption1, selectedOption2, fakeData)

    const currentContributionLabel = "Beitrag"
    const currentContributionlabelLeft = ["Gering", "Mittel", "Hoch"]
    const currentContributionValueLeftBar = getValueAttributeUserGroup("currentContribution", selectedOption1, selectedOption2, fakeData)

    const allowMeToLabel = "Übernehme"
    const allowMeTolabelLeft = ["Verantwortung", "Beides", "Erwartungen"]
    const allowMeToValueLeftBar = getValueAttributeUserGroup("allowsMeTo", selectedOption1, selectedOption2, fakeData)

    const sustainableDevelopmentLabel = "Entwicklung"
    const sustainableDevelopmentlabelLeft = ["Wenig", "Mittel", "Viel"] //FLIPPED
    const sustainableDevelopmentValueLeftBar = getValueAttributeUserGroup("sustainableDevelopment", selectedOption1, selectedOption2, fakeData)


    data = [200, 30, 160, 50, 300, 400];

    return (
        <>
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

            <Container fluid className="mt-4">
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={difficultyLabel}
                                        rightLabel={difficultylabelLeft}/>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={restrionctionLabel}
                                        rightLabel={rrestrictionlabelLeft}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <h1 className="text-center mb-4">Allows Me To Comparison</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={environeLabel}
                                        rightLabel={environmentlabelLeft}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={sustainableDevelopmentLabel}
                                        rightLabel={sustainableDevelopmentlabelLeft}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DifficultyComparison;
