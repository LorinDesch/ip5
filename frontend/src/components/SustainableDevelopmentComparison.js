import React, {useState} from 'react';
import TopNavbar from './TopNavbar';
import Difficulty from "./Charts/Difficulty";
import Navbar from "./Navbar";

const DifficultyComparison = ({data, width, height}) => {
    const [isOn, setIsOn] = useState(false);

    data = [200, 30, 160, 50, 300, 400];

    return (
        <div>
            <div style={{marginLeft: "100px"}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
            </div>
            <Navbar/>

            <div style={{
                display: "grid",
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: '5rem',
                alignItems: 'center',
                justifyItems: 'center',
                marginLeft: '50px',
                marginTop: '70px'
            }}>
                <div style={{gridColumn: '1', gridRow: '1', maxWidth: '70%'}}>
                    <h1>
                        Sustainable Development Comparison</h1>
                </div>
                <div style={{gridColumn: '2', gridRow: '1'}}>
                    <Difficulty data={data} width={600} height={400}/>
                </div>
                <div style={{gridColumn: '1', gridRow: '2'}}>
                    <Difficulty data={data} width={600} height={400}/>
                </div>
                <div style={{gridColumn: '2', gridRow: '2'}}>
                    <Difficulty data={data} width={600} height={400}/>
                </div>
                <div style={{gridColumn: '1', gridRow: '3'}}>
                    <Difficulty data={data} width={600} height={400}/>
                </div>
                <div style={{gridColumn: '2', gridRow: '3'}}>
                    <Difficulty data={data} width={600} height={400}/>
                </div>
            </div>
        </div>
    );
};

export default DifficultyComparison;
