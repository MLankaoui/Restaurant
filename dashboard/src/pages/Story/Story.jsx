import React from 'react';
import './Story.css';
import story1 from '../../assets/1-story.png';
import story3 from '../../assets/3-story.png';
import story2 from '../../assets/2-story.png';



const Story = () => {
  return(
    <div className='wrapper'>
      <h3>Madre's Story</h3>

      <div className='sections'>
        <div className='section1'>
          <img src={ story1 } alt="story1-img" />
          <div className='box1'> 
            <h3>Freshness In Every Bite</h3>
            <p>paragraph</p>
          </div>
        </div>
        
        <div className='wrapper-2sections'> 
          <div className='section2'>
            <div>
              <h3>The Authentic Mexican Taste</h3>
              <p>paragraph</p>
            </div>
            <img src={ story3 } alt="story3-img" />
          </div>

          <div className='section3'>
            <h3> Made to Order & Delivered at Your Door</h3>
            <p>paragraph</p>
            <button>Order Online</button>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Story;
