import React, {useState, useEffect} from 'react';
import {FaHome, FaChartBar, FaComments} from 'react-icons/fa';
import { CgTrees } from "react-icons/cg";
import { TiChartAreaOutline} from "react-icons/ti"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxMixerHorizontal } from "react-icons/rx";
import { CiWarning } from "react-icons/ci";

/**
 * Component for the side navigation bar.
 */
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
            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Home</div>
                <FaHome
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/')}
                />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Schwierigkeit</div>
                <CiWarning
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/schwierigkeit')}
                />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Ein-<br/>schränkung</div>
                <FaChartBar
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/einschraenkung')}
                />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Umfeld</div>
                <FaComments
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/umfeld')}
                />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Beitrag</div>
                <CgTrees
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/beitrag')}
                />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ marginRight: '1rem' }}>
                <div className="mb-2">Ermoeglicht</div>
                <RxMixerHorizontal
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/ermoeglicht')}
                />
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center text-center"style={{ marginRight: '1rem' }}>
                <div className="mb-2">Entwicklung</div>
                <TiChartAreaOutline
                    size={'3vw'}
                    className="nav-icon rounded border border-secondary p-2"
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                    onClick={() => (window.location.href = '/entwicklung')}
                />
            </div>
        </nav>
    );
};

export default SideNavbar;