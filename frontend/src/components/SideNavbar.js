import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNavbar.css';
import {FaRegComments} from 'react-icons/fa';
import {CgTrees} from "react-icons/cg";
import {TiChartAreaOutline, TiWarningOutline, TiHomeOutline} from "react-icons/ti"
import {RxMixerHorizontal} from "react-icons/rx";
import {VscSearchStop} from "react-icons/vsc";

/**
 * Component for displaying the side navigation bar.
 */
const SideNavbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<nav className={`side-navbar ${isSidebarOpen ? 'open' : 'closed'}`} style={{height: containerHeight}}>
        <div className="toggle-button"
             onClick={toggleSidebar}>                {isSidebarOpen ? '<' : '>'}            </div>
        {isSidebarOpen && (<>
            <div className="sidebar-item">

                <div className="sidebar-text">Home</div>
                <TiHomeOutline size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                               onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                               onClick={() => (window.location.href = '/')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">Schwierigkeit</div>
                <TiWarningOutline size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                                  onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                                  onClick={() => (window.location.href = '/schwierigkeit')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">Ein-<br/>schränkung</div>
                <VscSearchStop size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                               onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                               onClick={() => (window.location.href = '/einschraenkung')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">Umfeld</div>
                <FaRegComments size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                               onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                               onClick={() => (window.location.href = '/umfeld')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">aktueller Beitrag</div>
                <CgTrees size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                         onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                         onClick={() => (window.location.href = '/beitrag')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">Ermöglicht mir</div>
                <RxMixerHorizontal size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                                   onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                                   onClick={() => (window.location.href = '/ermoeglicht')}/></div>

            <div className="sidebar-item">
                <div className="sidebar-text">nachhaltigen Entwicklung</div>
                <TiChartAreaOutline size={'3vw'} className="nav-icon rounded border border-secondary p-2"
                                    onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}
                                    onClick={() => (window.location.href = '/entwicklung')}/></div>
        </>)}        </nav>);
};
export default SideNavbar;