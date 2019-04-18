import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Promo from './Promo.js';
import Skill_area from './Skill_area.js';
import Portfolio from './Portfolio.js';
import Contacts from './Contacts.js';
import './App.css';
import './media.css';

const PUBLIC_URL = process.env.PUBLIC_URL;


class App extends Component {
        
    render () {
      return (
        
        <div>
        
            <Header />
            <Promo />
            <Main />
            <Skill_area />
            <Portfolio />
            <Contacts />
          
        </div>
      );
      
    }
}

     


export default App;
