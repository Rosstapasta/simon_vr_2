import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import {Entity} from 'aframe-react';
import axios from 'axios';

export default class Initials extends Component{
    constructor(){
        super()

        this.state = {
            nameOption: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            iOne: 0,
            iTwo: 0,
            iThree: 0,
            sent: false,

            iThreeColor: '#cd77ff',
            iTwoColor: '#cd77ff',
            iOneColor: '#cd77ff',
        }
    }

    sendScore(){
        this.setState({sent: true})
        const {iOne, iTwo, iThree, nameOption} = this.state;
        var initials = nameOption[iThree] + nameOption[iTwo] + nameOption[iOne];
        var score = this.props.children;
        console.log(score, 'score');
        axios.post('/sendscore', {initials, score}).then( res => {
            console.log("success")
        })
    }

    letterChange(val){
        const { iOne, iTwo, iThree } = this.state;
        if(val === 1){
          let newVal = iOne;
          if(newVal >= 25){
            newVal = 0;
          }else{
            newVal++;
          }
          this.setState({iOne: newVal, iOneColor: '#ff0000'})
        }else if(val === 2){
          let newVal = iTwo;
          if(newVal >= 25){
            newVal = 0;
          }else{
            newVal++;
          }
          this.setState({iTwo: newVal, iTwoColor: '#ff0000'})
        }else if(val === 3){
          let newVal = iThree;
          if(newVal >= 25){
            newVal = 0;
          }else{
            newVal++;
          }
          this.setState({iThree: newVal, iThreeColor: '#ff0000'})
        }
    }

    render(){
        return (
            <Entity>
                
                {/* iOne */}
                <a-entity 
                    text-geometry={`value: ${this.state.nameOption[this.state.iOne]}`} 
                    position='7 2.5 -3.1' 
                    scale='2 2 2'
                    rotation="0 -25 0"
                    material="color: black">
                </a-entity>
                <Entity 
                    geometry="primitive: box;" 
                    position="7.5 2.9 -2.9"
                    scale="1.2 1.5 .4"
                    material={{color: this.state.iOneColor, opacity: 0.5}}
                    events={{click: () => this.letterChange(1)}}
                    rotation="0 -25 0"
                    animation__mousein1="property: material.color; dur: 1; easing: linear; from: #cd77ff; to: #ff0000; startEvents: mouseenter;">
                </Entity>

                {/* iTwo */}
                <a-entity 
                    text-geometry={`value: ${this.state.nameOption[this.state.iTwo]}`} 
                    position='5.5 2.5 -3.8' 
                    scale='2 2 2'
                    material="color: black"
                    rotation="0 -25 0">
                </a-entity>
                <Entity 
                    geometry="primitive: box;" 
                    position="6 2.9 -3.6"
                    scale="1.2 1.5 .4"
                    material={{color: this.state.iTwoColor, opacity: 0.5}}
                    events={{click: () => this.letterChange(2)}}
                    rotation="0 -25 0"
                    animation__mousein2="property: material.color; dur: 1; easing: linear; from: #cd77ff; to: #ff0000; startEvents: mouseenter;">
                </Entity>
                
                {/* iThree */}
                <a-entity 
                    text-geometry={`value: ${this.state.nameOption[this.state.iThree]}`} 
                    position='4 2.5 -4.5' 
                    scale='2 2 2'
                    material="color: black"
                    rotation="0 -25 0">
                </a-entity>
                <Entity 
                    geometry="primitive: box;" 
                    position="4.5 2.9 -4.3"
                    scale="1.2 1.5 .4"
                    material={{color: this.state.iThreeColor, opacity: 0.5}}
                    events={{click: () => this.letterChange(3)}}
                    rotation="0 -25 0"
                    animation__mousein3="property: material.color; dur: 1; easing: linear; from: #cd77ff; to: #ff0000; startEvents: mouseenter;">

                </Entity>

                {/* submitButton */}
                {this.state.sent ? <Entity>{
                    <Entity 
                        geometry="primitive: box;" 
                        position="6 1.2 -3.6"
                        scale="2.1 .8 .4"
                        material={{color: "#cd77ff", opacity: .5}}
                        rotation="0 -25 0">
                        <a-entity
                        text-geometry="value: Success"
                        position="-.38 -.2 0"
                        rotation="0 0 0"
                        scale=".23 .92 .5"
                        material="color: black">
                        </a-entity>
                    </Entity>
                }</Entity> : 
                    <Entity 
                        geometry="primitive: box;" 
                        position="6 1.2 -3.6"
                        scale="2.1 .8 .4"
                        material={{color: "#cd77ff", opacity: .5}}
                        events={{click: () => this.sendScore()}}
                        rotation="0 -25 0">
                        <a-entity
                        text-geometry="value: Submit Sore"
                        position="-.38 -.2 0"
                        rotation="0 0 0"
                        scale=".23 .92 .5"
                        material="color: black">
                        </a-entity>
                    </Entity>
                }
                
            </Entity>
        )
    }
}


