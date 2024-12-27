import React from 'react';
import menu from '../../assets/menu.jpg';
import "./Menu.css";




const Menu = () => {
  return (
    <div className='menu-page'>
      <h1>Our Menu</h1>
      <div className='menu-wrapper'>
        <img src={menu} alt="menu-img" className='menu-img'/>

        <div className='menu-content'>
          {/* Starters Section */}
          <div className="menu-section">
            <h2>Starters</h2>
            <p className="section-description">
              I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.
            </p>
            <div className="menu-item">
              <div>
                <strong>Homemade Nachos</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Mexican Grilled Corn</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Chicken Fajita Salad</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Mini Quesadillas</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
          </div>

          {/* Tacos & Tostadas Section */}
          <div className="menu-section">
            <h2>Tacos & Tostadas</h2>
            <p className="section-description">
              I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.
            </p>
            <div className="menu-item">
              <div>
                <strong>Grilled Chicken</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Crispy Fish</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Marinated Pork</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item">
              <div>
                <strong>Mixed Vegetables</strong>
                <p className="dish-description">
                  I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.
                </p>
              </div>
              <span className="price">$9</span>
            </div>
          </div>

          {/* Drinks Section */}
          <div className="menu-section">
            <h2>Drinks</h2>
            <div className="menu-item drink">
              <div>
                <strong>Mineral Water</strong>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item drink">
              <div>
                <strong>Sparkling Water</strong>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item drink">
              <div>
                <strong>Mexican Beer</strong>
              </div>
              <span className="price">$9</span>
            </div>
            <div className="menu-item drink">
              <div>
                <strong>Margarita Cocktail</strong>
              </div>
              <span className="price">$9</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;