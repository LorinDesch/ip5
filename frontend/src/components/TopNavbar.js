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

    const dropDownStyling = {
        padding: '12px 38px 12px 12px',
        border: '2px solid black',
        borderRadius: '4px',
        backgroundColor: '#fff',
        appearance: 'none',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        cursor: 'pointer',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath fill=\'%23000000\' fill-rule=\'evenodd\' d=\'M5 6L0 .666666667 1.11111111 0l3.88888889 3.666666667L8.88888889 0 10 .666666667\'/%3E%3C/svg%3E")',
        backgroundPosition: 'right 10px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 30%', // Adjust the size of the arrow here
    };

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
                    <Dropdown1 selectedOption={selectedOption1} handleChange={handleChange1} styling={dropDownStyling}/>
                </div>
                <div style={{gridColumn: '2', justifySelf: 'center', marginLeft: '2rem'}}>
                    <Dropdown2 selectedOption={selectedOption2} handleChange={handleChange2} styling = {dropDownStyling} />
                </div>
                <div style={{gridColumn: '3', justifySelf: 'end', marginRight: '2rem'}}>
                    <ToggleSwitch leftText="Fake Data" rightText="Real Data" isOn={isOn} handleToggle={handleToggle}
                                  style={{marginRight: '1rem'}}/>
                </div>
                <div style={{gridColumn: '4', justifySelf: 'end', marginRight: '0.5rem'}}>
                    <Dropdown3 options={options3} selectedOptions={selectedOption3} onChange={handleChange3}  styling = {dropDownStyling} />
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