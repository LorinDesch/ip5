import {useState} from "react";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import React from "react";
import Login from "./Login";

const TopNavbar = ({fakeData, selectedOption3, selectedOption2, selectedOption1, setSelectedOption1, setSelectedOption2, setSelectedOption3 }) => {
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

    console.log("FakeData: " + fakeData)

    const options3 = fakeData.groups.map((item) => ({
        value: item.groupname,
        label: item.groupname,
    }));

    const options2 = fakeData.commitments.map((item) => item.commitmentname);

    const options1 = [];
        options1.push(fakeData.users[1].username);
        options1.push(fakeData.groups[1].groupname);

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleChange3 = (selectedValues) => {
        setSelectedOption3(selectedValues);
    };

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 2fr 1fr auto',
                alignItems: 'center',
                borderBottom: '1px solid black',
                paddingBottom: '1rem',
            }}>
                <div style={{gridColumn: '1'}}>
                    <Dropdown1 options={options1}
                               onChange={handleChange1}
                               styling={dropDownStyling}
                               selectedOptions={selectedOption1}
                               fakeData={fakeData}/>/>
                </div>

                <div style={{gridColumn: '2', justifySelf: 'center', marginLeft: '2rem'}}>
                    <Dropdown2 options={options2}
                               onChange={handleChange2}
                               styling={dropDownStyling}
                               selectedOptions2={selectedOption2}
                               fakeData={fakeData}/>
                </div>
                <div style={{gridColumn: '3', justifySelf: 'end', marginRight: '2rem'}}>
                </div>
                <div style={{gridColumn: '4', justifySelf: 'end', marginRight: '0.5rem'}}>
                    <Dropdown3 options={options3}
                               onChange={handleChange3}
                               styling={dropDownStyling}
                               selectedOptions={selectedOption3}
                               fakeData={fakeData}/>
                </div>
            </div>
        </div>
    );
}
export default TopNavbar;