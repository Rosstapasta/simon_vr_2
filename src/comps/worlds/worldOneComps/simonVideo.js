// comp has issues


import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import {Entity} from 'aframe-react';
import simonvideo from '../worldOneMedia/simon2.mp4';

export default class SimonVid extends Component{
    render(){
        return (
            <Entity>
                <a-video
                    src={simonvideo}
                    position='0 .2 .15'
                    rotation='0 0 0'
                    scale='4.1 3.5 3.5'
                    volume="0">
                </a-video>
            </Entity>
        )
    }
}