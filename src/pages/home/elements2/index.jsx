import React, { useEffect } from 'react';
import '../elements2/style.css';
import True from '../../../assets/img/true.png';
import False from '../../../assets/img/false.png';
import Massage from '../../../assets/img/massage.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Elements2 = () => {

    useEffect(() => {
                Aos.init()
            });

  return (
    <>
    <section className='elements2'>

        <div className='elements2_image'>
            <div className='left'>
                <div className='left_top'>
                    <div data-aos="fade-down-right" data-aos-duration="1000"></div>
                    <div data-aos="fade-left" data-aos-duration="1500"></div>
                </div>
                <div className='left_bottom' data-aos="fade-up-right" data-aos-duration="1000"></div>
            </div>
            <div className='center'>
                <div data-aos="fade-left" data-aos-duration="1000">Question 1</div>
                <p data-aos="fade-left" data-aos-duration="2000">True or false? This play takes place in Italy</p>
                <div data-aos="fade-left" data-aos-duration="3000"></div>
            </div>
            <div className='right'>
                <div className='right_top'>
                    <div className='false' data-aos="fade-down-right" data-aos-duration="2000"><div><img src={False} alt="" /></div></div>
                    <div className='true' data-aos="fade-up-left" data-aos-duration="2000"><div><img src={True} alt="" /></div></div>
                </div>
                <div className='right_center' data-aos="fade-left" data-aos-duration="1000"></div>
                <div className='right_bottom' data-aos="fade-left" data-aos-duration="2000">
                    <div className='bottom_bg'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='bottom'>    
                        <img src={Massage} alt="" />
                        <p>Your answer was sent successfully</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='elements2_text'>
            <h1 data-aos="fade-right" data-aos-duration="1000">Assessments, <span>Quizzes</span>, Tests</h1>
            <p data-aos="fade-left" data-aos-duration="1000">Easily launch live assignments, quizzes, and tests.
            Student results are automatically entered in the online gradebook.</p>
        </div>

    </section>
    </>
  )
}

export default Elements2;