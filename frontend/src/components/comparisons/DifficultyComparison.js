import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavbar from '../TopNavbar';
import ComparisonBar from "../Charts/ComparisonBar";
import SideNavbar from "../SideNavbar";
import './comparisons.css'

/**
 * Component for rendering the DifficultyComparison subsite.
 */
const DifficultyComparison = (props) => {
    return (
        <>
            <header >
                <TopNavbar fakeData={props.fakeData} selectedOption1={props.selectedOption1}
                           setSelectedOption1={props.setSelectedOption1}
                           selectedOption2={props.selectedOption2}
                           setSelectedOption2={props.setSelectedOption2}
                           selectedOption3={props.selectedOption3}
                           setSelectedOption3={props.setSelectedOption3}/>
            </header>
            <div style={{
                position: 'fixed',
                top: '55px',
                left: 0,
                bottom: 0,
                width: '5rem',
                backgroundColor: 'rgba(255,255,255,0)',
                zIndex: 1
            }}>
                <SideNavbar/>
            </div>
            <Container fluid className="mt-4">
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col  md={6}>
                        <div className="difficultyText">
                            <h1 className="text-center mb-1">Vergleiche wie schwer <br/>das Commitment war</h1>
                            <p style={{margin: '0.2rem'}}>Schwierigkeit: Wie schwer war das Commitment?</p>
                            <p style={{margin: '0.2rem'}}>Einschränkung: Wie stark hat dich das Commitment
                                eingeschränkt?</p>
                            <p style={{margin: '0.2rem'}}>Umfeldreaktion: Wie hat dein Umfeld auf das Commitment
                                reagiert?</p>
                            <p style={{margin: '0.2rem'}}>Beitrag: Wie viel hast du zum Commitment beigetragen?</p>
                            <p style={{margin: '0.2rem'}}>Übernehme: Ermöglicht dir das Commitment Verantwortung zu
                                übernehmen oder Erwartungen nachzukommen? </p>
                            <p style={{margin: '0.2rem'}}>Entwicklung: Wie sehr hat sich das Commitment auf dich
                                ausgewirkt?</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="difficultFirst" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar
                                width={window.innerWidth <= 768 ? 300 : 700}
                                height={window.innerWidth <= 768 ? 180 : 250}
                                // width={700} height={250}
                                        squaredLabelLeft={props.difficultyLabel}
                                        leftLabel={props.difficultylabelLeft}
                                        squaredLabelRight={props.currentContributionLabel}
                                        rightLabel={props.currentContributionlabelLeft}
                                        difficultyValueRightBar={props.currentContributionValue}
                                        difficultyValueLeftBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div className="difficultSecond" style={{marginLeft: '5rem'}}>
                            <ComparisonBar
                                        width={window.innerWidth <= 768 ? 300 : 700}
                                        height={window.innerWidth <= 768 ? 180 : 250}
                                // width={700} height={250}
                                        squaredLabelLeft={props.difficultyLabel}
                                        leftLabel={props.difficultylabelLeft}
                                        squaredLabelRight={props.restrionctionLabel}
                                        rightLabel={props.rrestrictionlabelLeft}
                                        difficultyValueRightBar={props.restrictionValue}
                                        difficultyValueLeftBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="difficultThird" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar
                                        width={window.innerWidth <= 768 ? 300 : 700}
                                        height={window.innerWidth <= 768 ? 180 : 250}                                // width={700} height={250}
                                        squaredLabelLeft={props.difficultyLabel}
                                        leftLabel={props.difficultylabelLeft}
                                        squaredLabelRight={props.allowMeToLabel}
                                        rightLabel={props.allowMeTolabelLeft}
                                        difficultyValueRightBar={props.allowMeToValue}
                                        difficultyValueLeftBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div className="difficultFourth" style={{marginLeft: '5rem'}}>
                            <ComparisonBar
                                        width={window.innerWidth <= 768 ? 300 : 700}
                                        height={window.innerWidth <= 768 ? 180 : 250}
                                // width={700} height={250}
                                        squaredLabelLeft={props.difficultyLabel}
                                        leftLabel={props.difficultylabelLeft}
                                        squaredLabelRight={props.environeLabel}
                                        rightLabel={props.environmentlabelLeft}
                                        difficultyValueRightBar={props.environmentValue}
                                        difficultyValueLeftBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="difficultFifth" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar
                                        width={window.innerWidth <= 768 ? 300 : 700}
                                        height={window.innerWidth <= 768 ? 180 : 250}
                                // width={700} height={250}
                                        squaredLabelLeft={props.difficultyLabel}
                                        leftLabel={props.difficultylabelLeft}
                                        squaredLabelRight={props.sustainableDevelopmentLabel}
                                        rightLabel={props.sustainableDevelopmentlabelLeft}
                                        difficultyValueRightBar={props.sustainableDevelopmentValue}
                                        difficultyValueLeftBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DifficultyComparison;
