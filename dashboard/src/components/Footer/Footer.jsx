import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () =>{
    return (
      
        <div className='footer'>
          <p>© {new Date().getFullYear()} by Fatima Hailou</p>

          <p>
            500 Terry Francine Street, San Francine, CA 94158. Tel 123-456-7890
          </p>

          <div className='icons-footer'>
            <Link to ='/'><i class='bx bxl-facebook'></i></Link>
            <Link to='/'><i class='bx bxl-twitter'></i></Link>
            <Link to='/'><i class='bx bxl-instagram' ></i></Link>
          </div>
        </div>
        
      
    )
}

export default Footer
