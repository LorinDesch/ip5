import React from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

/**
 * Component for rendering the RestrictionComparison subsite.
 */
const RestrictionComparison = (props) => {
    return (
        <>
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
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
                backgroundColor: '#f8f9fa',
                zIndex: 1
            }}>
                <SideNavbar/>
            </div>

            <Container fluid className="mt-4">
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={props.restrionctionLabel}
                                        leftLabel={props.rrestrictionlabelLeft}
                                        squaredLabelRight={props.difficultyLabel}
                                        rightLabel={props.difficultylabelLeft}
                                        difficultyValueLeftBar={props.restrictionValue}
                                        difficultyValueRightBar={props.difficultyValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={props.restrionctionLabel}
                                        leftLabel={props.rrestrictionlabelLeft}
                                        squaredLabelRight={props.currentContributionLabel}
                                        rightLabel={props.currentContributionlabelLeft}
                                        difficultyValueLeftBar={props.restrictionValue}
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
                        <div style={{marginLeft: '5rem'}}>
                            <h1 className="text-center mb-1">Vergleiche wie sehr <br/>das Commitment eingeschränkt hat
                            </h1>
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
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={props.restrionctionLabel}
                                        leftLabel={props.rrestrictionlabelLeft}
                                        squaredLabelRight={props.allowMeToLabel}
                                        rightLabel={props.allowMeTolabelLeft}
                                        difficultyValueLeftBar={props.restrictionValue}
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
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={props.restrionctionLabel}
                                        leftLabel={props.rrestrictionlabelLeft}
                                        squaredLabelRight={props.environeLabel}
                                        rightLabel={props.environmentlabelLeft}
                                        difficultyValueLeftBar={props.restrictionValue}
                                        difficultyValueRightBar={props.environmentValue}
                                        selectedOption3={props.selectedOption3}
                                        selectedOption2={props.selectedOption2}
                                        selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={props.restrionctionLabel}
                                        leftLabel={props.rrestrictionlabelLeft}
                                        squaredLabelRight={props.sustainableDevelopmentLabel}
                                        rightLabel={props.sustainableDevelopmentlabelLeft}
                                        difficultyValueLeftBar={props.restrictionValue}
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

export default RestrictionComparison;
