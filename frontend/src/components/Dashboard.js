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

                const fakeData = {
                    user: "Fake User",
                    inGroup: {
                        "1": "Fake Group 1",
                    },
                    totalGroups: {
                        "1": "Fake Group 1",
                        "2": "Fake Group 2",
                        "3": "Fake Group 3",
                        "4": "Fake Group 4",
                        "5": "Fake Group 5",
                    },
                    selfCommitments: {
                    }
              }


        //const fakeData = "fakeData" //TODO: replace with real data

        // check if fakeData is already stored in sessionStorage
        const storedData = sessionStorage.getItem('fakeData');
        if (!storedData) {
            sessionStorage.setItem('fakeData', JSON.stringify(fakeData));
        }
    }, []);

    const handleCheckboxChange = (event, optionValue) => {
        if (event.target.checked) {
            setSelectedClasses([...selectedClasses, optionValue]);
        } else {
            setSelectedClasses(selectedClasses.filter((value) => value !== optionValue));
        }
    };

    return (
        <div>
            <div style={{marginLeft: "100px"}}>
                <TopNavbar isOn={isOn} setIsOn={setIsOn}/>
            </div>
            <Navbar/>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 2fr',
                gridTemplateRows: 'auto',
                gridGap: '1rem',
                alignItems: 'center',
                marginLeft: "150px", // adjust the marginLeft value to make space for the Navbar
                marginTop: "50px"
            }}>
                <div>
                    <SchluesseAusChallenge data={data}/>
                </div>

                <div style={{justifySelf: 'center'}}>
                    <TreeImages leftIndex="20" rightIndex="28" isOn={isOn}/>
                </div>

                <div>
                    <SchluesseAusChallenge data={data}/>
                </div>

                <div>
                    <FeelingsBar data={data} width={800} height={400}/>
                </div>

                <div>
                    { /* empty div for grid layout */}
                </div>

                <div style={{justifySelf: 'end'}}>
                    <CommitmentsBar data={data} width={800} height={400}/>
                </div>
            </div>

        </div>
    );


}

export default Dashboard;
