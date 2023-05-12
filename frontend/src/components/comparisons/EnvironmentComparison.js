import React, {useState} from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {getValueAttributeOnlyGroup, getValueAttributeUserGroup} from "./AllowsMeToComparison";


const EnvironmentalComparison = ({
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
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={difficultyLabel}
                                        rightLabel={difficultylabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={difficultyValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison data={data} width={700} height={250} squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={currentContributionValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={restrionctionLabel}
                                        rightLabel={rrestrictionlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={restrictionValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={allowMeToLabel}
                                        rightLabel={allowMeTolabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={allowMeToValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <h1 className="text-center mb-4">Vergleiche darüber <br/>wie das Umfeld reagiert</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={sustainableDevelopmentLabel}
                                        rightLabel={sustainableDevelopmentlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={sustainableDevelopmentValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EnvironmentalComparison;
