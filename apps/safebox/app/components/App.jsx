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
import PaintingScreen from './PaintingScreen.jsx';
import SafeClosedScreen from './SafeClosedScreen.jsx';
import SafeOpenScreen from './SafeOpenScreen.jsx';
let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMessageScreen:false,
    };
    this.saveState = this.saveState.bind(this);
    this.onBoxOpen = this.onBoxOpen.bind(this);
    this.onPuzzleCompleted = this.onPuzzleCompleted.bind(this);
    this.onOpenScreen = this.onOpenScreen.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    I18n.init();
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = (er_state) => this.restoreState(er_state);
    GLOBAL_CONFIG.escapp.onErRestartCallback = (er_state) => {
      // this.reset(); //For development
      // localStorage.clear();
      LocalStorage.removeSetting("app_state");
      LocalStorage.removeSetting("played_door");
    };
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    escapp.validate((success, er_state) => {
      console.log(er_state);
      if(success){
        this.restoreState(er_state);
      }
    });
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
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
      this.restoreLocalState();
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
    if(typeof solution !== "string"){
      return;
    }
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], solution, {}, (success) => {
      // Success should be always true unless unespected failure in Escapp server
      // console.log("Puzzle submitted: " + success);
      if(success){
        this.onPuzzleCompleted(GLOBAL_CONFIG.escapp.appPuzzleIds[0]);
      }

      // Otherwise (afterOpen === "NOTHING" or afterOpen === "SHOW_MESSAGE_AND_CONTINUE"), do nothing.
    });
  }
  onPuzzleCompleted(puzzle_id){
    this.props.dispatch(changePuzzle(puzzle_id, 1));
    this.saveState();
  }

  onOpenScreen(step){
    this.props.dispatch(changeScreen(step));
    this.saveState();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.puzzle < GLOBAL_CONFIG.escapp.appPuzzleIds[0] &&
      this.props.puzzle === GLOBAL_CONFIG.escapp.appPuzzleIds[0] &&
      prevProps.screen === "keypad" &&
      this.props.screen === "safe_closed"){
      setTimeout(() => this.onOpenScreen(3), 1200);
    }
    if(prevProps.screen != this.props.screen){
      this.handleResize();
    }
  }

  render(){
    if(this.props.loading){
      return "";
    }

    return (<div>
      <PaintingScreen show={this.props.screen === "painting"} key="PaintingScreen" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} />
      <SafeClosedScreen show={this.props.screen === "safe_closed"} key="SafeClosedScreen" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} />
      <MainScreen show={this.props.screen === "keypad"} key="MainScreen" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} onBoxOpen={this.onBoxOpen} />
      <SafeOpenScreen show={this.props.screen === "safe_open"} key="SafeOpenScreen" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} />
    </div>);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(){
    let contentHeight = $("#root").height();
    let contentWidth = $("#root").width();
    let aspectRatio = 4 / 3;
    let boxWidth = Math.min(contentHeight * aspectRatio, contentWidth);
    let boxHeight = boxWidth / aspectRatio;

    let buttonContainer = $("div#container");
    $(buttonContainer).width(boxWidth * 0.22);
    $(buttonContainer).css("margin-left", boxWidth / 2 * 0.09);
    // $(buttonContainer).css("margin-top",boxHeight*0.3 + (contentHeight-boxHeight)/2);
    $(buttonContainer).height(boxHeight * 0.4);

    $("div.boxButton").width(boxWidth * 0.06);
    $("div.boxButton").height(boxHeight * 0.1);

    let boxLight = $("div.boxlight");
    $(boxLight).css('left', $("#root").width() / 2 + boxWidth / 2 * 0.3);
    $(boxLight).css('top', $("#root").height() / 2 - boxHeight / 2 * 0.4);
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);