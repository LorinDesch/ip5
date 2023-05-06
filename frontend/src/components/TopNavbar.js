import {useState} from "react";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import ToggleSwitch from "./ToggleSwitch";
import Dropdown3 from "./Dropdown3";
import React from "react";
import Login from "./Login";

const TopNavbar = ({ isOn, setIsOn }) => { // Receive isOn and setIsOn as props
    const [selectedOption1, setSelectedOption1] = useState('Ich');
    const [selectedOption2, setSelectedOption2] = useState('Challenge');
    const [selectedOption3, setSelectedOption3] = useState([]);

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
                <div style={{gridColumn: '2', justifySelf: 'center', marginLeft: "12rem"}}>
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
        </div>
    );
}
export default TopNavbar;