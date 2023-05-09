import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';

function Dashboard({
                       fakeData,
                       selectedOption1,
                       selectedOption2,
                       selectedOption3,
                       setSelectedOption3,
                       setSelectedOption1,
                       setSelectedOption2
                   }) {

    const [data] = useState([200, 30, 160, 50, 300, 400]);

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ marginLeft: '7rem', marginTop: '0.5rem' }}>
                <TopNavbar fakeData={fakeData} selectedOption1={selectedOption1}
                           setSelectedOption1={setSelectedOption1}
                           selectedOption2={selectedOption2}
                           setSelectedOption2={setSelectedOption2}
                           selectedOption3={selectedOption3}
                           setSelectedOption3={setSelectedOption3}/>
            </header>
                <div style={{ position: 'fixed', top: '55px', left: 0, bottom: 0, width: '5rem', backgroundColor: '#f8f9fa', zIndex: 1 }}>
                    <SideNavbar />
                </div>


                <div style={{ flex: '1', overflowY: 'auto', overflowX: 'auto' }}>
                    <Container fluid style={{ maxWidth: '2000px', marginLeft: '7rem'}}>
                        <Row>
                            <Col md={4}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginRight: '12rem'}}>
                                    <SchluesseAusChallenge data={data} />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="d-flex justify-content-center align-items-center text-center">

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginRight: '4rem'}}>
                                    <SchluesseAusChallenge data={data} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} style={{ marginTop: '14.4rem' }}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginLeft: '12rem'}}>
                                    <FeelingsBar fakeData={fakeData} selectedOption1={selectedOption1}
                                                 setSelectedOption1={setSelectedOption1}
                                                 selectedOption2={selectedOption2}
                                                 setSelectedOption2={setSelectedOption2}
                                                 selectedOption3={selectedOption3}
                                                 setSelectedOption3={setSelectedOption3} width={600} height={180}/>
                                </div>
                            </Col>
                            <Col md={4} style={{marginBottom: '6rem'}}>
                                <div className="d-flex justify-content-center align-items-center text-center"
                                     style={{height: '1%', transform: 'scale(0.95)', marginRight: '11rem', marginTop: '-1rem'}}>
                                    <TreeImages
                                        fakeData={fakeData} selectedOption1={selectedOption1}
                                        setSelectedOption1={setSelectedOption1}
                                        selectedOption2={selectedOption2}
                                        setSelectedOption2={setSelectedOption2}
                                        selectedOption3={selectedOption3}
                                        setSelectedOption3={setSelectedOption3}/>
                                </div>
                            </Col>
                            <Col md={4} style={{ marginTop: '13.5rem'}}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginRight: '30rem'}}>
                                    <CommitmentsBar data={data} width={700} height={200}
                                                    fakeData={fakeData} selectedOption1={selectedOption1}
                                                    setSelectedOption1={setSelectedOption1}
                                                    selectedOption2={selectedOption2}
                                                    setSelectedOption2={setSelectedOption2}
                                                    selectedOption3={selectedOption3}
                                                    setSelectedOption3={setSelectedOption3}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </div>
    );
}

export default Dashboard;
