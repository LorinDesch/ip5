import React from 'react';
import TopNavbar from '../TopNavbar';
import ComparisonBar from "../Charts/ComparisonBar";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

/**
 * Component for rendering the AllowMeToComparison subsite.
 */
const AllowMeToComparison = (props) => {
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
                        <div className="allowsMeFirst" style={{marginLeft: '10rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.allowMeToLabel}
                                           leftLabel={props.allowMeTolabelLeft}
                                           squaredLabelRight={props.difficultyLabel}
                                           rightLabel={props.difficultylabelLeft}
                                           difficultyValueLeftBar={props.allowMeToValue}
                                           difficultyValueRightBar={props.difficultyValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="allowsMeSecond" style={{marginLeft: '5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.allowMeToLabel}
                                           leftLabel={props.allowMeTolabelLeft}
                                           squaredLabelRight={props.currentContributionLabel}
                                           rightLabel={props.currentContributionlabelLeft}
                                           difficultyValueLeftBar={props.allowMeToValue}
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
                        <div className="allowsMeThird" style={{marginLeft: '10rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.allowMeToLabel}
                                           leftLabel={props.allowMeTolabelLeft}
                                           squaredLabelRight={props.restrionctionLabel}
                                           rightLabel={props.rrestrictionlabelLeft}
                                           difficultyValueLeftBar={props.allowMeToValue}
                                           difficultyValueRightBar={props.restrictionValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="allowsMeText">
                            <h1 className="text-center mb-1">Vergleiche darüber ob der Nutzer<br/>Verantwortung
                                übernehmen kann<br/> oder Erwartungen nachkommt</h1>
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
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div className="allowsMeFourth" style={{marginLeft: '10rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.allowMeToLabel}
                                           leftLabel={props.allowMeTolabelLeft}
                                           squaredLabelRight={props.environeLabel}
                                           rightLabel={props.environmentlabelLeft}
                                           difficultyValueLeftBar={props.allowMeToValue}
                                           difficultyValueRightBar={props.environmentValue}
                                           selectedOption3={props.selectedOption3}
                                           selectedOption2={props.selectedOption2}
                                           selectedOption1={props.selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="allowsMeFifth" style={{marginLeft: '5rem'}}>
                            <ComparisonBar width={window.innerWidth <= 768 ? 300 : 700}
                                           height={window.innerWidth <= 768 ? 180 : 250}
                                           squaredLabelLeft={props.allowMeToLabel}
                                           leftLabel={props.allowMeTolabelLeft}
                                           squaredLabelRight={props.sustainableDevelopmentLabel}
                                           rightLabel={props.sustainableDevelopmentlabelLeft}
                                           difficultyValueLeftBar={props.allowMeToValue}
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

export default AllowMeToComparison;
