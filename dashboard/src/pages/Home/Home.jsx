import React from 'react';
import './Home.css';
import home from '../../assets/homee.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className='home-container'>
      

      <img src={home} alt="" className='home-img'/>
      <div className='home-wrapper'>
        <span className='order-online'><a href="/">Order <br /> Online</a></span>
        <h1 className='home-h1'>Madre</h1>
        <h3 className='home-h3'>MEXICAN CUISINE</h3>
        <div>
          <Link to='/menu'><button className='menu-btn home-btn'>View Menu</button></Link>
          <button className='reser-btn home-btn'>Reservation</button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home
