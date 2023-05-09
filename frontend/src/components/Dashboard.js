import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';

function Dashboard() {
    const [data] = useState([200, 30, 160, 50, 300, 400]);

    useEffect(() => {
        const fakeData = 'fakeData'; //TODO: replace with real data
        // check if fakeData is already stored in sessionStorage
        const storedData = sessionStorage.getItem('fakeData');
        if (!storedData) {
            sessionStorage.setItem('fakeData', JSON.stringify(fakeData));
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ marginLeft: '7rem', marginTop: '0.5rem' }}>
                <TopNavbar />
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

                            <Col md={4} style={{ marginTop: '13.5rem'}}>
                                <div className="d-flex justify-content-center align-items-center text-center" style={{marginRight: '30rem'}}>
                                    <CommitmentsBar data={data} width={700} height={200} />
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            {/*</div>*/}
        </div>
    );
}

export default Dashboard;
