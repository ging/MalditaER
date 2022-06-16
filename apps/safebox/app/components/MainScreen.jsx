import React from 'react';
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
  }

  onClickButton(value){
    if((this.processing_click === true) || (this.checking === true)){
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
        // Submit solution
        this.checking = true;
        this.processing_click = false;

        let solution = this.password.join("");
        this.password = [];
        this.props.escapp.checkPuzzle(this.props.config.escapp.puzzleId, solution, {}, function(success){
          // Success === true => Good password. Otherwise, bad password.
          this.changeBoxLight(success, solution);
        }.bind(this));
      } else {
        this.processing_click = false;
      }
    }.bind(this), 300);
    // }.bind(this);

    shortBeep.pause();
    shortBeep.currentTime = 0;
    shortBeep.play();
  }

  changeBoxLight(success, solution){
    let value;
    let audio;

    if(success === true){
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
      this.afterChangeBoxLight(success, solution);
    }.bind(this), 1000);
    // }.bind(this);

    $("div.boxlight_" + value).show();
    $("div.boxlight_off").hide();
    audio.play();
  }

  afterChangeBoxLight(success, solution){
    if(success){
      return this.props.onBoxOpen(solution);
    }
    this.checking = false;
  }

  render(){
    return (
      <div id="screen_main" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        {this.props.show ?
          <div id="container">
            <audio id="audio_beep" src="assets/sounds/beep-short.mp3" autostart="false" preload="auto" />
            <audio id="audio_failure" src="assets/sounds/access-denied.mp3" autostart="false" preload="auto" />
            <audio id="audio_success" src="assets/sounds/correct.mp3" autostart="false" preload="auto" />
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
            <div className="boxlight boxlight_off" />
            <div className="boxlight boxlight_red" />
            <div className="boxlight boxlight_green" />
          </div> : null}
      </div>
    );
  }
}