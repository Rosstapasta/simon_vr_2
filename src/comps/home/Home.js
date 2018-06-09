import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Simon from './homeMedia/simon.png';

class Home extends Component {

  render() {
    return (
      <div>
          <div className='wraper1'>


              <div className="world">

              <div className="simon">Simon</div>

                {/* simon_DSKT_button */}
              <Link to='/simon/DSKT'>    
              <button 
                className="buttonOne">
                <div className="buttonFont">Mouse Controls
                  </div>
              </button>
              </Link>

                  {/* simon_vr_button */}
              <Link to='/simon/VR'>
              <button 
                id="two"
                className="buttonOne">
                <div className="buttonFont">Oculus Controls
                  </div>
              </button>
              </Link>

              </div>

          </div>
        
      </div>
    );
  }
}

export default Home;