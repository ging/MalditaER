import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';
import BoxButton from './BoxButton.jsx';
import './../assets/scss/main.scss';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.changeBoxLight = this.changeBoxLight.bind(this);
    this.afterChangeBoxLight = this.afterChangeBoxLight.bind(this);
    this.password = [];
    this.processing_click = false;
    this.checking = false;
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize(){
    var contentHeight = $("#root").height();
    var contentWidth = $("#root").width();
    var aspectRatio = 4/3;
    var boxWidth = Math.min(contentHeight*aspectRatio,contentWidth);
    var boxHeight = boxWidth/aspectRatio;

    var buttonContainer = $("div#container");
    $(buttonContainer).width(boxWidth*0.22);
    $(buttonContainer).css("margin-left",boxWidth/2*0.09);
    $(buttonContainer).css("margin-top",boxHeight*0.3 + (contentHeight-boxHeight)/2);
    $(buttonContainer).height(boxHeight*0.4);

    $("div.boxButton").width(boxWidth*0.06);
    $("div.boxButton").height(boxHeight*0.1);

    var boxLight = $("div.boxlight");
    $(boxLight).css('left', $("#root").width()/2 + boxWidth/2*0.3);
    $(boxLight).css('top', $("#root").height()/2 - boxHeight/2*0.4);
  };

  onClickButton(value){
    if((this.processing_click===true)||(this.checking===true)){
      return;
    }
    this.processing_click = true;

    if(this.password.length < this.props.config.passwordLength){
      this.password.push(value);
    }

    let shortBeep = document.getElementById("audio_beep");
    
    // shortBeep.onended = function() {
    setTimeout(function(){
      if(this.password.length === this.props.config.passwordLength){
        //Submit solution
        this.checking = true;
        this.processing_click = false;

        let solution = this.password.join("");
        this.password = [];
        this.props.escapp.checkPuzzle(this.props.config.escapp.appPuzzleIds[0], solution, {}, function(success){
          //Success === true => Good password. Otherwise, bad password.
          this.changeBoxLight(success);
        }.bind(this));
      } else {
        this.processing_click = false;
      }
    }.bind(this),300);
    // }.bind(this);
    
    shortBeep.pause();
    shortBeep.currentTime = 0;
    shortBeep.play();
  };

  changeBoxLight(success){
    let value;
    let audio;

    if(success===true){
      value = "green";
      audio = document.getElementById("audio_success");
    } else {
      value = "red";
      audio = document.getElementById("audio_failure");
    }

    // audio.onended = function() {
    setTimeout(function(){ 
      if(value === "red"){
        $("div.boxlight_off").show();
        $("div.boxlight_red").hide();
      }
      this.afterChangeBoxLight(success);
    }.bind(this),1000);
    // }.bind(this);
    
    $("div.boxlight_" + value).show();
    $("div.boxlight_off").hide();
    audio.play();
  };

  afterChangeBoxLight(success){
    if(success){
      return this.props.onBoxOpen();
    }
    this.checking = false;
  };

  render(){
    return (
      <div id="container">
        <audio id="audio_beep" src="../assets/sounds/beep-short.mp3" autostart="false" preload="auto"></audio>
        <audio id="audio_failure" src="../assets/sounds/access-denied.mp3" autostart="false" preload="auto"></audio>
        <audio id="audio_success" src="../assets/sounds/correct.mp3" autostart="false" preload="auto"></audio>
        <div id="row1" className="row">
          <BoxButton value={"1"} position={1} onClick={this.onClickButton}/>
          <BoxButton value={"2"} position={2} onClick={this.onClickButton}/>
          <BoxButton value={"3"} position={3} onClick={this.onClickButton}/>
        </div>
        <div id="row2" className="row">
          <BoxButton value={"4"} position={4} onClick={this.onClickButton}/>
          <BoxButton value={"5"} position={5} onClick={this.onClickButton}/>
          <BoxButton value={"6"} position={6} onClick={this.onClickButton}/>
        </div>
        <div id="row3" className="row">
          <BoxButton value={"7"} position={7} onClick={this.onClickButton}/>
          <BoxButton value={"8"} position={8} onClick={this.onClickButton}/>
          <BoxButton value={"9"} position={9} onClick={this.onClickButton}/>
        </div>
        <div id="row4" className="row">
          <BoxButton value={"*"} position={10} onClick={this.onClickButton}/>
          <BoxButton value={"0"} position={11} onClick={this.onClickButton}/>
          <BoxButton value={"#"} position={12} onClick={this.onClickButton}/>
        </div>
        <div className="boxlight boxlight_off"></div>
        <div className="boxlight boxlight_red"></div>
        <div className="boxlight boxlight_green"></div>
      </div>
    );
  }
}