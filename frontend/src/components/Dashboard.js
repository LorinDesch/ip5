import React, {useEffect, useRef, useState} from 'react';
import TreeImages from "./TreeImages";
import CommitmentsBar from "./Charts/CommitmentsBar";
import FeelingsBar from "./Charts/FeelingsBar";
import TopNavbar from "./TopNavbar";
import SideNavbar from "./SideNavbar";
import SchluesseAusChallenge from "./SchluesseAusChallenge";

function Dashboard({fakeData, isOn, setIsOn}) {

    return (
        <div>
            <div style={{marginLeft: "100px"}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn} fakeData={fakeData}/>
            </div>
            <SideNavbar/>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 2fr',
                gridTemplateRows: 'auto',
                gridGap: '1rem',
                alignItems: 'center',
                marginLeft: "150px", // adjust the marginLeft value to make space for the SideNavbar
                marginTop: "50px"
            }}>
                <div>
                    <SchluesseAusChallenge data={fakeData}/>
                </div>

                <div style={{justifySelf: 'center'}}>
                    <TreeImages leftIndex="20" rightIndex="28" isOn={isOn}/>
                </div>

                <div>
                    <SchluesseAusChallenge data={fakeData}/>
                </div>

                <div>
                    <FeelingsBar data={fakeData} width={800} height={400}/>
                </div>

                <div>
                    { /* empty div for grid layout */}
                </div>

                <div style={{justifySelf: 'end'}}>
                    <CommitmentsBar data={fakeData} width={800} height={400}/>
                </div>
            </div>

        </div>
    );


}

export default Dashboard;
