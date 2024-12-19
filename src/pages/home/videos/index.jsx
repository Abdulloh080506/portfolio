import React, { useEffect } from 'react';
import '../videos/style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Videos = () => {

    useEffect(() => {
                Aos.init()
            });

  return (
    <>
    <section className='videos'>

        <div className='texts'>
            <h1>Lastest News and Resources</h1>
            <p>See the developments that have occurred to Skillines in the world</p>
        </div>

        <div className='videos_container'>
            <div className='left' data-aos="fade-right" data-aos-duration="1000">
                <div></div>
                <div>NEWS</div>
                <h2>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
                <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <a href="">Read more</a>
            </div>
            <div className='right'>
                <div className='video_link' data-aos="fade-left" data-aos-duration="1000">
                    <div className='img'>
                        <div>PRESS PELEASE</div>
                    </div>
                    <div className='paragref'>
                        <h2>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h2>
                        <p>Class Technologies Inc., the company that created Class,...</p>
                    </div>
                </div>
                <div className='video_link' data-aos="fade-left" data-aos-duration="2000">
                    <div className='img'>
                        <div>NEWS</div>
                    </div>
                    <div className='paragref'>
                        <h2>Zoom’s earliest investors are betting millions on a better Zoom for schools</h2>
                        <p>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                    </div>
                </div>
                <div className='video_link' data-aos="fade-left" data-aos-duration="3000">
                    <div className='img'>
                        <div>NEWS</div>
                    </div>
                    <div className='paragref'>
                        <h2>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h2>
                        <p>This year, investors have reaped big financial returns from betting on Zoom...</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Videos