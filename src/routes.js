import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorldOne from './comps/worlds/worldOne.js';
import Home from './comps/home/Home.js';

export default () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/simon' component={WorldOne}/>
        </Switch>
    )
}