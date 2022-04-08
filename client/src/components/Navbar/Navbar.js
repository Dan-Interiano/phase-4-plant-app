import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <Link to="/" className="navbar-logo">
                <i class="fa fa-leaf"></i>Plants and Plants<i class="fa fa-leaf"></i>
                </Link>
                <ul className={click ? 'navbar-list active' : 'navbar-list'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/garden' className='nav-links' onClick={handleClick}>
                            Garden
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={handleClick}>
                            About
                        </Link>
                    </li>
                </ul>            
            </div>
        </nav>
    </div>
  )
}
