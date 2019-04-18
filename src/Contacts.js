import React, { Component } from 'react';
import './Contacts.css';
const PUBLIC_URL = process.env.PUBLIC_URL;


class Contacts extends Component {
        
    render () {
      return (
        
        <div className="contacts">
        <a href="" id="contact"></a>
            <div className="site-container">
              <h4>Contact Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus molestie, justo nec convallis sollicitudin.</p>
              <form>
                <input type="text" name="name" placeholder="Name*" ></input>
                <input type="email" name="email" placeholder="Email*"></input><br/>
                <input type="text" name="subject" placeholder="Subject*"></input><br/>
                <input type="text" name="message" placeholder="Your Message Here"></input><br/>
                <button>Send Your Message</button>
              </form>
              <p className="CopyRight">CopyRight © 2019 Guzhevnikov All Rights Reserved</p>
            </div>
          </div>
      );
      
    }
}

     


export default Contacts;
