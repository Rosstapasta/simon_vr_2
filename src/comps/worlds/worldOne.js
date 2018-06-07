import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-area-light-component';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import './worldOne.css';

import sound1 from './worldOneMedia/sound1.mp3';
import sound2 from './worldOneMedia/sound2.mp3';
import sound3 from './worldOneMedia/sound3.mp3';
import sound4 from './worldOneMedia/sound4.mp3';
import sound5 from './worldOneMedia/sound5.mp3';

import Initials from './worldOneComps/Initials.js';
import PlayerScore from './worldOneComps/playerScore.js';
import ScoreBoard from './worldOneComps/scoreBoard.js';

class WorldOne extends Component {
  constructor(){
    super()

    this.state = {
      colorRed: 'red',
      colorBlue: 'blue',
      colorGreen: 'green',
      colorYellow: 'yellow',

      sequence: [],
      playerSeq: [],
      round: 0,

      // sound1: false,
      score: 0,
      score2: '00',

      nameOption: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      iOne: 0,
      iTwo: 0,
      iThree: 0,

      enterInitials: false
    }
    this.playerInput = this.playerInput.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }


  seqStart(){
    const {sequence} = this.state;
    var random = sequence;
    random.push(Math.floor(Math.random() * 4) + 1);
    
    this.setState({ sequence: random, enterInitials: false}, () => {

        var timesX = 0;
        var timesX2 = 1;

      for(let i = 0; i < random.length; i++){

        if(random[i] === 1){

          setTimeout( () => {
            this.setState({colorRed: 'purple'})
          }, 1000 * timesX)
          setTimeout( () => {
            this.setState({colorRed: 'red'})
          }, 1000 * timesX2)

        }else if(random[i] === 2){

          setTimeout( () => {
            this.setState({colorYellow: 'purple'})
          }, 1000 * timesX)
          setTimeout( () => {
            this.setState({colorYellow: 'yellow'})
          }, 1000 * timesX2)

        }else if(random[i] === 3){

          setTimeout( () => {
            this.setState({colorBlue: 'purple'})
          }, 1000 * timesX)
          setTimeout( () => {
            this.setState({colorBlue: 'blue'})
          }, 1000 * timesX2)

        }else if(random[i] === 4){

          setTimeout( () => {
            this.setState({colorGreen: 'purple'})
          }, 1000 * timesX)
          setTimeout( () => {
            this.setState({colorGreen: 'green'})
          }, 1000 * timesX2)

        }
        timesX += 1;
        timesX2 += 1;
        this.setState({score: this.state.sequence.length -1})
      }
    })
  }

  playerInput(val){

    var newSeq = this.state.playerSeq;
    var seqPiece = this.state.sequence;
    newSeq.push(val);
   
    this.setState({playerSeq: newSeq }, () => {
      const {playerSeq, sequence} =  this.state;
      var seqPiece2 = seqPiece.slice(0, playerSeq.length);
     
      if(playerSeq.length === sequence.length && playerSeq.toString() === sequence.toString()){

        const {score2} = this.state;
        var newScore = score2;
        if(newScore < 9){
          newScore++;
          var newScore2 = '0' + newScore;
          this.setState({score2: newScore2})
        }else if(newScore >= 9 ){
          newScore++;
          var newScore3 = '' + newScore;
          this.setState({score2: newScore3})
        }

        this.setState({playerSeq: []}, () => {return this.seqStart()})
      }else if(playerSeq.length === sequence.length && playerSeq.toString() !== sequence.toString()){
        // alert('you loose!');
        this.setState({sequence: [], playerSeq: [], enterInitials: true})
      }else if(playerSeq.toString() !== seqPiece2.toString()){
        // alert('you loose!');
          this.setState({sequence: [], playerSeq: [], enterInitials: true})
      }
    })
  }

  changeColor(val){

    if(val === 'red'){
      this.setState({colorRed: 'purple', sound1: true})
      setTimeout( () => {
        this.setState({colorRed: 'red', sound1: false}, 
        () => this.playerInput(1))
      }, 1000)
    }else if(val === 'green'){
      this.setState({colorGreen: 'purple'})
      setTimeout( () => {
        this.setState({colorGreen: 'green'}, 
        () => this.playerInput(4))
      }, 1000)
    }else if(val === 'blue'){
      this.setState({colorBlue: 'purple'})
      setTimeout( () => {
        this.setState({colorBlue: 'blue'}, 
        () => this.playerInput(3))
      }, 1000)
    }else if(val === 'yellow'){
      this.setState({colorYellow: 'purple'})
      setTimeout( () => {
        this.setState({colorYellow: 'yellow'}, 
        () => this.playerInput(2))
      }, 1000)
    }
  }


  render() {

    return (
      <div className="worldOne">
        <Scene background="color: #ffa277">

            {/* wont run on macbook use pc */}
          {/* <a-entity position="0 2.25 -15" particle-system="preset: dust"></a-entity> */}


          <a-plane 
            position="0 0 0" 
            rotation="-90 0 0" 
            width="100" 
            height="100" 
            color="#77dbff" 
            static-body>
          </a-plane>

          <a-cylinder 
            position="0 0.5 0" 
            radius="10" 
            height="6" 
            side="back" 
            open-ended="true"
            color="#ffb9b5">
          </a-cylinder>

          {/* cant run this line on macbook use pc */}
          {/* <a-entity area-light="intensity:4; width:1; height:1; color: #FFFFFF;"></a-entity> */}

          <ScoreBoard></ScoreBoard>

          <PlayerScore>{this.state.score2}</PlayerScore>

          {/* player initials */}
          {this.state.enterInitials ? <Entity>{
            <Initials>{this.state.score2}</Initials>
          }</Entity> :
          <Entity/>}

            {/* namePlane */}
          <a-plane
            position="6 2 -3.65"
            rotation="0 -25 0"
            width="5"
            height="9"
            color="#ffe677"
            opacity='.5'
            static-body>
                <Entity 
                    geometry="primitive: box;" 
                    position="0 3 0"
                    rotation="0 0 0"
                    scale="4.4 1.3 .4"
                    material={{color: "red", opacity: .5}}>
                </Entity>

                <a-entity 
                    text-geometry={`value: NAME`} 
                    position='-1.9 2.5 0' 
                    scale='2 2 2'
                    rotation="0 0 0"
                    material="color: black">
                </a-entity>
          </a-plane>



            {/* simon */}
            {/* base */}
          <Entity 
            geometry="primitive: cylinder; height: .5; radius: 2;" 
            material={{color: 'black'}} 
            position='0 2 -5' 
            rotation='90 0 0'>


              {/* Middle */}
            <Entity
              geometry="primitive: cylinder; heigth: .9; radius: .9"
              material={{color: 'black'}}
              position='0 .23 0' 
              rotation='0 0 0'
              scale="1 .8 1">
              <Entity
                geometry="primitive: cylinder; heigth: .9; radius: .9"
                material={{color: 'grey'}}
                position='0 .23 0' 
                rotation='0 0 0'
                scale=".9 .6 .9">

                {/* start */}
                <Entity
                  geometry="primitive: cylinder; height: .9; radius: .1"
                  material ={{color: 'green'}}
                  position=".4 .15 .2"
                  rotation='0 0 0'
                  scale='1 1 1'
                  events={{click: () => this.seqStart()}}>
                  <a-animation
                    begin="click"
                    attribute='position'
                    duration='500'
                    to='.4 .15 .2'
                    from='.4 .08 .2'
                    repeat='0'>
                  </a-animation>
                </Entity>

                  {/* simon text */}
                <a-entity
                  text-geometry="value: Simon"
                  position="-.54 .5 -.24"
                  scale=".6 .5 .6"
                  rotation="270 0 0"
                  material="color: black">
                </a-entity>

                {/* count */}
                <Entity
                  geometry="primitive: box;"
                  material={{color: 'black'}}
                  position='-.35 .5 .2'
                  rotation='0 0 0'
                  scale='.4 .1 .3'>
                  <a-entity 
                      text-geometry={`value: ${this.state.score2}`} 
                      position='-.4 .5 .3' 
                      scale='1 1 1'
                      rotation="270 0 0"
                      material="color: red">
                  </a-entity>
                </Entity>
              </Entity>

              <Entity
                geometry="primitive: box;"
                material={{color: 'black'}}
                position='0 .1 0'
                rotation='0 45 0'
                scale='3.4 .5 .1'>
              </Entity>
              <Entity
                geometry="primitive: box;"
                material={{color: 'black'}}
                position='0 .1 0'
                rotation='0 -45 0'
                scale='3.4 .5 .1'>
              </Entity>

            </Entity>

            {/* blue */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorBlue}} 
              position='0 .3 0' 
              rotation='0 135 0'
              events={{click: () => this.changeColor('blue')}}>
              <a-animation
                begin="click"
                attribute='position'
                duration='500'
                from='0 .09 0'
                to='0 .3 0'
                repeat='0'>
              </a-animation>
            </Entity>

            {/* red */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorRed}} 
              position='0 .3 0' 
              rotation='0 315 0'
              // sound={`src: ${sound1}; on: click`}
              scale="1 1 1"
              events={{click: () => this.changeColor('red')}}>
              {/* <a-sound src={sound1} autoplay="false" on='click' position="0 2 5"></a-sound>   */}
              <a-animation
                begin="click"
                attribute='position'
                duration='500'
                from='0 .09 0'
                to='0 .3 0'
                repeat='0'
                easing='ease'>
              {/* <a-sound src={sound1}></a-sound> */}
              {/* <audio autoplay={this.state.sound1} src={sound1} type="audio/mp3" ></audio> */}
              </a-animation>
            </Entity>

              {/* yellow */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorYellow}} 
              position='0 .3 0' 
              rotation='0 45 0'
              events={{click: () => this.changeColor('yellow')}}>
            <a-animation
              begin="click"
              attribute='position'
              duration='500'
              from='0 .09 0'
              to='0 .3 0'
              repeat='0'
              easing='ease'>
              </a-animation>
            </Entity>

              {/* green */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorGreen}} 
              position='0 .3 0' 
              rotation='0 225 0'
              events={{click: () => this.changeColor('green')}}>
              <a-animation
                begin="click"
                attribute='position'
                duration='500'
                from='0 .09 0'
                to='0 .3 0'
                repeat='0'
                easing='ease'>
              </a-animation>
            </Entity>

          </Entity>

            {/* controls */}
          <Entity>
              <a-camera/>
              <a-entity 
                id="lhand" 
                hand-controls="left" 
                super-hands
                sphere-collider="objects: a-link">
              </a-entity>
              <a-entity 
                id="rhand" 
                hand-controls="right" 
                super-hands
                sphere-collider="objects: a-link" 
                mixin="controller" 
                laser-controls="hand: right">
              </a-entity>
          </Entity>
          {/* <a-camera>
            <a-cursor></a-cursor>
          </a-camera> */}

        {/* Sound */}
        <a-sound src={sound1} autoplay="false" on='click' position="0 2 5"></a-sound>          
        </Scene>
      </div>
    );
  }
}

export default WorldOne;






{/* <a-entity geometry="primitive: cylinder; radius: 2; segmentsRadial: 6; thetaLength: -160; openEnded: true"       
material="shader: html; target: #texture; side: double; width: 500; height: 300; transparent: true" update-repeat position="0 0 -4" rotation="0 -90 0"></a-entity> */}


{/* score */}
{/* <a-text
  material={{color: "black"}}
  value={`Your score....${this.state.score}`} 
  position='0 0 -3'
  rotation='270 0 0'
  scale='1 1 1' 
  width='15px'>
  <a-animation 
    attribute='position' 
    duration='2000' 
    from='0 0 -3' 
    to='0 0 -4'
    direction="alternate-reverse"
    repeat="indefinite"
    easing="ease">
  </a-animation>
</a-text> */}