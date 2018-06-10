import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Simon from './homeMedia/simon.png';
import Demo from './homeMedia/demo.mp4';
import OldSimonVid from './homeMedia/oldSimonVid333.mp4';
import OldSimon from './homeMedia/oldSimon.png';

import Footer from '../footer/footer.js';

class Home extends Component {

  render() {
    return (
      
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
              <h1 id="text2">I originally recreated Simon as a static app. After playing around with Aframe for a bit I thought it would be fun to make it again for my oculus rift. 
                {/* This version is still a bit buggy, my coding isnt perfect but im getting better. */}
              </h1>
              {/* <img className="simonImg" src={OldSimon} alt='simon'/> */}
              <video 
              id="video-background"
              width="450"
              autoPlay="true" 
              loop>
              <source 
                src={OldSimonVid} 
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
              <h3>STATIC VERSION</h3>
            </div>

            </div>
          </div>

          <div className="parallax">
              <div className="world">
                <div className="simon">Static</div>

                  {/* simon_DSKT_button */}
                <Link to='/oldsimon'>    
                <button 
                  className="buttonOne">
                  <div className="buttonFont">
                    PLAY
                  </div>
                </button>
                </Link>
              </div>
              {/* <div className="footer_home">
          <Footer/>

              </div> */}
          </div>

          <div id="cc2" className="ContentCon">

            </div>


        </div>
    
    );
  }
}

export default Home;