import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'


function Navbar() {

    const [click, setClick] = useState(false);

    const CloseMobileMenu = () => {
        console.log('mobile menu closed');
        setClick(true);
    };

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navabr-container">
                    <Link to='/' className="navbar-logo">
                        Halogen<i className='fab fa-typo3'></i>
                    </Link>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items' onClick={CloseMobileMenu}>
                            <Link to='/' className='nav-links' >
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/serevice' className='nav-links' onClick={CloseMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/product' className='nav-links' onClick={CloseMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/about' className='nav-links' onClick={CloseMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
