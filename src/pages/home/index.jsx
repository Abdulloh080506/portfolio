import React from 'react'
import '../home/style.css';
import Carousel from './carousel';
import Company from './companys';
import Cards from './cards';
import Skilline from './skilline';
import About from './about';
import Users from './users';

const Home = () => {
  return (
    <>
    <Carousel/>
    <Company/>
    <Cards/>
    <Skilline/>
    <About/>
    <Users/>
    </>
  )
}

export default Home;