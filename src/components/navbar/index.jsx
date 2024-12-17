import React from 'react';
import '../navbar/style.css';
import Logo from '../../assets/img/nav_logo.png';

const Navbar = () => {
  return (
    <>
    <header>
        <figure>
            <img src={Logo} alt="" />
        </figure>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Us</a></li>
                <a className='logs1' href="">Login</a>
                <a className='logs' href="">Sign Up</a>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar;