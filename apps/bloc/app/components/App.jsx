import React from 'react';
import {connect} from 'react-redux';
import ReactResizeDetector from 'react-resize-detector';
import {restoreState, restoreStateForPuzzle, loaded, changeScreen, changePuzzle} from '../reducers/actions.jsx';
import './../assets/scss/app.scss';
import './../assets/scss/modal.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as Utils from '../vendors/Utils.js';
import * as I18n from '../vendors/I18n.js';
import * as LocalStorage from '../vendors/Storage.js';

import MainScreen from './MainScreen.jsx';

let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completionDialogShown:false,
      fontBase:14,
      escappFailMessage:null,
      escappRightMessage:null,
      text:"",
    };
    this.reset = this.reset.bind(this);
    this.calculateNewFontSize = this.calculateNewFontSize.bind(this);
    this.onTextSolve = this.onTextSolve.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount(){
    I18n.init();
    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);
    GLOBAL_CONFIG.escapp.onNewErStateCallback = er_state => this.restoreState(er_state);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);
    // this.reset(); //For development
    escapp.validate((success, er_state) => {
      console.log(er_state)
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
    if(er_state.puzzlesSolved.length > 0){
      let lastPuzzleSolved = Math.max.apply(null, er_state.puzzlesSolved);
      this.props.dispatch(restoreStateForPuzzle(lastPuzzleSolved, er_state.puzzleData));
    } else {
      this.props.dispatch(loaded(true));
    }
  }

  onTextSolve(solution){
    if(typeof solution !== "string"){
      return;
    }
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], solution, {}, (success) => {
      try {
      // Success should be always true unless unespected failure in Escapp server
        window.escapp = escapp;
        if(success){
          const newState = escapp.getNewestState();
          this.props.dispatch(changePuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], newState.puzzleData));
          this.setState({escappRightMessage:I18n.getTrans("right_solution"), escappFailMessage:null});

        } else {
          this.setState({escappFailMessage:I18n.getTrans("wrong_solution"), escappRightMessage:null});
        }
      } catch (e){console.error(e);}
    });
  }

  restoreLocalState(){
    if(typeof stateToRestore !== "undefined"){
      this.props.dispatch(restoreState(stateToRestore));
    }
    this.props.dispatch(loaded(true));
  }

  // Callback for ReactResizeDetector
  /* Sets a font size depending on the size of the screen.
  If font sizes of the rest of the elements in the app are in "em", the text will scale with the app  */
  calculateNewFontSize(event){
    const DEFAULT_FONT_BASE = 14;
    const DEFAULT_WIDTH_BASE = 1200;
    let width = document.body.clientWidth;
    let calculatedFontSize = DEFAULT_FONT_BASE * parseFloat(width) / DEFAULT_WIDTH_BASE;
    this.setState({fontBase:calculatedFontSize});
  }

  handleWrite(event){
    this.setState({text:event.target.value, escappFailMessage:null});
  }

  handleKeyUp(event){
    if(event.keyCode == 13){
      this.onTextSolve((this.state.text || "").toString());
    }
  }

  // puzzle_solution
  render(){
    if(this.props.loading){
      return "";
    }
    const puzzleCompleted = Object.keys(this.props.puzzleData).indexOf(GLOBAL_CONFIG.escapp.appPuzzleIds[0].toString()) !== -1;
    const puzzleSolution = puzzleCompleted ? this.props.puzzleData[GLOBAL_CONFIG.escapp.appPuzzleIds[0]].solution : undefined;
    return (
      <ReactResizeDetector handleWidth handleHeight onResize={this.calculateNewFontSize} >
        <div id="container" style={{fontSize:this.state.fontBase ? (this.state.fontBase + 'px') : '14px'}}>
          <MainScreen
            dispatch={this.props.dispatch}
            config={GLOBAL_CONFIG}
            I18n={I18n}
            Utils={Utils}
            escapp={escapp}
            text={this.state.text}
            handleWrite={this.handleWrite}
            handleKeyUp={this.handleKeyUp}
            onTextSolve={this.onTextSolve}
            current_puzzle={this.props.puzzle}
            puzzleCompleted={puzzleCompleted}
            escappFailMessage={this.state.escappFailMessage}
            escappRightMessage={this.state.escappRightMessage}
            puzzleSolution={puzzleSolution} />
        </div>
      </ReactResizeDetector>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);