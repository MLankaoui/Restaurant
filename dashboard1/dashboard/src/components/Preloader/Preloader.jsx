import React from 'react';
import './Preloader.css';
import animation from '../../assets/Animation.gif'; 
const Preloader = () => {
  return (
    <div className='preloader'>
      <h1 className='load-title'>Madre</h1>
      <p className='load-p'>Mexican Restaurant</p>
      <img src={animation} alt="animation-gif" />
      
      
    </div>
  )
}

export default Preloader
