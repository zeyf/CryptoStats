import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar navbar--primary'>
            <Link className='navbarlogo__link' to='/'>
                <span className='navbar__span'>cryptostats</span>
            </Link>
        </div>
    )
}

export default Navbar
