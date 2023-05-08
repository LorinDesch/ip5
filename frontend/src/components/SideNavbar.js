import React, { useState, useEffect } from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const SideNavbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const location = useLocation();

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
        activeIcon: {
            color: '#5E7839', // the color you want for the active icon
            transform: 'scale(1.2)' // the transform you want for the active icon
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

    const handleIconLeave = (e, isActive) => {
        e.target.style.color = isActive ? styles.activeIcon.color : 'black';
        e.target.style.transform = isActive ? styles.activeIcon.transform : 'scale(1)';
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Home</div>
                <FaHome
                    style={{ ...styles.icon, ...(location.pathname === '/' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/')}
                    onClick={() => window.location.href = '/'}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Difficulty</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/difficulty' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/difficulty')}
                    onClick={() => window.location.href = '/difficulty'}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Restriction</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/restriction' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/restriction'    )}
                    onClick={() => window.location.href = '/restriction'}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Environment</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/environment' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/environment')}
                    onClick={() => window.location.href = '/environment'}
                />
            </div>
            <div style={{ marginLeft: '0.9rem' }}>
                <div style={styles.text}>Current Contribution</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/currentcontribution' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/currentcontribution')}
                    onClick={() => window.location.href = '/currentcontribution'}
                />
            </div>
            <div style={styles.iconWrapper}>
                <div style={styles.text}>Allows Me To</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/allowsmeto' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/allowsmeto')}
                    onClick={() => window.location.href = '/allowsmeto'}
                />
            </div>
            <div style={{ marginLeft: '0.9rem' }}>
                <div style={styles.text}>Sustainable Development</div>
                <FaChartBar
                    style={{ ...styles.icon, ...(location.pathname === '/sustainabledevelopment' && styles.activeIcon) }}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={(e) => handleIconLeave(e, location.pathname === '/sustainabledevelopment')}
                    onClick={() => window.location.href = '/sustainabledevelopment'}
                />
            </div>
        </div>
    );
};
export default SideNavbar;
