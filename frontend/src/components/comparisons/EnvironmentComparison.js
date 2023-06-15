import React from 'react';
import TopNavbar from '../TopNavbar';
import ComparisonBar from "../Charts/ComparisonBar";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

/**
 * Component for rendering the EnvironmentalComparison subsite.
 */
const EnvironmentalComparison = (props) => {
    return (
        <>
            <header>
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
                    <Col md={6}>
                        <div className="environmentFirst" style={{marginLeft: '5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.environeLabel}
                                           leftLabel={props.environmentlabelLeft}
                                           squaredLabelRight={props.difficultyLabel}
                                           rightLabel={props.difficultylabelLeft}
                                           difficultyValueLeftBar={props.environmentValue}
                                           difficultyValueRightBar={props.difficultyValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="environmentSecond" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.environeLabel}
                                           leftLabel={props.environmentlabelLeft}
                                           squaredLabelRight={props.currentContributionLabel}
                                           rightLabel={props.currentContributionlabelLeft}
                                           difficultyValueLeftBar={props.environmentValue}
                                           difficultyValueRightBar={props.currentContributionValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div className="environmentThird" style={{marginLeft: '5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.environeLabel}
                                           leftLabel={props.environmentlabelLeft}
                                           squaredLabelRight={props.restrionctionLabel}
                                           rightLabel={props.rrestrictionlabelLeft}
                                           difficultyValueLeftBar={props.environmentValue}
                                           difficultyValueRightBar={props.restrictionValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="environmentFourth" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.environeLabel}
                                           leftLabel={props.environmentlabelLeft}
                                           squaredLabelRight={props.allowMeToLabel}
                                           rightLabel={props.allowMeTolabelLeft}
                                           difficultyValueLeftBar={props.environmentValue}
                                           difficultyValueRightBar={props.allowMeToValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div className="environmentText">
                            <h1 className="text-center mb-1">Vergleiche darüber <br/>wie das Umfeld auf das
                                Commitment <br/> reagiert das</h1>
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
                        <div className="environmentFifth" style={{marginLeft: '-1.5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.environeLabel}
                                           leftLabel={props.environmentlabelLeft}
                                           squaredLabelRight={props.sustainableDevelopmentLabel}
                                           rightLabel={props.sustainableDevelopmentlabelLeft}
                                           difficultyValueLeftBar={props.environmentValue}
                                           difficultyValueRightBar={props.sustainableDevelopmentValue}
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

export default EnvironmentalComparison;
