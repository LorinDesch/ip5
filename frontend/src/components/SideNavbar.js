import React, { useState, useEffect } from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideNavbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const updateContainerHeight = () => {
            setContainerHeight(window.innerHeight);
        };
        window.addEventListener('resize', updateContainerHeight);
        updateContainerHeight();
        return () => window.removeEventListener('resize', updateContainerHeight);
    }, []);

    const handleIconHover = (e) => {
        e.target.style.color = '#5E7839';
        e.target.style.transform = 'scale(1.2)';
    };

    const handleIconLeave = (e) => {
        e.target.style.color = 'black';
        e.target.style.transform = 'scale(1)';
    };

    return (
        <nav
            className="navbar flex-column justify-content-between align-items-center bg-light text-dark fixed-top"
            style={{ height: containerHeight, width: '6rem', boxShadow: '0 0 0 2px #000' }}
        >
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Home</div>
                <FaHome size={'2vw'}
                        className="nav-icon border"
                        onMouseEnter={handleIconHover}
                        onMouseLeave={handleIconLeave}
                        onClick={() => (window.location.href = '/')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Difficulty</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/difficulty')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Restriction</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/restriction')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Environment</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/environment')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Current Contribution</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/currentcontribution')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Allows Me To</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/allowsmeto')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Sustainable Development</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/sustainabledevelopment')}
                />
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Sustainable Development</div>
                <FaChartBar size={'2vw'}
                            className="nav-icon border"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}

                />
            </div>
        </nav>
    );
};

export default SideNavbar;
