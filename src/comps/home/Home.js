import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Simon from './homeMedia/simon.png';

class Home extends Component {
  render() {
    return (
      <div>
          <div className='wraper1'>
              <Link to='/simon'><img className="icon" src={Simon} alt='simon'/></Link>
          </div>
        
      </div>
    );
  }
}

export default Home;