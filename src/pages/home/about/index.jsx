import React from 'react';
import '../about/style.css';

const About = () => {
  return (
    <>
    <section className='about'>
        <div className='about_text'>
            <div className='o1'></div>
            <div className='text'>
                <h2>Everything you can do in a physical classroom, <span>you can do with Skilline</span></h2>
                <p>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="">Lean more</a>
            </div>
            <div className='o2'></div>
        </div>
        <div className='about_image'>
            <div className='t1'></div>
            <div className='image'></div>
            <div className='t2'></div>
        </div>
    </section>
    </>
  )
}

export default About;