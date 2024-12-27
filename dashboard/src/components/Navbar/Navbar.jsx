import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  

  return (
    <header className='header'>
      <div className='getoff'>
        <span>
          <Link to="/">Get 10% Off on your first app order. Start Now</Link>
        </span>
      </div>

      <nav className='navbar'>
        <div className='logo'>
          <Link className='madre' to='/'>Madre</Link>
          <span className='mexicanRes'>Mexican Restaurant</span>
        </div>

        <div className='navList'>
          <Link to="/our-story">Our Story</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order-online">Order Online</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/contact-reservation">Contact & Reservation</Link>
          <Link className='login' to="/login" style={{ display: "flex", alignItems: "flex-start", marginLeft: "60px" }}>
            <i className='bx bxs-user-circle' style={{ fontSize: "30px", marginRight: "12px", marginTop: "-5px" }}></i>
            Log In
          </Link>
          <Link className='cart' to="/cart">
            <i className='bx bx-cart' style={{ fontSize: "35px", marginTop: "-5px" }}>
              <span className='cartCount'>0</span>
            </i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
