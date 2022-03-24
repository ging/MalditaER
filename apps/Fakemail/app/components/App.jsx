import React from 'react';
import {connect} from 'react-redux';
import {restoreState, loaded, logged, updateProfile, updateEmails, updateChats} from '../reducers/actions.jsx';
import './../assets/scss/main.scss';
import './../assets/scss/fontroboto.scss';

import * as LocalStorage from '../assets/javascripts/Storage';
import {GLOBAL_CONFIG} from '../config/config';
import {CATEGORIES} from '../constants/constants';

import Inbox from './Inbox';
import Login from './Login';

let escapp;

export class App extends React.Component {
  constructor(props){
    super(props);

    LocalStorage.init(GLOBAL_CONFIG.localStorageKey);

    GLOBAL_CONFIG.escapp.onNewErStateCallback = function(er_state){
      this.restoreState(er_state);
    }.bind(this);
    escapp = new ESCAPP(GLOBAL_CONFIG.escapp);

    // Init profile
    let profile = GLOBAL_CONFIG.profile;
    profile.email = profile.username + "@" + profile.domain;
    this.props.dispatch(updateProfile(profile));

    // Init emails
    let emails = GLOBAL_CONFIG.emails;
    for(let j = 0; j < emails.length; j++){
      // Add id to each email
      emails[j].id = (j + 1);
      // Add unreaded boolean if not present
      emails[j].unread = (typeof emails[j].unread === "undefined" ? true : emails[j].unread);
      // Add default category if no category is specified
      if((!(emails[j].categories instanceof Array)) || (emails[j].categories.length === 0)){
        emails[j].categories = ["received"];
      }
      // Add resource URL
      if(emails[j].content.indexOf("<<<REPLACE_ME_WITH_RESOURCE_URL>>>") !== -1){
        let replacement = escapp.addUserCredentialsToUrl("insertTheURLHere");
        emails[j].content = emails[j].content.replace("<<<REPLACE_ME_WITH_RESOURCE_URL>>>", replacement);
      }
    }
    this.props.dispatch(updateEmails(emails));

    // Init chats
    this.props.dispatch(updateChats(GLOBAL_CONFIG.chats));

    this.state = {login_error:false};

    this.saveState = this.saveState.bind(this);
    this.restoreState = this.restoreState.bind(this);
    this.login = this.login.bind(this);
    this.login_success = this.login_success.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount(){
    // For development
    // this.reset();
    // LocalStorage.clear();

    escapp.validate(function(success, er_state){
      if(success){
        this.restoreState(er_state);
      }
    }.bind(this));
  }
  restoreState(er_state){
    if(er_state.puzzlesSolved.length > 0){
      let puzzleId = GLOBAL_CONFIG.escapp.appPuzzleIds[0];
      if(er_state.puzzlesSolved.indexOf(puzzleId) !== -1){
        // Puzzle already solved
        return this.restoreLocalState();
      }
    }
    this.props.dispatch(loaded(true));
  }
  saveState(){
    let currentState = this.props.store.getState();
    LocalStorage.saveSetting("app_state", currentState);
  }
  restoreLocalState(){
    let stateToRestore = LocalStorage.getSetting("app_state");
    if(typeof stateToRestore !== "undefined"){
      this.props.dispatch(restoreState(stateToRestore));
    } else {
      // Autologin
      this.login_success();
      this.props.dispatch(loaded(true));
    }
  }
  reset(){
    escapp.reset();
    LocalStorage.clear();
  }
  login(data){
    escapp.submitPuzzle(GLOBAL_CONFIG.escapp.appPuzzleIds[0], data, {}, function(success, er_state){
      if(success){
        this.login_success();
      } else {
        this.setState({login_error:true});
      }
    }.bind(this));
  }
  login_success(){
    this.setState({login_error:false});
    this.props.dispatch(logged(true));
    this.saveState();
  }
  close(){
    this.setState({login_error:false});
    this.props.dispatch(logged(false));
    this.saveState();
  }
  render(){
    if((this.props.loading === true) || (this.props.profile === {}) || (typeof this.props.emails === "undefined")){
      return null;
    }
    return (
      <div id="container">
        {this.props.logged ? <Inbox dispatch={this.props.dispatch} config={GLOBAL_CONFIG} profile={this.props.profile} emails={this.props.emails} chats={this.props.chats} saveState={this.saveState} close={this.close}/> : <Login login={this.login} error={this.state.login_error} config={GLOBAL_CONFIG} profile={this.props.profile}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);