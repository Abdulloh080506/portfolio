import React, { useEffect } from 'react';
import '../apps/style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Apps = () => {

    useEffect(() => {
                Aos.init()
            });

  return (
    <>
    <section className='apps'>

        <div className="logos">
            <div className='top'>
                <div data-aos="fade-left" data-aos-duration="1000"></div>
                <div data-aos="fade-left" data-aos-duration="3000"></div>
            </div>
            <div className='bottom'>
                <div data-aos="fade-left" data-aos-duration="2000"></div>
                <div data-aos="fade-left" data-aos-duration="4000"></div>
            </div>
        </div>

        <div className='texts'>
            <div data-aos="fade-right" data-aos-duration="1000"><div></div> <p> INTEGRATIONS</p></div>
            <h1 data-aos="fade-left" data-aos-duration="1000">200+ educational tools and platform <span>integrations</span></h1>
            <p data-aos="fade-right" data-aos-duration="1000">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
            <button data-aos="fade-left" data-aos-duration="1000">See All Integrations</button>
        </div>
    </section>
    </>
  )
}

export default Apps;