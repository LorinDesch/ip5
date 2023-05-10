import React from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

export function getValueAttributeUserGroup(attribute, selectedOption1, selectedOption2, fakeData) {
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


export function getValueAttributeOnlyGroup(attribute, selectedOption3, fakeData, selectedOption2) {
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


const AllowMeToComparison = ({
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
    const difficultyValueRightBar = getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2)
    const difficultyValueLeftBar = Array(difficultyValueRightBar.length).fill(getValueAttributeUserGroup("difficulty", selectedOption1, selectedOption2, fakeData));


    const restrionctionLabel = "Einschränkung"
    const rrestrictionlabelLeft = ["Befreit", "Mittel", "Viel"] //FLIPPED
    const restrictionValueRightBar = getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2)
    const restrictionValueLeftBar = Array(restrictionValueRightBar.length).fill(getValueAttributeUserGroup("restriction", selectedOption1, selectedOption2, fakeData));

    const environeLabel = "Umfeldreaktion"
    const environmentlabelLeft = ["positiv", "neutral", "negativ"] //FLIPPED
    const environmentValueRightBar = getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2)
    const environmentValueLeftBar = Array(environmentValueRightBar.length).fill(getValueAttributeUserGroup("environment", selectedOption1, selectedOption2, fakeData));

    const currentContributionLabel = "Beitrag"
    const currentContributionlabelLeft = ["Gering", "Mittel", "Hoch"]
    const currentContributionValueRightBar = getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2)
    const currentContributionValueLeftBar = Array(currentContributionValueRightBar.length).fill(getValueAttributeUserGroup("currentContribution", selectedOption1, selectedOption2, fakeData));

    const allowMeToLabel = "Übernehme"
    const allowMeTolabelLeft = ["Verantwortung", "Beides", "Erwartungen"]
    const allowMeToValueRightBar = getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2)
    const allowMeToValueLeftBar = Array(allowMeToValueRightBar.length).fill(getValueAttributeUserGroup("allowsMeTo", selectedOption1, selectedOption2, fakeData));

    const sustainableDevelopmentLabel = "Entwicklung"
    const sustainableDevelopmentlabelLeft = ["Wenig", "Mittel", "Viel"] //FLIPPED
    const sustainableDevelopmentValueRightBar = getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2)
    const sustainableDevelopmentValueLeftBar = Array(sustainableDevelopmentValueRightBar.length).fill(getValueAttributeUserGroup("sustainableDevelopment", selectedOption1, selectedOption2, fakeData));


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
                                        rightLabel={difficultylabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={difficultyValueRightBar}
                                        selectedOption3={selectedOption3}
                            />

                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={currentContributionValueRightBar}
                                        selectedOption3={selectedOption3}
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
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={restrictionValueRightBar}
                                        selectedOption3={selectedOption3}
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
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={environmentValueRightBar}
                                        selectedOption3={selectedOption3}
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
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={sustainableDevelopmentValueRightBar}
                                        selectedOption3={selectedOption3}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AllowMeToComparison;
