import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import './TopNavbar.css';

const TopNavbar = ({
                       fakeData,
                       selectedOption3,
                       selectedOption2,
                       selectedOption1,
                       setSelectedOption1,
                       setSelectedOption2,
                       setSelectedOption3,
                   }) => {

    const dropDownStyling = {
        padding: '12px 38px 12px 12px',
        border: '2px solid black',
        borderRadius: '4px',
        backgroundColor: '#fff',
        appearance: 'none',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        cursor: 'pointer',
        backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath fill=\'%23000000\' fill-rule=\'evenodd\' d=\'M5 6L0 .666666667 1.11111111 0l3.88888889 3.666666667L8.88888889 0 10 .666666667\'/%3E%3C/svg%3E")',
        backgroundPosition: 'right 10px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 30%',
        width: '16rem',
    };
    const smallDropDownStyling = {
        padding: '12px 1px 12px 12px',
        border: '2px solid black',
        borderRadius: '4px',
        backgroundColor: '#fff',
        appearance: 'none',
        fontFamily: 'sans-serif',
        fontSize: '15px',
        cursor: 'pointer',
        backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\' viewBox=\'0 0 10 6\'%3E%3Cpath fill=\'%23000000\' fill-rule=\'evenodd\' d=\'M5 6L0 .666666667 1.11111111 0l3.88888889 3.666666667L8.88888889 0 10 .666666667\'/%3E%3C/svg%3E")',
        backgroundPosition: 'right 10px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 30%',
        width: '300px',
        textAlign: 'center',
        alignContent: 'center',
    };


    const navigate = useNavigate();

    const handleLogout = () => {
        // Logout-Funktion
    };

    const options3 = fakeData.groups.map((item) => ({
        value: item.groupname,
        label: item.groupname,
    }));

    const options2 = fakeData.commitments.map((item) => item.commitmentname);

    const options1 = [];
    options1.push(fakeData.users[0].username);
    options1.push(fakeData.groups[0].groupname);

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleChange3 = (selectedValues) => {
        setSelectedOption3(selectedValues);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="top-navbar">
            {windowWidth < 768 && (
                <button className="menu-button" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            )}
            {(windowWidth >= 768 || isMenuOpen) && (
                <>
                    <Dropdown1
                        options={options1}
                        onChange={handleChange1}
                        styling={windowWidth < 768 ? smallDropDownStyling : dropDownStyling}
                        selectedOptions={selectedOption1}
                        fakeData={fakeData}
                    />
                    <Dropdown2
                        options={options2}
                        onChange={handleChange2}
                        styling={windowWidth < 768 ? smallDropDownStyling : dropDownStyling}
                        selectedOptions2={selectedOption2}
                        fakeData={fakeData}
                    />
                    <button onClick={handleLogout} className="logout-button">
                        logout
                    </button>
                    <Dropdown3
                        options={options3}
                        onChange={handleChange3}
                        styling={windowWidth < 768 ? smallDropDownStyling : dropDownStyling}
                        selectedOptions={selectedOption3}
                        fakeData={fakeData}
                    />

                </>
            )}
        </div>
    );
};

export default TopNavbar;