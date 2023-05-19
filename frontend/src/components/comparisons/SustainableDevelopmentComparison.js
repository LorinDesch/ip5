import React, {useState} from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {getValueAttributeOnlyGroup} from "./AllowsMeToComparison";

/**
 * Component for rendering the SustainabilityComparison chart.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The SustainabilityComparison component.
 */
const SustainabilityComparison = ({
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
    const difficultyValueLeftBar = getValueAttributeOnlyGroup("difficulty", selectedOption3, fakeData, selectedOption2)

    const restrionctionLabel = "Einschränkung"
    const rrestrictionlabelLeft = ["Befreit", "Mittel", "Viel"] //FLIPPED
    const restrictionValueRightBar = getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2)
    const restrictionValueLeftBar = getValueAttributeOnlyGroup("restriction", selectedOption3, fakeData, selectedOption2)

    const environeLabel = "Umfeldreaktion"
    const environmentlabelLeft = ["positiv", "neutral", "negativ"] //FLIPPED
    const environmentValueRightBar = getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2)
    const environmentValueLeftBar = getValueAttributeOnlyGroup("environment", selectedOption3, fakeData, selectedOption2)

    const currentContributionLabel = "Beitrag"
    const currentContributionlabelLeft = ["Gering", "Mittel", "Hoch"]
    const currentContributionValueRightBar = getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2)
    const currentContributionValueLeftBar = getValueAttributeOnlyGroup("currentContribution", selectedOption3, fakeData, selectedOption2)
    const allowMeToLabel = "Übernehme"
    const allowMeTolabelLeft = ["Verantwortung", "Beides", "Erwartungen"]
    const allowMeToValueRightBar = getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2)
    const allowMeToValueLeftBar = getValueAttributeOnlyGroup("allowsMeTo", selectedOption3, fakeData, selectedOption2)

    const sustainableDevelopmentLabel = "Entwicklung"
    const sustainableDevelopmentlabelLeft = ["Wenig", "Mittel", "Viel"] //FLIPPED
    const sustainableDevelopmentValueRightBar = getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2)
    const sustainableDevelopmentValueLeftBar = getValueAttributeOnlyGroup("sustainableDevelopment", selectedOption3, fakeData, selectedOption2)


    return (
        <>
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
                <TopNavbar fakeData={fakeData} selectedOption1={selectedOption1}
                           setSelectedOption1={setSelectedOption1}
                           selectedOption2={selectedOption2}
                           setSelectedOption2={setSelectedOption2}
                           selectedOption3={selectedOption3}
                           setSelectedOption3={setSelectedOption3}
                />
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
                                        squaredLabelLeft={sustainableDevelopmentLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={difficultyLabel}
                                        rightLabel={difficultylabelLeft}
                                        difficultyValueRightBar={difficultyValueRightBar}
                                        difficultyValueLeftBar={sustainableDevelopmentValueLeftBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '-1.5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={sustainableDevelopmentLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                                        difficultyValueLeftBar={sustainableDevelopmentValueLeftBar}
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
                                        squaredLabelLeft={sustainableDevelopmentLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={restrionctionLabel}
                                        rightLabel={rrestrictionlabelLeft}
                                        difficultyValueLeftBar={sustainableDevelopmentValueLeftBar}
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
                                        squaredLabelLeft={sustainableDevelopmentLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={allowMeToLabel}
                                        rightLabel={allowMeTolabelLeft}
                                        difficultyValueLeftBar={sustainableDevelopmentValueLeftBar}
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
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={sustainableDevelopmentLabel}
                                        leftLabel={sustainableDevelopmentlabelLeft}
                                        squaredLabelRight={environeLabel}
                                        rightLabel={environmentlabelLeft}
                                        difficultyValueLeftBar={sustainableDevelopmentValueLeftBar}
                                        difficultyValueRightBar={environmentValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <h1 className="text-center mb-1">Vergleiche ob das Commitment<br/> zu einer nachhaltigen Entwicklung beiträgt</h1>
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
            </Container>
        </>
    );
};

export default SustainabilityComparison;
