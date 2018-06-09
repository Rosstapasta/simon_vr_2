import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Simon from './homeMedia/simon.png';
import Demo from './homeMedia/demo.mp4';
import OldSimon from './homeMedia/oldSimon.png';

class Home extends Component {

  render() {
    return (
      <div>
          <div className='wraper1'>


          <div className="parallax">
              <div className="world">
                <div className="simon">Simon</div>

                  {/* simon_DSKT_button */}
                <Link to='/simon/DSKT'>    
                <button 
                  className="buttonOne">
                  <div className="buttonFont">
                    Mouse Controls
                  </div>
                </button>
                </Link>

                    {/* simon_vr_button */}
                <Link to='/simon/VR'>
                <button 
                  id="two"
                  className="buttonOne">
                  <div className="buttonFont">
                    Oculus Controls
                  </div>
                </button>
                </Link>
              </div>
          </div>

          <div className="ContentCon">
            <div className="content">


            <div className="textMedia">
            <h1>
              Thank you for visiting! Simon VR was built using React and A-frame.
            </h1>
            
            <video 
              id="video-background"
              width="450"
              autoPlay="true" 
              loop>
              <source 
                src={Demo} 
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <h3>DEMO</h3>
            </div>

            <div className="textMedia">
              <h1 id="text2">I originally created Simon as a static app. After playing around with Aframe for a bit I decided it would be fun to recreate it for my oculus rift. 
                {/* This version is still a bit buggy, my coding isnt perfect but im getting better. */}
              </h1>
              <img className="simonImg" src={OldSimon} alt='simon'/>
              <h3>STATIC VERSION</h3>
            </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;