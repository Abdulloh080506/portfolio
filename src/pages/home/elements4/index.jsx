import React, { useEffect } from 'react';
import '../elements4/style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Elements4 = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <>
    <section className='elements4'>

    <div className='elements4_image'>
      <div className='right' data-aos="fade-right" data-aos-duration="1000"></div>
      <div className='center'>
        
          <div className='desk' data-aos="fade-left" data-aos-duration="1000">
              <div className='mac'> <div></div> <div></div> <div></div> </div>
              <div className='online_users'>
                <div className='users'>
                  <div className='i1'>
                    <div></div>
                  </div>
                  <div className='i2'>
                    <div></div>
                  </div>
                </div>
                <div className='buttons'>
                  <div className='p'>
                    <p>Private Discussion</p>
                    <p>Your video can’t be seen by others</p>
                  </div>
                  <button>End Discussion</button>
                </div>
              </div>
          </div>
        
      </div>
      <div className='left' data-aos="fade-down-left" data-aos-duration="1000"></div>
    </div>

    <div className='elements2_text'>
            <h1 data-aos="fade-left" data-aos-duration="1000">One-on-One <span>Discussions</span></h1>
            <p data-aos="fade-right" data-aos-duration="1000">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
    </div>

    </section>
    <div className='btn'>
      <button className='end_button'>See more features</button>
    </div>
    </>
  )
}

export default Elements4;