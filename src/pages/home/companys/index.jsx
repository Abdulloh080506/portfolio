import React, {useEffect} from 'react';
import '../companys/style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Company = () => {

  useEffect(() => {
    Aos.init()
  });

  return (
    <>
    <section className='company_container'>
        <p>Trusted by 5,000+ Companies Worldwide</p>
        <div className='companys' data-aos="fade-up" data-aos-duration="1500">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
    </>
  )
}

export default Company;