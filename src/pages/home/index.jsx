import React from 'react'
import '../home/style.css';
import Carousel from './carousel';
import Company from './companys';
import Cards from './cards';
import Skilline from './skilline';
import About from './about';
import Users from './users';
import Element from './elements';
import Elements2 from './elements2';
import Elements3 from './elements3';
import Elements4 from './elements4';
import Apps from './apps';
import Videos from './videos';

const Home = () => {
  return (
    <>
    <Carousel/>
    <Company/>
    <Cards/>
    <Skilline/>
    <About/>
    <Users/>
    <Element/>
    <Elements2/>
    <Elements3/>
    <Elements4/>
    <Apps/>
    <Videos/>
    </>
  )
}

export default Home;