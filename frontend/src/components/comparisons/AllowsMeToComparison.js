import React from 'react';
import TopNavbar from '../TopNavbar';
import Comparison from "../Charts/Comparison";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

/**
 * Retrieves the second difficulty value for each group in the selectedOption3 array,
 * based on the provided attribute, selectedOption2, and fakeData.
 * If a valid commitment ID is found for selectedOption2, the function searches for the group.userIds
 * in fakeData and returns an array of second difficulty values for each group.
 * If no valid commitment ID is found, an array of zeros is returned.
 *
 * @param {string} attribute - The attribute to retrieve from the diary data.
 * @param {string[]} selectedOption3 - An array of group names.
 * @param {Object} fakeData - The fake data object containing commitments, groups, and diary data.
 * @param {string} selectedOption2 - The selected option 2 value.
 * @returns {number[]} - An array of second difficulty values for each group, or an array of zeros.
 */
export function getValueAttributeOnlyGroup(attribute, selectedOption3, fakeData, selectedOption2) {
    const cId = fakeData.commitments.find(commitment => commitment.commitmentname === selectedOption2)?.commitmentid;
    const zeros = [];
    if (cId > 0) {
        //for each selectedOption3 find the group.userIds and get the second difficulty value for each group
        const selectedGroupsDifficulties = selectedOption3.flatMap(groupName => fakeData.groups.find(group => group.groupname === groupName) || [])
            .map(group => group.users.flatMap(userId => {
                const diary = fakeData.diary.find(diary => diary.userid === userId && diary.commitmentid === cId);
                return diary ? diary[attribute][1] : [];
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


/**
 * Retrieves the value of a specific attribute for a selected user and group.
 *
 * @param {string} attribute - The attribute to retrieve the value for.
 * @param {string} selectedOption1 - The selected user.
 * @param {string} selectedOption2 - The selected commitment.
 * @param {Object} fakeData - The fake data object.
 * @returns {number[]} The value of the attribute for the selected user and group.
 */
const AllowMeToComparison = ({
                                 width,
                                 height,
                                 fakeData,
                                 selectedOption1,
                                 selectedOption3,
                                 selectedOption2,
                                 setSelectedOption1,
                                 setSelectedOption2,
                                 setSelectedOption3,
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
                        <div style={{marginLeft: '10rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={difficultyLabel}
                                        rightLabel={difficultylabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={difficultyValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />

                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={currentContributionLabel}
                                        rightLabel={currentContributionlabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
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
                        <div style={{marginLeft: '10rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={restrionctionLabel}
                                        rightLabel={rrestrictionlabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={restrictionValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
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
                        <div style={{marginLeft: '10rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={environeLabel}
                                        rightLabel={environmentlabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
                                        difficultyValueRightBar={environmentValueRightBar}
                                        selectedOption3={selectedOption3}
                                        selectedOption2={selectedOption2}
                                        selectedOption1={selectedOption1}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Comparison width={700} height={250}
                                        squaredLabelLeft={allowMeToLabel}
                                        leftLabel={allowMeTolabelLeft}
                                        squaredLabelRight={sustainableDevelopmentLabel}
                                        rightLabel={sustainableDevelopmentlabelLeft}
                                        difficultyValueLeftBar={allowMeToValueLeftBar}
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

export default AllowMeToComparison;
