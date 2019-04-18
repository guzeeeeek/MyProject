import React, { Component } from 'react';
import './Portfolio.css';
import ToDo from './ToDo.js';
import BodyMass from './BodyMass.js';

const PUBLIC_URL = process.env.PUBLIC_URL;


class Portfolio extends Component {
    constructor(props) {
      super(props);

      this.showToDo = this.showToDo.bind(this);
      this.showBodyMass = this.showBodyMass.bind(this);
      }

    showToDo(event) {
      let showContainer = event.target.closest('.portfolio').querySelector('.showToDo');

      if (showContainer.style.display == 'none') {
        showContainer.style.display = 'block';
      } else {
        showContainer.style.display = 'none';
      }
    }
    
    showBodyMass(event) {
      let showContainer = event.target.closest('.portfolio').querySelector('.showBodyMass');

      if (showContainer.style.display == 'none') {
        showContainer.style.display = 'block';
      } else {
        showContainer.style.display = 'none';
      }
    }
  

    render () {
      return (
        
        
        <div className="portfolio">
        <a href="" id="portfolioo"></a>
            <div className="site-container">
              <h4>My Portfolio</h4>
              <p className="description_portfolio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus molestie, justo nec convallis sollicitudin.</p>
              <div className="projects">
                <div className="todo" id="ToDoList" onClick={this.showToDo}>
                <img src={PUBLIC_URL + "/images/to-do-list.svg"}  width='120px' height='140px' alt=" " /><br/>
                <p className="to-do-list">ToDoList</p>
                </div>
                <div className="mass" onClick={this.showBodyMass}>
                <img src={PUBLIC_URL + "/images/body-mass-index.svg"}  width='120px' height='140px' color='orange' alt=" " /><br/>
                <p className="body-mass-index">Body Mass Index</p>
                </div>
                <div className="car">
                <img src={PUBLIC_URL + "/images/input.svg"}  width='120px' height='140px' color='orange' alt=" " /><br/>
                <p className="car_input">Car Input</p>

                </div>
              </div>
              <div className="showToDo" style={{
                  display: 'none'
                }}>
                  
                  <ToDo />
                </div>
                <div className="showBodyMass" style={{
                  display:'none'
                }}>
                 <BodyMass />
                </div>
          </div>
        </div>  
      );
      
    }
}

     


export default Portfolio;
