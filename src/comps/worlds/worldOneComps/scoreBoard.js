import React, { Component } from 'react';
import 'aframe';
import 'aframe-area-light-component';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';
import axios from 'axios';

export default class ScoreBoard extends Component{
    constructor(){
        super()

        this.state = {
            scores: [{initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}, {initials: 'aaa', score: "00"}]
        }
    }

    getScores(){
        axios.get('/highscores').then(res => {
            this.setState({scores: res.data})
        })
    }

    componentWillMount(){
        this.getScores();
    }

    render(){
        // if(this.props.children){
        //     this.getScores();
        // }
        return (
            <Entity>
            <a-plane
                position="-6 2 -3.65"
                rotation="0 25 0"
                width="5"
                height="9"
                color="#ffe677"
                opacity='.5'
                static-body>

                    {/* hightscore box */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 3.9 0"
                        rotation="0 0 0"
                        scale="3 .6 .3"
                        material={{color: "red", opacity: .5}}>
                        
                    </Entity>
                    <a-entity 
                        text-geometry={`value: HIGH SCORES`} 
                        position='-1.1.5 3.8 0' 
                        scale='.5 .5 .5'
                        rotation="0 0 0"
                        material="color: black">
                    </a-entity>

                    {/* rank score name boxes */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="-1.6 2.9 0"
                        rotation="0 0 0"
                        scale="1 .4 .3"
                        material={{color: "red", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: Rank`} 
                            position='-.35 0 0' 
                            scale='.5 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 2.9 0"
                        rotation="0 0 0"
                        scale="1 .4 .3"
                        material={{color: "red", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: Score`} 
                            position='-.45 0 0' 
                            scale='.5 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>
                    <Entity 
                        geometry="primitive: box;" 
                        position="1.6 2.9 0"
                        rotation="0 0 0"
                        scale="1 .4 .3"
                        material={{color: "red", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: Name`} 
                            position='-.45 0 0' 
                            scale='.5 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                    {/* 1st */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 2.2 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 1st`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[0].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[0].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>
                    
                    {/* 2nd */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 1.6 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 2nd`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[1].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[1].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                        {/* 3rd */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 1 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 3rd`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[2].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[2].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                    {/* 4th */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 .4 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 4th`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[3].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[3].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                    {/* 5th */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 -.2 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 5th`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[4].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[4].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                    {/* 6th */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 -.8 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 6th`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[5].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[5].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                    {/* 7th */}
                    <Entity 
                        geometry="primitive: box;" 
                        position="0 -1.4 0"
                        rotation="0 0 0"
                        scale="4.2 .4 .3"
                        material={{color: "#cd77ff", opacity: .5}}>
                        <a-entity 
                            text-geometry={`value: 7th`} 
                            position='-.45 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[6].score}`} 
                            position='-.04 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                        <a-entity 
                            text-geometry={`value: ${this.state.scores[6].initials}`} 
                            position='.32 -.2 0' 
                            scale='.1 .8 .5'
                            rotation="0 0 0"
                            material="color: black">
                        </a-entity>
                    </Entity>

                </a-plane>
            </Entity>
        )
    }
}