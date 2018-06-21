import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Demo from './homeMedia/demo.mp4';
import OldSimonVid from './homeMedia/oldSimonVid333.mp4';

class Home extends Component {

  render() {
    return (
      
        <div className='wraper1'>

          <div className="parallax">
              <div className="world">
              
                <div className="simon">
                  SIMON
                </div>

                <div className='buttonRow'>
                  {/* simon_DSKT_button */}
                  <Link to='/simon/DSKT'>    
                  <button 
                    className="buttonOne">
                    <div className="buttonFont">
                      wasd/Mouse
                    </div>
                  </button>
                  </Link>

                  {/* simon_vr_button */}
                  <Link to='/simon/VR'>
                  <button 
                    id="two"
                    className="buttonOne">
                    <div className="buttonFont">
                      Oculus Touch
                    </div>
                  </button>
                  </Link>
                </div>

              </div>
          </div>

          <div className="ContentCon">
            <div className="content">


            <div className="textMedia">
              <h1 className="captions">Thank you for visiting! Simon VR was built using React and A-frame.</h1>
              
              <div className="vidBlock">
              <h1 style={{borderBottom: "5px solid #77dbff"}}>SIMON VR</h1>

              <video 
                id="video-background"
                width="450"
                autoPlay="true" 
                loop
                className="simonVid">
                <source 
                  src={Demo} 
                  type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              </div>
              <h3>View Source - github.com/Rosstapasta/simon_vr_2</h3>

            </div>

            <div className="textMedia">
              <h1 id="text2">
                I originally recreated Simon as a static app. After playing around with Aframe for a bit I thought it would be fun to make it again for my oculus rift. 
              </h1>

              <div className="vidBlock">

                <h1 style={{borderBottom: "5px solid #77dbff"}}>ORIGINAL</h1>

                <video 
                id="video-background"
                width="450"
                autoPlay="true" 
                loop
                className="simonVid">
                <source 
                  src={OldSimonVid} 
                  type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>

              </div>
                <h3>View Source - github.com/Rosstapasta/firstgame-simon</h3>
            </div>

            </div>
          </div>

          <div className="parallax">
              <div id='world2' className="world">
                <div className="simon">Original</div>

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
          </div>
            
          {/* footer */}
          <div id="cc2" className="ContentCon">
              <h1 className="footerText">THANKS FOR PLAYING.</h1>
          </div>


        </div>
    
    );
  }
}

export default Home;