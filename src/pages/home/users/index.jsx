import React, { useEffect } from 'react';
import '../users/style.css'
import { Phone } from './../../../assets/icons';
import Menu from '../../../assets/img/Group 72.png';
import Desktop from '../../../assets/img/Group 73.png';
import Users1 from '../../../assets/img/users2.png';
import { Hands } from './../../../assets/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Users = () => {

    useEffect(() => {
            Aos.init()
        });

  return (
    <>
    <section className='users'>
        <div className='user_text'>
            <h2>Our <span>Featured</span></h2>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
        </div>
        <div className='user_elements'>

            <div className='users_call'>
                <div className='round'>
                    <div data-aos="fade-down" data-aos-duration="1000"></div>
                    <div data-aos="fade-left" data-aos-duration="2000"></div>
                </div>
                <div className='desk'>
                    <div className='mac'> <div></div> <div></div> <div></div> </div>
                    <div className='online_users'>
                        <div className='teacher'>
                            <div data-aos="fade-right" data-aos-duration="1200"></div>
                            <div>
                                <button data-aos="fade-right" data-aos-duration="1200">Present</button>
                                <button data-aos="fade-left" data-aos-duration="1200"><Phone/> Call</button>
                            </div>
                        </div>
                        <div className='students'>
                            <div className='first' data-aos="fade-left" data-aos-duration="1200"></div>
                            <div data-aos="fade-left" data-aos-duration="2000"></div>
                            <div data-aos="fade-left" data-aos-duration="1700"></div>
                            <div data-aos="fade-left" data-aos-duration="2700"></div>
                            <div data-aos="zoom-in" data-aos-duration="1200">
                                <div>
                                    <Hands/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='round'>
                    <div data-aos="fade-up" data-aos-duration="1000"></div>
                    <div data-aos="fade-left" data-aos-duration="2000"></div>
                </div>
            </div>

            <div className='about_users'>
                <h1>A <span>user interface</span> designed for the classroom</h1>
                <div className='informations'>
                    <div>
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <img src={Menu} alt="" />
                        </div>
                        <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                        </p>
                    </div>
                    <div>
                        <div data-aos="fade-right" data-aos-duration="1900">
                            <img src={Desktop} alt="" />
                        </div>
                        <p>TA’s and presenters can be moved to the front of the class.
                        </p>
                    </div>
                    <div>
                        <div data-aos="fade-right" data-aos-duration="2600">
                            <img src={Users1} alt="" />
                        </div>
                        <p>Teachers can easily see all students and class data at one time.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Users;