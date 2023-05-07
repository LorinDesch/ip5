import React, { useState, useEffect } from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';

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
            <FaHome style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
            <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} onClick={() => window.location.href = '/difficulty'} />
            <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
            <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
            <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
            <FaChartBar style={styles.icon} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
            <FaChartBar style={{ ...styles.icon, marginRight: 0 }} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} />
        </div>
    );
};

export default Navbar;
