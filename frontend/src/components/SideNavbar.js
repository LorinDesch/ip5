import React, {useState, useEffect} from 'react';
import {FaHome, FaChartBar} from 'react-icons/fa';

const SideNavbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [selectedTab, setSelectedTab] = useState('home');

    useEffect(() => {
        const updateContainerHeight = () => {
            setContainerHeight(window.innerHeight);
        };
        window.addEventListener('resize', updateContainerHeight);
        updateContainerHeight();
        return () => window.removeEventListener('resize', updateContainerHeight);
    }, []);

    const styles = {
        navbar: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFF',
            color: 'black',
            height: containerHeight,
            width: '6rem',
            position: 'fixed',
            top: 0,
            left: 0,
            boxShadow: '0 0 0 2px #000'
        },
        iconWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        icon: {
            fontSize: '3rem',
            margin: '1rem 0',
            cursor: 'pointer',
            border: '1px solid #000',
            borderRadius: '10%',
            padding: '0.5rem',
            flexGrow: 1,
            maxWidth: '50',
            maxHeight: '50',
        },

        text: {
            fontSize: '0.8rem',
            marginTop: '0.5rem',

        }

    };

    const handleIconHover = (e) => {
        e.target.style.color = '#5E7839';
        e.target.style.transform = 'scale(1.2)';
    };

    const handleIconLeave = (e) => {
        if (selectedTab !== e.target.id) {
            e.target.style.color = 'black';
            e.target.style.transform = 'scale(1)';
        }
    };

    const handleIconClick = (e) => {
        switch (e.target.id) {
            case 'home':
                window.location.href = '/';
                break;
            case 'difficulty':
                window.location.href = '/difficulty';
                break;
            case 'restriction':
                window.location.href = '/restriction';
                break;
            case 'environment':
                window.location.href = '/environment';
                break;
            case 'allowsmeto':
                window.location.href = '/allowsmeto';
                break;
            case 'sustainabledevelopment':
                window.location.href = '/sustainabledevelopment';
                break;
            default:
                break;
        }
        // Alle Symbole auf Schwarz zurücksetzen
        const icons = document.querySelectorAll('.icon');
        icons.forEach((icon) => {
            icon.style.color = 'black';
            icon.style.transform = 'scale(1)';
        });
        // Ausgewähltes Symbol auf grün setzen
        setSelectedTab(e.target.id);
        e.target.style.color = '#5E7839';
        e.target.style.transform = 'scale(1.2)';
    };



    return (
        <div style={styles.navbar}>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Home</div>
                <FaHome
                    id="home"
                    style={
                        selectedTab === "home"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Difficulty</div>
                <FaChartBar
                    id="difficulty"
                    style={
                        selectedTab === "difficulty"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Restriction</div>
                <FaChartBar
                    id="restriction"
                    style={
                        selectedTab === "restriction"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Environment</div>
                <FaChartBar
                    id="environment"
                    style={
                        selectedTab === "environment"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={{marginLeft: "0.9rem"}}>
                <div style={styles.text}>Current Contribution</div>
                <FaChartBar
                    id="currentcontribution"
                    style={
                        selectedTab === "currentcontribution"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Allows Me To</div>
                <FaChartBar
                    id="allowsmeto"
                    style={
                        selectedTab === "allowsmeto"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Sustainable Development</div>
                <FaChartBar
                    id="sustainabledevelopment"
                    style={
                        selectedTab === "sustainabledevelopment"
                            ? {...styles.icon, color: "#5E7839", transform: "scale(1.2)"}
                            : {...styles.icon, color: "black"}
                    }
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={handleIconClick}
                />
            </div>
        </div>
    );
};

export default SideNavbar;
