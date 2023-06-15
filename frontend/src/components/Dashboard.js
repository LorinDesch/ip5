import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';
import './style.css';
import {getSchluesseSelectedDropdown1, getSchluesseSelectedDropdown3} from "./helperFunctions/HelperFunctions";


/**
 * Dashboard component that displays various sections and charts.
 *
 */
function Dashboard({
                       fakeData,
                       selectedOption1,
                       selectedOption2,
                       selectedOption3,
                       setSelectedOption3,
                       setSelectedOption1,
                       setSelectedOption2
                   }) {


    const schluesseSelectedDropdown1 = getSchluesseSelectedDropdown1(selectedOption1, selectedOption2, fakeData);
    const schluesseSelectedDropdown3 = getSchluesseSelectedDropdown3(selectedOption2, selectedOption3, fakeData);


    return (

        <div>
            <header>
                <TopNavbar fakeData={fakeData} selectedOption1={selectedOption1}
                           setSelectedOption1={setSelectedOption1}
                           selectedOption2={selectedOption2}
                           setSelectedOption2={setSelectedOption2}
                           selectedOption3={selectedOption3}
                           setSelectedOption3={setSelectedOption3}/>
            </header>


            <div>
                <SideNavbar/>
            </div>


            <div>
                <Container fluid>
                    <div>
                        <Row className="justify-content-center">
                            <Col className="spaceBetween" md={4}
                                // style={{backgroundColor: 'red'}}
                            >
                                <Row className="schluesseLinks"
                                    // style={{backgroundColor: 'blue'}}
                                >
                                    <SchluesseAusChallenge schluesse={schluesseSelectedDropdown1}
                                    />
                                </Row>
                                <Row
                                    // style={{backgroundColor: 'darkgray'}}
                                >
                                    <FeelingsBar className="feelingsbar"
                                                 fakeData={fakeData} selectedOption1={selectedOption1}
                                                 setSelectedOption1={setSelectedOption1}
                                                 selectedOption2={selectedOption2}
                                                 setSelectedOption2={setSelectedOption2}
                                                 selectedOption3={selectedOption3}
                                                 setSelectedOption3={setSelectedOption3}
                                                 width={window.innerWidth <= 768 ? 500 : 500}
                                                 height={window.innerWidth <= 768 ? 150 : 180}/>
                                </Row>
                            </Col>
                            <Col md={4}
                                // style={{backgroundColor: 'green'}}
                            >
                                <TreeImages
                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                    setSelectedOption1={setSelectedOption1}
                                    selectedOption2={selectedOption2}
                                    setSelectedOption2={setSelectedOption2}
                                    selectedOption3={selectedOption3}
                                    setSelectedOption3={setSelectedOption3}/>
                            </Col>
                            <Col className="spaceBetween" md={4}
                                // style={{backgroundColor: 'yellow'}}
                            >
                                <Row className="schluesseRechts"
                                    // style={{backgroundColor: 'blue'}}
                                >
                                    <SchluesseAusChallenge  schluesse={schluesseSelectedDropdown3}/>
                                </Row>
                                <Row className="commitmentsbar"
                                    // style={{backgroundColor: 'darkgray'}}
                                >
                                    <CommitmentsBar
                                        // className="commitmentsbar"
                                                    width={window.innerWidth <= 768 ? 400 : 600}
                                                    height={window.innerWidth <= 768 ? 180 : 200}
                                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                                    setSelectedOption1={setSelectedOption1}
                                                    selectedOption2={selectedOption2}
                                                    setSelectedOption2={setSelectedOption2}
                                                    selectedOption3={selectedOption3}
                                                    setSelectedOption3={setSelectedOption3}/>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
{/*</div>*/
}


{/*<Row>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <div>*/
}
{/*                <SchluesseAusChallenge schluesse={schluesseSelectedDropdown1}/>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}

{/*    <Col md={4}>*/
}
{/*        <div>*/
}

{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <div style={{height: '300px'}}>*/
}
{/*                <SchluesseAusChallenge schluesse={schluesseSelectedDropdown3}/>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}

{/*</Row>*/
}

{/*<Row>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <FeelingsBar fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                         setSelectedOption1={setSelectedOption1}*/
}
{/*                         selectedOption2={selectedOption2}*/
}
{/*                         setSelectedOption2={setSelectedOption2}*/
}
{/*                         selectedOption3={selectedOption3}*/
}
{/*                         setSelectedOption3={setSelectedOption3} width={600} height={180}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <TreeImages*/
}
{/*                fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                setSelectedOption1={setSelectedOption1}*/
}
{/*                selectedOption2={selectedOption2}*/
}
{/*                setSelectedOption2={setSelectedOption2}*/
}
{/*                selectedOption3={selectedOption3}*/
}
{/*                setSelectedOption3={setSelectedOption3}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*    <Col md={4}>*/
}
{/*        <div>*/
}
{/*            <CommitmentsBar width={700} height={200}*/
}
{/*                            fakeData={fakeData} selectedOption1={selectedOption1}*/
}
{/*                            setSelectedOption1={setSelectedOption1}*/
}
{/*                            selectedOption2={selectedOption2}*/
}
{/*                            setSelectedOption2={setSelectedOption2}*/
}
{/*                            selectedOption3={selectedOption3}*/
}
{/*                            setSelectedOption3={setSelectedOption3}/>*/
}
{/*        </div>*/
}
{/*    </Col>*/
}
{/*</Row>*/
}