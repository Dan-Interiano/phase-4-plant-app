import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar({ user, setUser }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='user-div'>
                    {user ? (
                            <button onClick={handleLogoutClick}>Logout</button>
                        ) : (
                            <>
                                <Link to="/signup" className='user-link'>Signup</Link>
                                <Link to="/login" className='user-link'>Login</Link>
                            </>
                        )}
                    </div>
                    <Link to="/" className="navbar-logo">
                         Plants and Plants<i class="fa fa-leaf"></i>
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
