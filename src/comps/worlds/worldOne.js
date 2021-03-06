import React, { Component } from 'react';
import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import 'aframe-fps-look-controls-component';
import {Entity, Scene} from 'aframe-react';
import './worldOne.css';

import sound1 from './worldOneMedia/sound1.mp3';
import sound2 from './worldOneMedia/sound2.mp3';
import sound3 from './worldOneMedia/sound3.mp3';
import sound4 from './worldOneMedia/sound4222.ogg';
import sound5 from './worldOneMedia/sound5.mp3';
import gameMusic from './worldOneMedia/gameMusic.mp3';

import Initials from './worldOneComps/initials.js';
import PlayerScore from './worldOneComps/playerScore.js';
import ScoreBoard from './worldOneComps/scoreBoard.js';
import SimonVid from './worldOneComps/simonVideo.js';

class WorldOne extends Component {
  constructor(){
    super()

    this.state = {
      colorRed: '#ff0000',
      colorBlue: '#0000ff',
      colorGreen: '#008000',
      colorYellow: '#ffff00',

      sequence: [],
      playerSeq: [],
      round: 0,

      score2: '00',

      enterInitials: false,

      soundOne: false,
      soundTwo: false,
      soundThree: false,
      soundFour: false,
      soundFive: false,

      controls: true,
      playsound: false
    }
    this.playerInput = this.playerInput.bind(this);
  }

  componentWillMount(){
    if(this.props.match.params.mode === "VR"){
      this.setState({controls: false})
    }
  }

  componentDidMount(){
    var plus = 1000;

    // round1
    setTimeout( () => {
      this.setState({colorRed: '#ff9999'})
    }, 2000 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#99cc99'})
    }, 2100 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#9999ff'})
    }, 2200 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffffb2'})
    }, 2300 + plus)

    setTimeout( () => {
      this.setState({colorRed: '#ff0000'})
    }, 2700 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#008000'})
    }, 2800 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#0000ff'})
    }, 2900 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffff00'})
    }, 3000 + plus)

    // round2
    setTimeout( () => {
      this.setState({colorRed: '#ff9999'})
    }, 3100 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#99cc99'})
    }, 3200 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#9999ff'})
    }, 3300 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffffb2'})
    }, 3400 + plus)

    setTimeout( () => {
      this.setState({colorRed: '#ff0000'})
    }, 3800 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#008000'})
    }, 3900 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#0000ff'})
    }, 4000 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffff00'})
    }, 4100 + plus)

    // round3
    setTimeout( () => {
      this.setState({colorRed: '#ff9999'})
    }, 4200 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#99cc99'})
    }, 4300 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#9999ff'})
    }, 4400 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffffb2'})
    }, 4500 + plus)

    setTimeout( () => {
      this.setState({colorRed: '#ff0000'})
    }, 4900 + plus)

    setTimeout( () => {
      this.setState({colorGreen: '#008000'})
    }, 5000 + plus)

    setTimeout( () => {
      this.setState({colorBlue: '#0000ff'})
    }, 5100 + plus)

    setTimeout( () => {
      this.setState({colorYellow: '#ffff00'})
    }, 5200 + plus)

    setTimeout( () => {
      this.setState({playsound: "true"})
    }, 6200)
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
            this.setState({colorRed: '#ff9999', soundThree: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorRed: '#ff0000', soundThree: false})
          }, 700 * timesX2)

        }else if(random[i] === 2){

          setTimeout( () => {
            this.setState({colorYellow: '#ffffb2', soundTwo: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorYellow: '#ffff00', soundTwo: false})
          }, 700 * timesX2)

        }else if(random[i] === 3){

          setTimeout( () => {
            this.setState({colorBlue: '#9999ff', soundFour: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorBlue: '#0000ff', soundFour: false})
          }, 700 * timesX2)

        }else if(random[i] === 4){

          setTimeout( () => {
            this.setState({colorGreen: '#99cc99', soundOne: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorGreen: '#008000', soundOne: false})
          }, 700 * timesX2)

        }
        timesX += 1;
        timesX2 += 1;
        this.setState({score: this.state.sequence.length -1})
      }
    })
  }

  playerInput(val){

    if(val === 1){
        this.setState({soundThree: true})
      setTimeout( () => {
        this.setState({soundThree: false})
      }, 300)
    }if( val === 2){
        this.setState({soundTwo: true})
      setTimeout( () => {
        this.setState({soundTwo: false})
      }, 300)
    }if( val === 3){
        this.setState({soundFour: true})
      setTimeout( () => {
        this.setState({soundFour: false})
      }, 300)
    }if( val === 4){
        this.setState({soundOne: true})
      setTimeout( () => {
        this.setState({soundOne: false})
      }, 300)
    }

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
        setTimeout(()=> {
          this.setState({playerSeq: []}, () => {return this.seqStart()})
        }, 800)
      }else if(playerSeq.length === sequence.length && playerSeq.toString() !== sequence.toString()){

        this.setState({
          sequence: [], 
          playerSeq: [], 
          enterInitials: true, 
          soundFive: true,
          colorRed: '#ff9999',
          colorBlue: '#9999ff',
          colorGreen: '#99cc99',
          colorYellow: '#ffffb2'})
        setTimeout(() => {
          this.setState({      
            colorRed: '#ff0000',
            colorBlue: '#0000ff',
            colorGreen: '#008000',
            colorYellow: '#ffff00'})
        }, 700)

      }else if(playerSeq.toString() !== seqPiece2.toString()){

        this.setState({
          sequence: [], 
          playerSeq: [], 
          enterInitials: true, 
          soundFive: true,
          colorRed: '#ff9999',
          colorBlue: '#9999ff',
          colorGreen: '#99cc99',
          colorYellow: '#ffffb2'})
        setTimeout(() => {
          this.setState({      
            colorRed: '#ff0000',
            colorBlue: '#0000ff',
            colorGreen: '#008000',
            colorYellow: '#ffff00'})
        }, 700)
        
      }
    })
  }


  render() {

    return (
      <div className="worldOne" style={{position: 'fixed', height: '83vh'}}>

              {this.state.playsound ? <div>{
                <audio volume="2" src={gameMusic} autoplay="true" type="audio/ogg" ></audio>   
              }</div> : 
              <div/>}

            {/* soundOne */}
            {this.state.soundOne ? <div>{
              <audio src={sound1} autoplay="true" type="audio/mp3" ></audio>              
            }</div> : 
              <div/>
            }

            {/* soundTwo */}
            {this.state.soundTwo ? <div>{
              <audio src={sound2} autoplay="true" type="audio/mp3" ></audio>              
            }</div> : 
              <div/>
            }

            {/* soundThree */}
            {this.state.soundThree ? <div>{
              <audio src={sound3} autoplay="true" type="audio/mp3" ></audio>              
            }</div> : 
              <div/>
            }
      
            {/* soundFour */}
            {this.state.soundFour ? <div>{
              <audio src={sound4} autoplay="true" type="audio/mp3" ></audio>              
            }</div> : 
              <div/>
            }

            {/* soundFive */}
            {this.state.soundFive ? <div>{
              <audio src={sound5} autoplay="true" type="audio/mp3" ></audio>              
            }</div> : 
              <div/>
            }
            
        <Scene embedded background="color: #ffa277">

        {/* <a-assets>
          <audio id="robotRock1" src={robotRock} preload="auto" type="audio/ogg"></audio>
        </a-assets>

        <a-entity position="0 0 0" sound="src: #robotRock1"></a-entity> */}

          {/* <a-sound src='src: url(worldOneMedia/RobotRock.ogg)' autoplay="true" position="0 0 0"></a-sound> */}


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

          <ScoreBoard></ScoreBoard>

          <PlayerScore>{this.state.score2}</PlayerScore>

          {/* player initials */}
          {this.state.enterInitials ? <Entity>{
            <Initials>{this.state.score2}</Initials>
          }</Entity> :
          <Entity/>}

          {/* namePlane board thing*/}
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
                    position="0 3.2 0"
                    rotation="0 0 0"
                    scale="4.4 1 .4"
                    material={{color: "red", opacity: .5}}
                    visible={`${!this.state.enterInitials}`}>
                    <a-entity
                      text-geometry="value: Simon"
                      position="-.34 -.2 0"
                      rotation="0 0 0"
                      scale=".4 1.3 1"
                      material="color: black">
                    </a-entity>
                </Entity>

                {!this.state.enterInitials ? <Entity>{
                <SimonVid/>
                }</Entity> :
                <Entity/>}

                <Entity 
                    geometry="primitive: box;" 
                    position="0 3 0"
                    rotation="0 0 0"
                    scale="4.4 1.3 .4"
                    material={{color: "red", opacity: .5}}
                    visible={`${this.state.enterInitials}`}>
                </Entity>
                <a-entity 
                    text-geometry={`value: NAME`} 
                    position='-1.9 2.5 0' 
                    scale='2 2 2'
                    rotation="0 0 0"
                    material="color: black"
                    visible={`${this.state.enterInitials}`}>
                </a-entity>
          </a-plane>

          {/* simon */}
          {/* base */}
          <Entity 
            geometry="primitive: cylinder; height: .5; radius: 2;" 
            material={{color: 'black'}} 
            position='0 2 -5' 
            rotation='90 0 0'>

            {/* Middle cylinder*/}
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

                {/* start button */}
                <Entity
                  geometry="primitive: cylinder; height: .9; radius: .1"
                  material ={{color: 'green', opacity: "0"}}
                  position=".4 .15 .15"
                  rotation='0 0 0'
                  scale='2 1.2 2'
                  events={{click: () => { return this.seqStart(), this.setState({score2: '00'}) }}}
                  animation__click="property: position; dur: 500; easing: linear; from: .4 .08 .15'; to: .4 .15 .15; startEvents: click;">
                  <Entity
                    geometry="primitive: cylinder; height: .9; radius: .1"
                    material ={{color: 'green'}}
                    position="0 0 0"
                    rotation='0 0 0'
                    scale='.6 1 .6'>
                  </Entity>
                </Entity>

                <a-entity
                  text-geometry="value: start"
                  position=".27 .5 .4"
                  rotation="270 0 0"
                  scale=".2 .2 .2"
                  material="color: black">
                </a-entity>

                {/* simon text */}
                <a-entity
                  text-geometry="value: Simon; bevelThickness: 30"
                  position="-.69 .5 -.14"
                  scale=".75 .65 .75"
                  rotation="270 0 0"
                  material="color: black">
                </a-entity>

                {/* count */}
                <Entity
                  geometry="primitive: box;"
                  material={{color: 'black'}}
                  position='-.35 .5 .23'
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

              {/* black cross object */}
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
              events={{click: () => this.playerInput(3)}}
              // sound={`src: ${sound4}; on: click`}
              animation="property: material.color; dur: 700; from: #9999ff; to: #0000ff; startEvents: click;"
              animation__click="property: position; dur: 500; easing: linear; from: 0 .09 0; to: 0 .3 0; startEvents: click;">
            </Entity>

            {/* red */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorRed}}
              position='0 .3 0' 
              rotation='0 315 0'
              scale="1 1 1"
              events={{click: () => this.playerInput(1)}}
              // sound={`src: ${sound3}; on: click`}
              animation="property: material.color; dur: 700; from: #ff9999; to: #ff0000; startEvents: click;"
              animation__click="property: position; dur: 500; easing: linear; from: 0 .09 0; to: 0 .3 0; startEvents: click;">
            </Entity>

            {/* yellow */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorYellow}}
              position='0 .3 0' 
              rotation='0 45 0'
              events={{click: () => this.playerInput(2)}}
              // sound={`src: ${sound2}; on: click`}
              animation="property: material.color; dur: 700; from: #ffffb2; to: #ffff00; startEvents: click;"
              animation__click="property: position; dur: 500; easing: linear; from: 0 .09 0; to: 0 .3 0; startEvents: click;">
            </Entity>

            {/* green */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorGreen}}
              position='0 .3 0' 
              rotation='0 225 0'
              events={{click: () => this.playerInput(4)}}
              // sound={`src: ${sound1}; on: click`}
              animation="property: material.color; dur: 700; from: #99cc99; to: #008000; startEvents: click;"
              animation__click="property: position; dur: 500; easing: linear; from: 0 .09 0; to: 0 .3 0; startEvents: click;">
              >
            </Entity>

          </Entity>

          {/* controls */}
          {this.state.controls ? <Entity>{
              <a-entity camera fps-look-controls wasd-controls>
                <a-cursor></a-cursor>
              </a-entity>
          }</Entity> : 
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
          }

        </Scene>
      </div>
    );
  }
}

export default WorldOne;