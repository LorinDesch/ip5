import React, {useEffect, useRef, useState} from 'react';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import ToggleSwitch from "./ToggleSwitch";
import Login from "./Login";
import TreeImages from "./TreeImages";
import CommitmentsBar from "./Charts/CommitmentsBar";
import FeelingsBar from "./Charts/FeelingsBar";

function Dashboard() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [isOn, setIsOn] = useState(false);
    const [data] = useState([200, 30, 160, 50, 300, 400]);

    const options3 = Array.from(Array(10), (_, index) => ({
        value: `Klasse ${index + 1}`,
        label: `Klasse ${index + 1}`,
    }));

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleChange3 = (selectedValues) => {
        setSelectedOption3(selectedValues);
    };

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

    const handleToggle = (checked) => {
        setIsOn(checked);
    };

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 2fr 1fr auto',
                alignItems: 'center',
                borderBottom: '1px solid black',
                paddingBottom: '1rem',
                filter: isOn ? 'blur(5px)' : 'none' /* Filter hinzufügen */
            }}>
                <div style={{gridColumn: '1'}}>
                    <Dropdown1 selectedOption={selectedOption1} handleChange={handleChange1}/>
                </div>
                <div style={{gridColumn: '2', justifySelf: 'center'}}>
                    <Dropdown2 selectedOption={selectedOption2} handleChange={handleChange2}/>
                </div>
                <div style={{gridColumn: '3', justifySelf: 'end', marginRight: '2rem'}}>
                    <ToggleSwitch leftText="Fake Data" rightText="Real Data" isOn={isOn} handleToggle={handleToggle}
                                  style={{marginRight: '1rem'}}/>
                </div>
                <div style={{gridColumn: '4', justifySelf: 'end', marginRight: '0.5rem'}}>
                    <Dropdown3 options={options3} selectedOptions={selectedOption3} onChange={handleChange3}/>
                </div>
            </div>
            {isOn && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    //background: 'rgba(255, 255, 255, 0.01)', /* Hintergrund hinzufügen */
                    zIndex: 999 /* Z-Index hinzufügen */
                }}>
                    <Login onClose={() => setIsOn(false)}/>
                </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr', gridGap: '1rem', marginLeft: "50px" }}>
                <div>
                    <FeelingsBar data={data} width={800} height={400} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TreeImages leftIndex="20" rightIndex="28" isOn={isOn} />
                </div>
                <div>
                    <CommitmentsBar data={data} width={500} height={500} />
                </div>
            </div>

        </div>
    );

}

export default Dashboard;
