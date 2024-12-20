import React from 'react';
import '../footer/style.css';
import Logo from '../../assets/img/footer_logo.png';

const Footer = () => {
  return (
    <>
    <section className='footer'>

        <div className='foot_logo'>
            <img src={Logo} alt="" />
            <div>Virtual Class for Zoom</div>
        </div>

        <div className='foot_input'>
            <p>Subscribe to get our Newsletter</p>
            <div className='input'>
                <div><input type="email" placeholder='Your Email'/></div>
                <button>Subscribe</button>
            </div>
        </div>
        
        <div className='subtitle'>
            <div className='links'>
                <div><a href="">Careers</a></div>
                <div><a href="">Privacy Policy</a></div>
                <div><a href="">Terms & Conditions</a></div>
            </div>
            <p>© 2021 Class Technologies Inc. </p>
        </div>

    </section>
    </>
  )
}

export default Footer;