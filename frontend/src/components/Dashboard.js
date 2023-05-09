import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
            </header>
            <Navbar/>

            <Container fluid style={{marginLeft: '8rem'}}>
                <Row>
                    <Col md={6}>
                        <div style={{marginTop: '2rem'}}>
                            <SchluesseAusChallenge data={data}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginTop: '2rem'}}>
                            <SchluesseAusChallenge data={data}/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <div style={{marginTop: '5rem'}}>
                            <FeelingsBar data={data} width={1000} height={400}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{marginTop: '2rem', marginBottom: '5rem'}}>
                            <TreeImages leftIndex="28" rightIndex="20" isOn={isOn}/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{marginTop: '5rem'}}>
                            <CommitmentsBar data={data} width={1000} height={400}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
