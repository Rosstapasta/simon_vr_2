import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';

export default class PlayerScore extends Component{


    render(){
        var score = this.props.children;
        var scoreArr = score.split("");
        return (
            <Entity>
            <a-plane
                position="0 6 -5"
                rotation="20 0 0"
                width="5"
                height="3"
                color="#ffe677"
                opacity='.5'
                static-body>
                
                <Entity 
                    geometry="primitive: box;" 
                    position="0 .5 .1"
                    rotation="0 0 0"
                    scale="4.4 1.3 .4"
                    material={{color: "red", opacity: .5}}>
                </Entity>
                <a-entity 
                    text-geometry={`value: SCORE`} 
                    position='-2 .05 0' 
                    scale='1.8 1.8 1.8'
                    rotation="0 0 0"
                    material="color: black">
                </a-entity>

                <Entity
                    geometry="primitive: box;"
                    position="-1.7 -.85 .1"
                    rotation="0 0 0"
                    scale=".9 .9 .4"
                    material={{color: "#cd77ff", opacity: .5}}>
                    <a-entity
                        text-geometry={`value: 0`} 
                        position='-.4 -.4 0' 
                        scale='1.8 1.8 1.8'
                        rotation="0 0 0"
                        material="color: black">>
                    </a-entity>
                </Entity>

                <Entity
                    geometry="primitive: box;"
                    position="-.55 -.85 .1"
                    rotation="0 0 0"
                    scale=".9 .9 .4"
                    material={{color: "#cd77ff", opacity: .5}}>
                    <a-entity
                        text-geometry={`value: 0`} 
                        position='-.4 -.4 0' 
                        scale='1.8 1.8 1.8'
                        rotation="0 0 0"
                        material="color: black">>
                    </a-entity>
                </Entity>

                <Entity
                    geometry="primitive: box;"
                    position=".59 -.85 .1"
                    rotation="0 0 0"
                    scale=".9 .9 .4"
                    material={{color: "#cd77ff", opacity: .5}}>
                    <a-entity
                        text-geometry={`value: ${scoreArr[0]}`} 
                        position='-.4 -.4 0' 
                        scale='1.8 1.8 1.8'
                        rotation="0 0 0"
                        material="color: black">>
                    </a-entity>
                </Entity>

                <Entity
                    geometry="primitive: box;"
                    position="1.7 -.85 .1"
                    rotation="0 0 0"
                    scale=".9 .9 .4"
                    material={{color: "#cd77ff", opacity: .5}}>
                    <a-entity
                        text-geometry={`value: ${scoreArr[1]}`} 
                        position='-.4 -.4 0' 
                        scale='1.8 1.8 1.8'
                        rotation="0 0 0"
                        material="color: black">>
                    </a-entity>
                </Entity>

            </a-plane>
            </Entity>
        )
    }
}