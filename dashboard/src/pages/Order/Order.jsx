import React from 'react';
import order from '../../assets/order.png';
import { Link } from 'react-router-dom';
import './Order.css';


const menuData = [
  {
    title: "Starters",
    description: "A variety of delicious starters.",
    items: [
      { name: "Homemade Nachos", description: "Crispy nachos with cheese and jalapeños.", price: 9 },
      { name: "Mexican Grilled Corn", description: "Grilled corn with spices.", price: 9 },
      { name: "Chicken Fajita Salad", description: "Fresh salad with chicken fajita.", price: 9 },
      { name: "Mini Quesadillas", description: "Mini quesadillas with cheese.", price: 9 },
    ],
  },
  {
    title: "Tacos & Tostadas",
    description: "Authentic Mexican tacos and tostadas.",
    items: [
      { name: "Grilled Chicken", description: "Juicy grilled chicken tacos.", price: 9 },
      { name: "Crispy Fish", description: "Crispy fish tacos.", price: 9 },
      { name: "Marinated Pork", description: "Pork marinated in spices.", price: 9 },
      { name: "Mixed Vegetables", description: "Vegetable tacos with seasoning.", price: 9 },
    ],
  },
  {
    title: "Drinks",
    description: "Refreshing beverages.",
    items: [
      { name: "Mineral Water", description: "Pure mineral water.", price: 9 },
      { name: "Sparkling Water", description: "Bubbly sparkling water.", price: 9 },
      { name: "Mexican Beer", description: "Traditional Mexican beer.", price: 9 },
    ],
  },
]; 

const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item, index) => (
        <div key={index} className="items-wrapper">
          <h3>{item.name}</h3>
          <p className='descr-item'>{item.description}</p>
          <p className='price-item'>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

const Order = () => {
  return (
    <div>
      <div>
        <img src={order} alt="order-img" className='order-img'/>
        <div className="order-wrapper">
          <div className='order-box'>
            <h2>Order Online</h2>
            <p>
              You can order online! Browse our menu items and choose what you’d like to order from us.
            </p>

          </div>
            
          
          <div>
            <div className='acc-order'>
              <span></span>
              <p>Accepting Orders</p>
            </div>
              

            <div className="pick-deliver">
              <div className='pickup'>
                <p>Pickup</p>
              </div>
              <div className='delivery'>
                <p>Delivery</p>
              </div>
            </div>

            <div className='time-addr-wrapper'>
              <div className='time-pick'>
                <i className="bx bx-time"></i>
                <p>Pickup time: up to 30 minutes</p>
                <Link className='changes'>Changes</Link>
              </div>
              <div className='address'>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="2.999 2 13.009 16.005" xmlns="http://www.w3.org/2000/svg" viewBox="2.999 2 13.009 16.005" height="15" width="15" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                        <path d="M7.058 8.015c.19-.99.98-1.78 1.97-1.97h.01c.82-.15 1.66.11 2.25.69.59.58.85 1.43.69 2.25-.19.99-.98 1.78-1.97 1.97-.16.03-.32.04-.48.04-.67 0-1.31-.26-1.78-.73-.59-.58-.85-1.43-.69-2.25Zm2.76 1.95c.58-.11 1.06-.59 1.17-1.17.1-.51-.05-1-.41-1.36-.29-.29-.66-.44-1.06-.44a1.498 1.498 0 0 0-1.47 1.2c-.1.51.05 1 .41 1.36.36.36.85.5 1.36.41Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        <path d="M8.088 2.145c1.97-.41 3.98.06 5.51 1.3a6.474 6.474 0 0 1 2.41 5.05 6.462 6.462 0 0 1-.568 2.664c-.006.012-.012.021-.012.036-.87 1.9-2.51 4.05-4.87 6.38-.29.29-.67.43-1.05.43s-.76-.15-1.05-.43c-2.37-2.34-4.01-4.49-4.88-6.4-.002-.006-.005-.01-.008-.015-.006-.011-.012-.02-.012-.035a6.554 6.554 0 0 1-.39-4.13c.54-2.39 2.51-4.34 4.92-4.85Zm6.41 8.66c.01-.01.02-.04.02-.04h.01c.32-.72.49-1.49.49-2.28 0-1.66-.75-3.22-2.04-4.27-1.3-1.05-3-1.46-4.67-1.1-2.03.43-3.7 2.07-4.15 4.09-.28 1.22-.16 2.44.34 3.54.02.01.02.03.02.04.82 1.79 2.39 3.83 4.65 6.06.19.19.49.19.69 0 2.25-2.23 3.82-4.26 4.64-6.04Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </g>
                </svg>
                <p>Pickup Address: San Francisco, CA</p>
              </div>
              
            </div>

            <div className='menu-list'>
              <ul>
                <li>Starters</li>
                <li>Tacos & Tostadas</li>
                <li>Drinks</li>
              </ul>
            </div>
            <h2 className='menu-title'>Menu</h2>
            <div className='menuCategory'>
              {menuData.map((menuCategory, index) => (
                <div key={index}>
                  <h2>{menuCategory.title}</h2>
                  <p>{menuCategory.description}</p>

                  <Items items={menuCategory.items} />
                </div>
              ))}
            </div>
              
            </div>
          </div>

      </div>
    </div>
  );
};

export default Order;