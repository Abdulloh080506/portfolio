import React, {useEffect} from 'react';
import '../cards/style.css';
import { Kalendar } from '../../../assets/icons';
import { Document } from '../../../assets/icons';
import { Users } from '../../../assets/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {

    useEffect(() => {
            Aos.init()
          });

  return (
    <>
    <section className='card_container'>
        <div className='card_headers'>
            <h1>All-In-One <span>Cloud Software.</span></h1>
            <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        </div>
        <div className='cards'>
            <div className='card'  data-aos="fade-right" data-aos-duration="1000">
                <div><Document/></div>
                <h1>Online Billing, Invoicing, & Contracts</h1>
                <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
            <div className='card'>
                <div><Kalendar/></div>
                <h1>Easy Scheduling & Attendance Tracking</h1>
                <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
            </div>
            <div className='card'  data-aos="fade-left" data-aos-duration="1000">
                <div><Users/></div>
                <h1>Customer Tracking</h1>
                <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cards;