import React, { Component } from 'react';
import './Header.css';
const PUBLIC_URL = process.env.PUBLIC_URL;



class Header extends Component {
        
    render () {
      return (
        <div className="header">
            <div className="site-container">
                
              <ul>
                <li><a href="#home" className="homeguzh">Guzhevnikov</a></li>
                <li><a href="#home" className="home">Home</a></li>
                <li><a href="#about" className="about">About</a></li>
                <li><a href="#portfolioo" className="portfolioo">Work</a></li>
                <li><a href="#contact" className="contact">Contact</a></li>
                <div className="section">
  <div className="menu-block">
    <nav className="menu-nav">
      <a href="#home" className="home">Home</a>
      <a href="#about" className="about">About</a>
      <a href="#portfolioo" className="portfolioo">Work</a>
      <a href="#contact" className="contact">Contact</a>
    </nav>
    
    <a href="###" className="menu-btn">
      <span></span>
    </a>
    
  </div>
</div> 
              </ul>
  
            </div>

          </div>
          
      );
      
    }
}

     


export default Header;
