import React, { Component } from 'react';
import './Main.css';
const PUBLIC_URL = process.env.PUBLIC_URL;


class Main extends Component {
        
    render () {
      return (
        <div className="main">
        <a href="" id="about"></a>
            <div className="site-container">
              <div className="left">
                <img src={PUBLIC_URL + "/images/man.png"} width="550px" height="700px" />
              </div>
              <div className="right">
                <p className="name">My Name Is Artyom Guzhevnikov</p>
                <p className="web">I'am Junior  web Developer having Month of Experience</p>
                <p className="description">Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Reiciendis voluptate,<br/> illo cum commodi. At, architecto, non.Libero <br/>nihil illo qui? Minus temporibus tenetur <br/>fuga quis voluptate ipsum rerum aliquam magnam!</p>
                <ul className="question">
                  <li>Full Name :</li>
                  <li>Age :</li>
                  <li>Adress :</li>
                  <li>Phone Number :</li>
                  <li>Email :</li>
                </ul>
                <ul className="response">
                  <li>Artyom Guzhevnikov</li>
                  <li>20</li>
                  <li>street Matusevicha</li>
                  <li>+375298870175</li>
                  <li>artoymguzhevnikov@gmail.com</li>
                </ul><br/>
                <button className="number">Contact Us</button>
              </div>
            </div>
          </div>
      );
      
    }
}

     


export default Main;
