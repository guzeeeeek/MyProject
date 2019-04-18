import React, { Component } from 'react';
import './Promo.css';
const PUBLIC_URL = process.env.PUBLIC_URL;


class Promo extends Component {
        
    render () {
      return (
        <div className="promo">
            <div className="site-container">
              <p>Welcome!</p>
              <h1>I'm  Web Developer</h1>
              <ul>
                <li><a href=""><img src={PUBLIC_URL + "/images/vk.svg"} width="30px" height="30px"/></a></li>
                <li><a href=""><img src={PUBLIC_URL + "/images/gmail.svg"} width="30px" height="30px"/></a></li>
                <li><a href=""><img src={PUBLIC_URL + "/images/instagram.svg"} width="30px" height="30px"/></a></li>
                <li><a href=""><img src={PUBLIC_URL + "/images/twitter.svg"} width="30px" height="30px"/></a></li>
                <object type="image/svg+xml" data="/images/vk.svg" className="icon" width="30px" height="30px" ></object>


               
              </ul> 
            </div>
            
          </div>
      );
      
    }
}

     


export default Promo;
