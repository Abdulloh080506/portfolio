import React, { useEffect } from 'react';
import '../carousel/style.css';
import Play from '../../../assets/img/play.png';
import { Kalendar } from '../../../assets/icons';
import { Email } from '../../../assets/icons';
import User from '../../../assets/img/banner_user.png';
import Girl from '../../../assets/img/banner_girl.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Carousel = () => {

        useEffect(() => {
            Aos.init()
        });

  return (
    <>
    <section className='carousel_container'>
        <div className='left'>
            <h1><span>Studying</span> Online is now much easier</h1>
            <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
            <div className='left_links'>
                <button>Join for free</button>
                <a href=""><img src={Play} alt="" /></a>
                <p>Watch how it works</p>
            </div>
        </div>

        <div className='right'>
            <div className='banner_left'>
                <div className='el_1' data-aos="fade-right" data-aos-duration="1000">
                    <div>
                        <Kalendar/>
                    </div>
                    <div>
                        <p>250k</p>
                        <p>Assisted Student</p>
                    </div>
                </div>
                <div className='el_2' data-aos="fade-right" data-aos-duration="2000">
                    <div>
                        <img src={User} alt="" />
                        <div>
                            <p>User Experience Class</p>
                            <p>Today at 12.00 PM</p>
                        </div>
                    </div>
                    <div>
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
            <div className='banner_girl'>
                <img src={Girl} alt="" />
            </div>

            <div className='banner_right'>
                <div className='el_4' data-aos="fade-left" data-aos-duration="2500"></div>
                <div className='el_3' data-aos="fade-left" data-aos-delay='200' data-aos-duration="1000">
                    <div><Email/></div>
                    <div>
                        <p>Congratulations</p>
                        <p>Your admission completed</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Carousel