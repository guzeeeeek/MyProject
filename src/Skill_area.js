import React, { Component } from 'react';
import './Skill_area.css';
const PUBLIC_URL = process.env.PUBLIC_URL;


class Skill_area extends Component {
        
    render () {
      return (
            <div className="skill_area" >
              <div className="site-container">
                <div className="Html">
                  <span className="one">HTML5</span><br/>
                  <div className="progress">
                    <div className="progress-bar-html">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
                <div className="Css">
                  <span className="one">CSS3</span><br/>
                  <div className="progress">
                    <div className="progress-bar-css">
                      <span>75%</span>
                    </div>
                  </div>
                </div>
                <div className="JavaScript">
                  <span className="one">JavaScript</span><br/>
                  <div className="progress">
                    <div className="progress-bar-javascript">
                      <span>60%</span>
                    </div>
                  </div>
                </div>
                <div className="React">
                  <span className="one">React</span><br/>
                  <div className="progress">
                    <div className="progress-bar-react">
                      <span>55%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
      );
      
    }
}

     


export default Skill_area;
