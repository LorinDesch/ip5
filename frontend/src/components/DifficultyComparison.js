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
                gridGap: '1rem',
                alignItems: 'center',
                justifyItems: 'center',
                marginLeft: '50px',
                marginTop: '150px'
            }}>
                <div style={{gridColumn: '1', gridRow: '1', maxWidth: '70%'}}>
                    <h1>
                        Ein Balkendiagramm ist eine häufig verwendete Grafik, die verwendet wird, um numerische Daten
                        darzustellen und zu vergleichen. Es besteht aus rechteckigen Balken, die senkrecht oder
                        horizontal ausgerichtet sein können und deren Länge proportional zu den Werten der dargestellten
                        Daten ist.</h1>
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


// <Difficulty data={data} width={600} height={400}/>
