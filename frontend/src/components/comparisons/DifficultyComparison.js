import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopNavbar from '../TopNavbar';
import Difficulty from "../Charts/Difficulty";
import SideNavbar from "../SideNavbar";

const DifficultyComparison = ({data}) => {
    const [isOn, setIsOn] = useState(false);

    data = [200, 30, 160, 50, 300, 400];

    return (
        <>
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
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
                        <h1 className="text-center mb-4">Difficulty Comparison</h1>
                    </Col>
                    <Col md={6}>
                        <Difficulty data={data} width={700} height={250}/>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <Difficulty data={data} width={700} height={250}/>
                    </Col>
                    <Col md={6}>
                        <Difficulty data={data} width={700} height={250}/>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <Difficulty data={data} width={700} height={250}/>
                    </Col>
                    <Col md={6}>
                        <Difficulty data={data} width={700} height={250}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DifficultyComparison;
