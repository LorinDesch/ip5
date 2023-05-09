import React, {useState} from 'react';
import TopNavbar from '../TopNavbar';
import Difficulty from "../Charts/Difficulty";
import SideNavbar from "../SideNavbar";
import {Col, Container, Row} from "react-bootstrap";

const DifficultyComparison = ({data}) => {

    data = [200, 30, 160, 50, 300, 400];

    return (
        <>
            <header style={{marginLeft: '7rem', marginTop: '0.5rem'}}>
                <TopNavbar />
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
                            <h1 className="text-center mb-4">Restriction Comparison</h1>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Difficulty data={data} width={700} height={250}/>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Difficulty data={data} width={700} height={250}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Difficulty data={data} width={700} height={250}/>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mb-4 align-items-center" style={{marginTop: '3rem', marginBottom: '5rem'}}>
                    <Col md={6}>
                        <div style={{marginLeft: '5rem'}}>
                            <Difficulty data={data} width={700} height={250}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{marginLeft: '3rem'}}>
                            <Difficulty data={data} width={700} height={250}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DifficultyComparison;
