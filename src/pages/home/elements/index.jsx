import React, { useEffect } from 'react';
import '../elements/style.css';
import Watching from '../../../assets/img/watching.png';
import MenuImg from '../../../assets/img/menu.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Element = () => {

    useEffect(() => {
            Aos.init()
        });

  return (
    <>
    <section className='element'>

        <div className='texts'>
            <h1 data-aos="fade-right" data-aos-duration="1000"><span>Tools</span> For Teachers And Learners</h1>
            <p data-aos="fade-left" data-aos-duration="1000">Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.</p>
            </div>

            <div className='image'>
                <div className='bg_image'></div>
                <div className='global_image'>
                    <div className='left'>
                        <div data-aos="fade-down-right" data-aos-duration="2000">
                            <div><img src={MenuImg} alt="" /></div>
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="2000"></div>
                    </div>
                    <div className='center'>
                        <div data-aos="fade-right" data-aos-duration="1800"></div>
                        <div data-aos="fade-left" data-aos-duration="1000"></div>
                    </div>
                    <div className='right'>
                        <div data-aos="fade-bottom-left" data-aos-duration="2000"></div>
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <div><img src={Watching} alt="" /></div>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="2000"></div>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default Element;