import React, { useState } from 'react';
import '../navbar/style.css';
import Logo from '../../assets/img/nav_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0);
  })

  const [isOpen, setIsOpen] = useState(false)

  const state = () => {
    setIsOpen((open) => !open)
  }

  return (
    <>
    <header>
        <figure>
            <img src={Logo} alt="" />
        </figure>
        <nav className={`links ${isOpen ? 'is-open' : ''}` }>
            <ul className='mini-link'>
                <li><a href="">Home</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Us</a></li>
                <a className='logs1' href="">Login</a>
                <a className='logs' href="">Sign Up</a>
            </ul>
            <div className='burger_close'>
              <GrClose  className='burger-menu' onClick={state}/>
            </div>
        </nav>
        <div className='burger'>
          <RxHamburgerMenu  className='burger-menu2' onClick={state}/>
        </div>
    </header>
    </>
  )
}

export default Navbar;