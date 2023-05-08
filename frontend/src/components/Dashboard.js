import React, {useEffect, useRef, useState} from 'react';
import TreeImages from "./TreeImages";
import CommitmentsBar from "./Charts/CommitmentsBar";
import FeelingsBar from "./Charts/FeelingsBar";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import SchluesseAusChallenge from "./SchluesseAusChallenge";

function Dashboard() {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [isOn, setIsOn] = useState(false);
    const [data] = useState([200, 30, 160, 50, 300, 400]);


    useEffect(() => {

        const fakeData = "fakeData" //TODO: replace with real data

        // check if fakeData is already stored in sessionStorage
        const storedData = sessionStorage.getItem('fakeData');
        if (!storedData) {
            sessionStorage.setItem('fakeData', JSON.stringify(fakeData));
        }
    }, []);

    return (
        <div>
            <div style={{marginLeft: '6vw'}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
            </div>
            <Navbar/>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '35vw 30vw 35vw',
                gridTemplateRows: '30vw 30vw',
                alignItems: 'center',
                justifyItems: 'center',
                marginLeft: '4vw', // adjust the marginLeft value to make space for the Navbar

            }}>
                <div style={{justifySelf: 'center', transform: 'scale(0.7)'}}>
                    <SchluesseAusChallenge data={data}/>
                </div>

                <div>
                    { /* empty div for grid layout */}
                </div>

                <div style={{gridColumn: '2', gridRow: '2', justifySelf: 'center', transform: 'scale(1)', marginBottom: '15.4vw'}}>
                    <TreeImages leftIndex='28' rightIndex='20' isOn={isOn}/>
                </div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)'}}>
                    <SchluesseAusChallenge data={data}/>
                </div>
                <div style={{position: 'fixed', bottom: '0', left: '0', width: '100%', height: '2.1vw', backgroundColor: 'black'}}></div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)', marginTop: '25vw', marginLeft: '6.25vw'}}>
                    <FeelingsBar data={data} width={1000} height={400}/>
                </div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)', marginTop: '25vw'}}>
                    <CommitmentsBar data={data} width={1000} height={400}/>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
