import React, { useState } from 'react';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import ToggleSwitch from "./ToggleSwitch";
import Login from "./Login";

function Dashboard() {
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [isOn, setIsOn] = useState(false);

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
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid black',
                paddingBottom: '1rem'
            }}>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}>
                    <Dropdown1 selectedOption={selectedOption1} handleChange={handleChange1}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '1rem'}}>
                    <Dropdown2 selectedOption={selectedOption2} handleChange={handleChange2}/>
                </div>
                <ToggleSwitch leftText="Fake Data" rightText="Real Data" isOn={isOn} handleToggle={handleToggle} />
                <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                    <Dropdown3 options={options3} selectedOptions={selectedOption3} onChange={handleChange3}/>
                </div>
            </div>
            {isOn && <Login />}
        </div>
    );
}

export default Dashboard;
