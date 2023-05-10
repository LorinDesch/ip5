import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";


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

    data = [200, 30, 160, 50, 300, 400];

    const difficultyLabel = "Schwierigkeit"
    const difficultylabelLeft = ["Leicht", "Mittel", "Schwer"] //FLIPPED

    const restrionctionLabel = "Einschränkung"
    const rrestrictionlabelLeft = ["Befreit", "Mittel", "Viel"] //FLIPPED

    const environeLabel = "Umfeldreaktion"
    const environmentlabelLeft = ["positiv", "neutral", "negativ"] //FLIPPED

    const currentContributionLabel = "Beitrag"
    const currentContributionlabelLeft = ["Gering", "Mittel", "Hoch"]

    const allowMeToLabel = "Übernehme"
    const allowMeTolabelLeft = ["Verantwortung", "Beides", "Erwartungen"]

    const sustainableDevelopmentLabel = "Entwicklung"
    const sustainableDevelopmentlabelLeft = ["Wenig", "Mittel", "Viel"] //FLIPPED


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
                            <h1 className="text-center mb-4">Difficulty Comparison</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={difficultyLabel}
                                        leftLabel={difficultylabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={difficultyLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={restrionctionLabel}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={difficultyLabel}
                                        leftLabel={difficultylabelLeft}
                                        squaredLabelRight={allowMeToLabel}/>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={difficultyLabel}
                                        leftLabel={difficultylabelLeft}
                                        squaredLabelRight={environeLabel}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Comparison data={data} width={700} height={250}
                                        squaredLabelLeft={difficultyLabel}
                                        leftLabel={difficultylabelLeft}
                                        squaredLabelRight={sustainableDevelopmentLabel}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DifficultyComparison;
