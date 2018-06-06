import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';
import axios from 'axios';

export default class Initials extends Component{
    constructor(){
        super()

        this.state = {
            nameOption: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            iOne: 0,
            iTwo: 0,
            iThree: 0,
        }
    }

    sendScore(){
        const {iOne, iTwo, iThree, nameOption} = this.state;
        var initials = nameOption[iThree] + nameOption[iTwo] + nameOption[iOne];
        var score = this.props.children;
        console.log(score, 'score');
        axios.post('/sendscore', {initials, score}).then( res => {
            alert('success')
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
          this.setState({iOne: newVal})
        }else if(val === 2){
          let newVal = iTwo;
          if(newVal >= 25){
            newVal = 0;
          }else{
            newVal++;
          }
          this.setState({iTwo: newVal})
        }else if(val === 3){
          let newVal = iThree;
          if(newVal >= 25){
            newVal = 0;
          }else{
            newVal++;
          }
          this.setState({iThree: newVal})
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
                    rotation="90 0 0"
                    scale="1.2 1.5 .4"
                    material={{color: "#cd77ff", opacity: .5}}
                    events={{click: () => this.letterChange(1)}}
                    rotation="0 -25 0">
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
                    rotation="90 0 0"
                    scale="1.2 1.5 .4"
                    material={{color: "#cd77ff", opacity: .5}}
                    events={{click: () => this.letterChange(2)}}
                    rotation="0 -25 0">
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
                    rotation="90 0 0"
                    scale="1.2 1.5 .4"
                    material={{color: "#cd77ff", opacity: .5}}
                    events={{click: () => this.letterChange(3)}}
                    rotation="0 -25 0">
                </Entity>


                {/* submitButton */}
                <Entity 
                    geometry="primitive: box;" 
                    position="6 1 -3.6"
                    rotation="90 0 0"
                    scale="1.2 1.5 .4"
                    material={{color: "#cd77ff", opacity: .5}}
                    events={{click: () => this.sendScore()}}
                    rotation="0 -25 0">
                </Entity>
                
            </Entity>
        )
    }
}


