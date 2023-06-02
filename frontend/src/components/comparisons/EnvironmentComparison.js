import React, {useState} from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {getValueAttributeOnlyGroup} from "./AllowsMeToComparison";


/**
 * Component for rendering the EnvironmentalComparison chart.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The EnvironmentalComparison component.
 */
const EnvironmentalComparison = ({
                                     width,
                                     height,
                                     fakeData,
                                     selectedOption1,
                                     selectedOption3,
                                     selectedOption2,
                                     setSelectedOption1,
                                     setSelectedOption2,
                                     setSelectedOption3,

                                     difficultyLabel,
                                     difficultylabelLeft,
                                     difficultyValueRightBar,
                                     difficultyValueLeftBar,
                                     restrionctionLabel,
                                     rrestrictionlabelLeft,
                                     restrictionValueRightBar,
                                     restrictionValueLeftBar,
                                     environeLabel,
                                     environmentlabelLeft,
                                     environmentValueRightBar,
                                     environmentValueLeftBar,
                                     currentContributionLabel,
                                     currentContributionlabelLeft,
                                     currentContributionValueRightBar,
                                     currentContributionValueLeftBar,
                                     allowMeToLabel,
                                     allowMeTolabelLeft,
                                     allowMeToValueRightBar,
                                     allowMeToValueLeftBar,
                                     sustainableDevelopmentLabel,
                                     sustainableDevelopmentlabelLeft,
                                     sustainableDevelopmentValueRightBar,
                                     sustainableDevelopmentValueLeftBar,
                                 }) => {

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
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={difficultyLabel}
                                        rightLabel={difficultylabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={difficultyValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250} squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={currentContributionValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={restrionctionLabel}
                                        rightLabel={rrestrictionlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={restrictionValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={allowMeToLabel}
                                        rightLabel={allowMeTolabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={allowMeToValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
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
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={environeLabel}
                                        leftLabel={environmentlabelLeft}
                                        squaredLabelRight={sustainableDevelopmentLabel}
                                        rightLabel={sustainableDevelopmentlabelLeft}
                                        difficultyValueLeftBar={environmentValueLeftBar}
                                        difficultyValueRightBar={sustainableDevelopmentValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EnvironmentalComparison;
