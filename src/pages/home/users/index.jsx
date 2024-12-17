import React from 'react';
import '../users/style.css'
import { Phone } from './../../../assets/icons';
import Menu from '../../../assets/img/Group 72.png';
import Desktop from '../../../assets/img/Group 73.png';
import Users1 from '../../../assets/img/users2.png';

const Users = () => {
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
                    <div></div>
                    <div></div>
                </div>
                <div className='desk'>
                    <div className='mac'> <div></div> <div></div> <div></div> </div>
                    <div className='online_users'>
                        <div className='teacher'>
                            <div></div>
                            <div>
                                <button>Present</button>
                                <button><Phone/> Call</button>
                            </div>
                        </div>
                        <div className='students'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='round'>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className='about_users'>
                <h1>A <span>user interface</span> designed for the classroom</h1>
                <div className='informations'>
                    <div>
                        <div>
                            <img src={Menu} alt="" />
                        </div>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <img src={Desktop} alt="" />
                        </div>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <img src={Users1} alt="" />
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Users;