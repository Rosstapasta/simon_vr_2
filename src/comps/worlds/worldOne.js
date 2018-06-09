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
import sound4 from './worldOneMedia/sound4.mp3';
import sound5 from './worldOneMedia/sound5.mp3';
import robotRock from './worldOneMedia/RobotRock.ogg';

import Initials from './worldOneComps/initials.js';
import PlayerScore from './worldOneComps/playerScore.js';
import ScoreBoard from './worldOneComps/scoreBoard.js';
import SimonVid from './worldOneComps/simonVideo.js';

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

      enterInitials: false,

      soundOne: false,
      soundTwo: false,
      soundThree: false,
      soundFour: false,
      soundFive: false,

      controls: true
    }
    this.playerInput = this.playerInput.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentWillMount(){
    if(this.props.match.params.mode === "VR"){
      this.setState({controls: false})
    }
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
            this.setState({colorRed: 'purple', soundThree: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorRed: 'red', soundThree: false})
          }, 700 * timesX2)

        }else if(random[i] === 2){

          setTimeout( () => {
            this.setState({colorYellow: 'purple'})
          }, 700 * timesX)

          // setTimeout( () => {
          //   this.setState({soundTwo: true})
          // }, 700 * timesX - 50)
          setTimeout( () => {
            this.setState({colorYellow: 'yellow', soundTwo: false})
          }, 700 * timesX2)

        }else if(random[i] === 3){

          setTimeout( () => {
            this.setState({colorBlue: 'purple', soundFour: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorBlue: 'blue', soundFour: false})
          }, 700 * timesX2)

        }else if(random[i] === 4){

          setTimeout( () => {
            this.setState({colorGreen: 'purple', soundOne: true})
          }, 700 * timesX)
          setTimeout( () => {
            this.setState({colorGreen: 'green', soundOne: false})
          }, 700 * timesX2)

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
        this.setState({sequence: [], playerSeq: [], enterInitials: true, soundFive: true})
      }else if(playerSeq.toString() !== seqPiece2.toString()){
        // alert('you loose!');
          this.setState({sequence: [], playerSeq: [], enterInitials: true, soundFive: true})
      }
    })
  }

  changeColor(val){

    if(val === 'red'){
      this.setState({colorRed: 'purple'})
      setTimeout( () => {
        this.setState({colorRed: 'red'}, 
        () => this.playerInput(1))
      }, 500)
    }else if(val === 'green'){
      this.setState({colorGreen: 'purple'})
      setTimeout( () => {
        this.setState({colorGreen: 'green'}, 
        () => this.playerInput(4))
      }, 500)
    }else if(val === 'blue'){
      this.setState({colorBlue: 'purple'})
      setTimeout( () => {
        this.setState({colorBlue: 'blue'}, 
        () => this.playerInput(3))
      }, 500)
    }else if(val === 'yellow'){
      this.setState({colorYellow: 'purple'})
      setTimeout( () => {
        this.setState({colorYellow: 'yellow'}, 
        () => this.playerInput(2))
      }, 500)
    }
  }

  render() {

    return (
      <div className="worldOne" style={{position: 'fixed', height: '83vh'}}>
              {/* <audio volume="2" src={robotRock} autoplay="true" type="audio/ogg" ></audio>    */}

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

          <a-sound src='src: url(worldOneMedia/RobotRock.ogg)' autoplay="true" position="0 0 0"></a-sound>


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
                  position=".4 .15 .15"
                  rotation='0 0 0'
                  scale='1.2 1.2 1.2'
                  events={{click: () => this.setState({score2: '00'}, () => this.seqStart())}}>
                  <a-animation
                    begin="click"
                    attribute='position'
                    duration='500'
                    to='.4 .15 .15'
                    from='.4 .08 .15'
                    repeat='0'>
                  </a-animation>
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
              events={{click: () => this.changeColor('blue')}}
              sound={`src: ${sound4}; on: click`}>
              <a-animation
                begin="click"
                attribute='position'
                duration='300'
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
              scale="1 1 1"
              events={{click: () => this.changeColor('red')}}
              sound={`src: ${sound3}; on: click`}>
              <a-animation
                begin="click"
                attribute='position'
                duration='300'
                from='0 .09 0'
                to='0 .3 0'
                repeat='0'
                easing='ease'>
              </a-animation>
            </Entity>

              {/* yellow */}
            <Entity 
              geometry="primitive: cylinder; height: .4; radius: 1.7; thetaLength: 90" 
              material={{color: this.state.colorYellow}} 
              position='0 .3 0' 
              rotation='0 45 0'
              events={{click: () => this.changeColor('yellow')}}
              sound={`src: ${sound2}; on: click`}>
            <a-animation
              begin="click"
              attribute='position'
              duration='300'
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
              events={{click: () => this.changeColor('green')}}
              sound={`src: ${sound1}; on: click`}>
              <a-animation
                begin="click"
                attribute='position'
                duration='300'
                from='0 .09 0'
                to='0 .3 0'
                repeat='0'
                easing='ease'>
              </a-animation>
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