import React, {useEffect, useRef, useState} from 'react';
import TreeImages from "./TreeImages";
import CommitmentsBar from "./Charts/CommitmentsBar";
import FeelingsBar from "./Charts/FeelingsBar";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
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
            <div style={{marginLeft: "100px"}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
            </div>
            <SideNavbar/>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '700px 500px 700px',
                gridTemplateRows: '400px 400px',
                // gridGap: '1rem',
                alignItems: 'center',


                justifyItems: 'center',
                marginLeft: "85px", // adjust the marginLeft value to make space for the Navbar
                // marginTop: "50px"
            }}>
                <div style={{justifySelf: 'center', transform: 'scale(0.7)'}}>
                    <SchluesseAusChallenge data={data}/>
                </div>

                <div>
                    { /* empty div for grid layout */}
                </div>

                <div style={{gridColumn: '2', gridRow: '2', justifySelf: 'center', transform: 'scale(1)', marginBottom: '260px'}}>
                    <TreeImages leftIndex="28" rightIndex="28" isOn={isOn}/>
                </div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)'}}>
                    <SchluesseAusChallenge data={data}/>
                </div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)', marginTop: '400px'}}>
                    <FeelingsBar data={data} width={800} height={400}/>
                </div>

                <div style={{justifySelf: 'center', transform: 'scale(0.7)', marginTop: '400px'}}>
                    <CommitmentsBar data={data} width={800} height={400}/>
                </div>
            </div>

        </div>
    );


}

export default Dashboard;
