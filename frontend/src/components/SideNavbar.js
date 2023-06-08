// import React, {useState, useEffect} from 'react';
// import {FaHome, FaChartBar} from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
//
//
// /**
//  * Component for the side navigation bar.
//  *
//  * @returns {JSX.Element} The rendered SideNavbar component.
//  */
// const SideNavbar = () => {
//     const [containerHeight, setContainerHeight] = useState(0);
//
//     useEffect(() => {
//         const updateContainerHeight = () => {
//             setContainerHeight(window.innerHeight);
//         };
//         window.addEventListener('resize', updateContainerHeight);
//         updateContainerHeight();
//         return () => window.removeEventListener('resize', updateContainerHeight);
//     }, []);
//
//     const handleIconHover = (e) => {
//         e.target.style.color = '#5E7839';
//         e.target.style.transform = 'scale(1.2)';
//     };
//
//     const handleIconLeave = (e) => {
//         e.target.style.color = 'black';
//         e.target.style.transform = 'scale(1)';
//     };
//
//     return (
//         <nav>
//             <div>
//                 <div>Home</div>
//                 <FaHome
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/')}
//                 />
//             </div>
//             <div >
//                 <div >Schwierigkeit</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/schwierigkeit')}
//                 />
//             </div>
//             <div >
//                 <div >Ein-<br/>schränkung</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/einschraenkung')}
//                 />
//             </div>
//             <div >
//                 <div >Umfeld</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/umfeld')}
//                 />
//             </div>
//             <div >
//                 <div >aktueller<br />Beitrag</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/aktuellerbeitrag')}
//                 />
//             </div>
//             <div  >
//                 <div>Ermöglicht mir</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/erlaubtmir')}
//                 />
//             </div>
//
//             <div>
//                 <div>nachhaltigen<br />Entwicklung</div>
//                 <FaChartBar
//                     size={'3vw'}
//                     className="nav-icon rounded border border-secondary p-2"
//                     onMouseEnter={handleIconHover}
//                     onMouseLeave={handleIconLeave}
//                     onClick={() => (window.location.href = '/nachhaltigeentwicklung')}
//                 />
//             </div>
//         </nav>
//     );
// };
//
// export default SideNavbar;
//
//
//
//






import React, { useState, useEffect } from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNavbar.css';

const SideNavbar = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

    return (
        <nav
            className={`side-navbar ${isSidebarOpen ? 'open' : 'closed'}`}
            style={{ height: containerHeight }}
        >
            <div className="toggle-button" onClick={toggleSidebar}>
                {isSidebarOpen ? '<' : '>'}
            </div>
            {isSidebarOpen && (
                <>
                    <div>
                        <div>Home</div>
                        <FaHome
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/')}
                        />
                    </div>
                    <div>
                        <div>Schwierigkeit</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/schwierigkeit')}
                        />
                    </div>
                    <div>
                        <div>Einschränkung</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/einschraenkung')}
                        />
                    </div>
                    <div>
                        <div>Umfeld</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/umfeld')}
                        />
                    </div>
                    <div>
                        <div>aktueller<br />Beitrag</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/aktuellerbeitrag')}
                        />
                    </div>
                    <div>
                        <div>Ermöglicht mir</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/erlaubtmir')}
                        />
                    </div>
                    <div>
                        <div>nachhaltigen<br />Entwicklung</div>
                        <FaChartBar
                            size={'3vw'}
                            className="nav-icon rounded border border-secondary p-2"
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconLeave}
                            onClick={() => (window.location.href = '/nachhaltigeentwicklung')}
                        />
                    </div>
                </>
            )}
        </nav>
    );
};

export default SideNavbar;
