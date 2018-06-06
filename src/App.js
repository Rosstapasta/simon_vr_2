import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Routes from './routes.js';
import 'super-hands';

class App extends Component {
  render() {
    return (
      <div className="App" >

        <header className="App-header" style={{position: 'relative', zIndex: '2'}}>
          welcome to erix stuff
        </header>
        
        <div style={{position: 'relative', top: '0px', zIndex: '1'}}>
          <Routes/>
        </div>

      </div>
    );
  }
}

export default App;
