import React, { useEffect } from 'react';
import '../elements3/style.css';
import Star from '../../../assets/img/Star 7.png';
import Book from '../../../assets/img/book 1.png';
import Ocean from '../../../assets/img/second_element.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Elements3 = () => {

    useEffect(() => {
                Aos.init()
            });

  return (
    <>
    <section className='elements3'>
            <div className='texts'>
                <h1 data-aos="fade-right" data-aos-duration="1000"><span>Class Management</span> Tools for Educators</h1>
                <p data-aos="fade-left" data-aos-duration="1000">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                </p>
            </div>




            <div className='image'>

                <div className='left' data-aos="fade-right" data-aos-duration="1000"></div>



                <div className='center'>

                    <div className='center_head'>
                        <div className='star' data-aos="fade-right" data-aos-duration="1000">
                            <div><img src={Star} alt="" /></div>
                        </div>
                        <p>GradeBook</p>
                        <div className='book' data-aos="fade-left" data-aos-duration="1000">
                            <div><img src={Book} alt="" /></div>
                        </div>
                    </div>

                    <div className='center_peoples'>
                        <div className='top'>
                            <div className='h1'><div className='h1_1' data-aos="fade-right" data-aos-duration="2000"> <img src={Star} alt="" /> <div>100</div></div></div>
                            <div className='h2'><div className='h2_1' data-aos="fade-left" data-aos-duration="1500"><div>98</div></div></div>
                        </div>
                        <div className='bottom'>
                            <div className='h3'><div className='h1_1' data-aos="fade-right" data-aos-duration="2000"><div>85</div></div></div>
                            <div className='h4'><div className='h2_1' data-aos="fade-left" data-aos-duration="2000"><div>75</div></div></div>
                        </div>
                    </div>

                    <div className='center_foot'>
                        <img src={Ocean} alt="" data-aos="fade-left" data-aos-duration="2000"/>
                        <button data-aos="fade-right" data-aos-duration="2000">Export</button>
                    </div>

                </div>



                <div className='right'>
                    <div data-aos="fade-down" data-aos-duration="1000"></div>
                    <div data-aos="fade-up" data-aos-duration="1000"></div>
                </div>
            </div>



    </section>
    </>
  )
}

export default Elements3;