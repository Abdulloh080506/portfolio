import React, {useEffect} from 'react';
import '../about/style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
          Aos.init()
      });

  return (
    <>
    <section className='about'>
        <div className='about_text'>
            <div className='o1' data-aos="fade-up" data-aos-duration="1500"></div>
            <div className='text'>
                <h2 data-aos="fade-left" data-aos-duration="1000">Everything you can do in a physical classroom, <span>you can do with Skilline</span></h2>
                <p data-aos="fade-right" data-aos-duration="1000">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="">Lean more</a>
            </div>
            <div className='o2' data-aos="fade-down" data-aos-duration="1800"></div>
        </div>
        <div className='about_image'>
            <div className='t1' data-aos="fade-right" data-aos-duration="2200"></div>
            <div className='image'></div>
            <div className='t2' data-aos="fade-left" data-aos-duration="2500"></div>
        </div>
    </section>
    </>
  )
}

export default About;