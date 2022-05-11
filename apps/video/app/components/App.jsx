import React from 'react';
import {connect} from 'react-redux';
import {restoreState, restoreStateForPuzzle, loaded, changeScreen, changePuzzle} from '../reducers/actions.jsx';
import './../assets/scss/app.scss';
import './../assets/scss/modal.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import Header from './Header.jsx';
import MainScreen from './MainScreen.jsx';
import ReactPlayer from 'react-player/youtube';

// Only loads the YouTube player
let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completionDialogShown:false,
    };
    this.saveState = this.saveState.bind(this);
    this.reset = this.reset.bind(this);
    I18n.init(GLOBAL_CONFIG);
  }
  componentDidMount(){

    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = function(er_state){
      this.restoreState(er_state);
    }.bind(this);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    // this.reset(); //For development
    escapp.validate(function(success, er_state){
      if(success){
        this.restoreState(er_state);
      }
    }.bind(this));
  }
  reset(){
    escapp.reset();
    localStorage.clear();
  }
  restoreState(er_state){
    // console.log(er_state);
    if(er_state.puzzlesSolved.length > 0){
      let lastPuzzleSolved = Math.max.apply(null, er_state.puzzlesSolved);
      // lastPuzzleSolved = 3; //Force a puzzle (for development)
      this.props.dispatch(restoreStateForPuzzle(lastPuzzleSolved));
    } else {
      this.props.dispatch(loaded(true));
      // this.restoreLocalState();
    }
  }
  saveState(){
    let currentState = this.props.store.getState();
    LocalStorage.saveSetting("app_state", currentState);
  }
  restoreLocalState(){
    let stateToRestore = LocalStorage.getSetting("app_state");
    if(typeof stateToRestore !== "undefined"){
      this.props.dispatch(restoreState(stateToRestore));
    }
    this.props.dispatch(loaded(true));
  }
  submitPuzzle(){
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], "i_have_seen_the_video", {}, function(success){
    });
  }

  render(){
    let url = I18n.getTrans("video_url");
    return (
      <div id="container">
        <ReactPlayer
          url={url}
          width={"100%"}
          height={"100%"}
          muted
          controls
          onEnded={this.submitPuzzle}
          config={{youtube:{playerVars:{'autoplay':1}}}} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);