import React from 'react';
import {connect} from 'react-redux';
import {restoreState, restoreStateForPuzzle, loaded, changeScreen, changePuzzle} from '../reducers/actions.jsx';
import './../assets/scss/app.scss';
import './../assets/scss/modal.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import PreDrawer from './PreDrawer.jsx';
import Keys from './Keys.jsx';
import PostDrawer from './PostDrawer.jsx';
let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMessageScreen:false,
    };
    this.saveState = this.saveState.bind(this);
    this.onGrabKeys = this.onGrabKeys.bind(this);
    this.onPuzzleCompleted = this.onPuzzleCompleted.bind(this);
    this.onOpenScreen = this.onOpenScreen.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount(){
    I18n.init(GLOBAL_CONFIG);
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = (er_state) => this.restoreState(er_state);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    escapp.validate((success, er_state) => {
      if(success){
        this.restoreState(er_state);
      }
    });
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

  onGrabKeys(solution){
    if(typeof solution !== "string"){
      return;
    }
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], solution, {}, (success) => {
      // Success should be always true unless unespected failure in Escapp server
      // console.log("Puzzle submitted: " + success);
      console.log(success);
      if(success){
        this.onPuzzleCompleted(GLOBAL_CONFIG.escapp.appPuzzleIds[0]);
      }

      // Otherwise (afterOpen === "NOTHING" or afterOpen === "SHOW_MESSAGE_AND_CONTINUE"), do nothing.
    });
  }
  onPuzzleCompleted(puzzle_id){
    this.props.dispatch(changePuzzle(puzzle_id, 2));
    this.saveState();
  }

  onOpenScreen(step){
    this.props.dispatch(changeScreen(step));
    this.saveState();
  }

  render(){
    if(this.props.loading){
      return "";
    }

    return (<div>
      <PreDrawer show={this.props.screen === "pre_drawer"} key="PreDrawer" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} />
      <Keys show={this.props.screen === "keys"} key="Keys" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onGrabKeys={this.onGrabKeys} />
      <PostDrawer show={this.props.screen === "post_drawer"} key="PostDrawer" dispatch={this.props.dispatch} config={GLOBAL_CONFIG} I18n={I18n} Utils={Utils} escapp={escapp} onOpenScreen={this.onOpenScreen} />
    </div>);
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);