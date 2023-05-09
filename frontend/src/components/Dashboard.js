import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';

<<<<<<< HEAD


function Dashboard({fakeData, setChangeableFakeData,changeableFakeData}) {
=======
function Dashboard({
                       fakeData,
                       selectedOption1,
                       selectedOption2,
                       selectedOption3,
                       setSelectedOption3,
                       setSelectedOption1,
                       setSelectedOption2
                   }) {
>>>>>>> 7f48f92 (fix)
    const [isOn, setIsOn] = useState(false);
    const [data] = useState([200, 30, 160, 50, 300, 400]);

    return (
<<<<<<< HEAD
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ marginLeft: '7rem', marginTop: '0.5rem' }}>

<TopNavbar isOn={isOn} setIsOn={setIsOn} fakeData={fakeData} setChangeableFakeData={setChangeableFakeData} changeableFakeData={changeableFakeData} />
            </header>

            {/*<div style={{ display: 'flex', flex: '1', overflow: 'hidden' }}>*/}
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
                                    <FeelingsBar data={data} width={600} height={180} />
                                </div>
                            </Col>
                            <Col md={4} style={{marginBottom: '6rem'}}>
                                <div className="d-flex justify-content-center align-items-center text-center"
                                     style={{height: '1%', transform: 'scale(0.95)', marginRight: '11rem', marginTop: '-1rem'}}>
                                    <TreeImages leftIndex="28" rightIndex="28"/>
                                </div>

                            </Col>
=======
        <div>
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

            <Container fluid style={{maxWidth: '2000px', marginLeft: '7rem', minHeight: '100vh', padding: '0 1rem'}}>
                <Row>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{height: '100%', marginBottom: '2rem'}}>
                            <SchluesseAusChallenge data={data}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center">

                        </div>
                    </Col> <Col md={4}>
                    <div className="d-flex justify-content-center align-items-center text-center"
                         style={{height: '100%'}}>
                        <SchluesseAusChallenge data={data}/>
                    </div>
                </Col>
                </Row>
>>>>>>> 7f48f92 (fix)

                            <Col md={4} style={{ marginTop: '13.5rem'}}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginRight: '30rem'}}>
                                    <CommitmentsBar data={data} width={700} height={200} />
                                </div>
                            </Col>

<<<<<<< HEAD
                        </Row>
                    </Container>
                </div>
            {/*</div>*/}
=======
                <Row>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{height: '100%'}}>
                            <FeelingsBar data={data} width={400} height={300}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{height: '40%'}}>
                            <TreeImages leftIndex="28" rightIndex="20" isOn={isOn}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{height: '100%', marginRight: '5rem'}}>
                            <CommitmentsBar data={data} width={400} height={300}/>
                        </div>
                    </Col>
                </Row>
            </Container>
>>>>>>> 7f48f92 (fix)
        </div>
    );
}

export default Dashboard;
