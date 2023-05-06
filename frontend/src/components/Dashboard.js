import React, {useEffect, useRef, useState} from 'react';
import TreeImages from "./TreeImages";
import CommitmentsBar from "./Charts/CommitmentsBar";
import FeelingsBar from "./Charts/FeelingsBar";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";

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

    const handleCheckboxChange = (event, optionValue) => {
        if (event.target.checked) {
            setSelectedClasses([...selectedClasses, optionValue]);
        } else {
            setSelectedClasses(selectedClasses.filter((value) => value !== optionValue));
        }
    };

    return (
        <div>
            <TopNavbar isOn={isOn} setIsOn={setIsOn} />
            <Navbar isOn={isOn} setIsOn={setIsOn} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 2fr',
                gridGap: '1rem',
                marginLeft: "50px",
                marginTop: "50px"
            }}>
                <div>
                    <FeelingsBar data={data} width={800} height={400}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <TreeImages leftIndex="20" rightIndex="28" isOn={isOn}/>
                </div>
                <div>
                    <CommitmentsBar data={data} width={500} height={500}/>
                </div>
            </div>

        </div>
    );

}

export default Dashboard;
