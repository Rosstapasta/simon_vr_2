import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Routes from './routes.js';
import 'super-hands';
import Navbar from './comps/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App" >

        <header style={{position: 'fixed', zIndex: '2'}}>
          <Navbar></Navbar>
        </header>
        
        <div style={{position: 'relative', top: '17vh', zIndex: '1'}}>
          <Routes/>
        </div>

      </div>
    );
  }
}

export default App;
