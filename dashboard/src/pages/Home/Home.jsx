import React from 'react';
import './Home.css';
import home from '../../assets/homee.jpg';

const Home = () => {
  return(
    <div className='home-container'>
      

      <img src={home} alt="" className='home-img'/>
      <div className='wrapper'>
        <span className='order-online'><a href="/">Order <br /> Online</a></span>
        <h1>Madre</h1>
        <h3>MEXICAN CUISINE</h3>
        <div>
          <button className='menu-btn'>View Menu</button>
          <button className='reser-btn'>Reservation</button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home
