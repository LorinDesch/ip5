import React, {useState, useEffect} from 'react';
import {FaHome, FaChartBar} from 'react-icons/fa';

const Navbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);

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
        e.target.style.color = 'black';
        e.target.style.transform = 'scale(1)';
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Home</div>
                <FaHome style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                        onClick={() => window.location.href = '/'}/>
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Difficulty</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/difficulty'}/>
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Restriction</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/restriction'}/>
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Environment</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/environment'}/>
            </div>
            <div style={{marginLeft: '0.9rem'}}>
                <div style={styles.text}>Current Contribution</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/currentcontribution'}/>
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Allows Me To</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/allowsmeto'}/>
            </div>

            <div style={{marginLeft: '0.9rem'}}>
                <div style={styles.text}>Sustainable Development</div>
                <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                            onClick={() => window.location.href = '/sustainabledevelopment'}/>
            </div>
        </div>
    );
};

export default Navbar;