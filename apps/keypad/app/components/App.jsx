import React from 'react';
import {connect} from 'react-redux';
import {restoreState, restoreStateForPuzzle, loaded, changeScreen, changePuzzle} from '../reducers/actions.jsx';
import './../assets/scss/app.scss';
import './../assets/scss/modal.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import MainScreen from './MainScreen.jsx';
import MessageScreen from './MessageScreen.jsx';
import ContentScreen from './ContentScreen.jsx';

let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMessageScreen:false,
    };
    this.saveState = this.saveState.bind(this);
    this.onBoxOpen = this.onBoxOpen.bind(this);
    this.submitSolution = this.submitSolution.bind(this);
    this.onPuzzleCompleted = this.onPuzzleCompleted.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    I18n.init(GLOBAL_CONFIG);
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = function(er_state){
      this.restoreState(er_state);
    }.bind(this);
    GLOBAL_CONFIG.escapp.onErRestartCallback = function(er_state){
      // this.reset(); //For development
      // localStorage.clear();
      LocalStorage.removeSetting("puzzle_solution");
    }.bind(this);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
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
    if((typeof er_state !== "undefined") && (er_state.puzzlesSolved.length > 0)){
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
  onBoxOpen(solution){
    LocalStorage.saveSetting("puzzle_solution", solution);
    switch (GLOBAL_CONFIG.afterOpen){
    case "SHOW_MESSAGE_AND_CONTINUE":
      this.setState({showMessageScreen:true});
      break;
    case "SHOW_MESSAGE":
    default:
      if(this.props.puzzle < GLOBAL_CONFIG.escapp.appPuzzleIds[0]){
        this.submitSolution(solution);
      }
      break;
    }
  }
  submitSolution(solution){
    if(typeof solution === "undefined"){
      solution = LocalStorage.getSetting("puzzle_solution");
    }
    if(typeof solution !== "string"){
      return;
    }
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], solution, {}, function(success){
      // Success should be always true unless unespected failure in Escapp server
      // console.log("Puzzle submitted: " + success);
      if((GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE") || (GLOBAL_CONFIG.afterOpen === "SHOW_URL")){
        this.onPuzzleCompleted(GLOBAL_CONFIG.escapp.appPuzzleIds[0]);
      }
      // Otherwise (afterOpen === "NOTHING" or afterOpen === "SHOW_MESSAGE_AND_CONTINUE"), do nothing.
    }.bind(this));
  }
  onPuzzleCompleted(puzzle_id){
    this.props.dispatch(changePuzzle(puzzle_id));
    this.saveState();
  }
  render(){
    if(this.props.loading){
      return "";
    }

    let puzzleCompleted = (this.props.puzzle >= GLOBAL_CONFIG.escapp.appPuzzleIds[0]);

    let showMessageScreen = ((GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE") || (GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE_AND_CONTINUE"));
    if(showMessageScreen && (this.state.showMessageScreen !== true)){
      if(GLOBAL_CONFIG.afterOpen === "SHOW_MESSAGE"){
        showMessageScreen = puzzleCompleted;
      } else {
        // SHOW_MESSAGE_AND_CONTINUE
        showMessageScreen = (typeof LocalStorage.getSetting("puzzle_solution") === "string");
      }
    }

    if(showMessageScreen === true){
      return (
        <MessageScreen dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} submitSolution={this.submitSolution} />
      );
    }

    let showContentScreen = ((GLOBAL_CONFIG.afterOpen === "SHOW_URL") && (puzzleCompleted));
    if(showContentScreen === true){
      return (
        <ContentScreen dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} />
      );
    }

    return (
      <MainScreen dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onBoxOpen={this.onBoxOpen} />
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);