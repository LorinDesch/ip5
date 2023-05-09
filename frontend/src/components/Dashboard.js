import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './TopNavbar';
import Navbar from './Navbar';
import SchluesseAusChallenge from './SchluesseAusChallenge';
import TreeImages from './TreeImages';
import FeelingsBar from './Charts/FeelingsBar';
import CommitmentsBar from './Charts/CommitmentsBar';

function Dashboard() {
    const [isOn, setIsOn] = useState(false);
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
        <div>
            <header style={{ marginLeft: '7rem', marginTop: '0.5rem' }}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn} />
            </header>  <div style={{ position: 'fixed', top: '55px', left: 0, bottom: 0, width: '5rem', backgroundColor: '#f8f9fa', zIndex: 1 }}>
            <Navbar />
        </div>

            <Container fluid style={{ maxWidth: '2000px', marginLeft: '7rem', minHeight: '100vh', padding: '0 1rem' }}>
                <Row>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{ height: '100%', marginBottom: '2rem' }}>
                            <SchluesseAusChallenge data={data} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center">

                        </div>
                    </Col>                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center"
                             style={{ height: '100%' }}>
                            <SchluesseAusChallenge data={data} />
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center" style={{ height: '100%' }}>
                            <FeelingsBar data={data} width={400} height={300} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center" style={{ height: '40%' }}>
                            <TreeImages leftIndex="28" rightIndex="20" isOn={isOn} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex justify-content-center align-items-center text-center" style={{ height: '100%', marginRight: '5rem' }}>
                            <CommitmentsBar data={data} width={400} height={300} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;