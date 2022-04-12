import React from 'react';
import {connect} from 'react-redux';
import {restoreState, loaded, logged, updateProfile, updateEmails, updateChats} from '../reducers/actions.jsx';
import './../assets/scss/main.scss';
import './../assets/scss/fontroboto.scss';
import * as I18n from '../vendors/I18n.js';

import * as LocalStorage from '../assets/javascripts/Storage';
import {GLOBAL_CONFIG} from '../config/config';
import {CATEGORIES} from '../constants/constants';
import defaultprofile from '../config/profile';
import EMAILSes from '../config/emails_es';
import EMAILSen from '../config/emails_en';
import EMAILSit from '../config/emails_it';
import CHATSes from '../config/chats_es';
import CHATSen from '../config/chats_en';
import CHATSit from '../config/chats_it';

import Inbox from './Inbox';


export class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
      I18n.init(GLOBAL_CONFIG);
      // Init profile
      let profile = defaultprofile;
      profile.email = profile.username + "@" + profile.domain;
      this.props.dispatch(updateProfile(profile));

      let emails;
      let chats;
      if(I18n.getLocale() === "en"){
        emails = EMAILSen;
        chats = CHATSen;
      } else if(I18n.getLocale() === "it"){
        emails = EMAILSit;
        chats = CHATSit;
      } else {
        emails = EMAILSes;
        chats = CHATSes;
      }

      // Init emails
      for(let j = 0; j < emails.length; j++){
        // Add id to each email
        emails[j].id = (j + 1);
        // Add unreaded boolean if not present
        emails[j].unread = (typeof emails[j].unread === "undefined" ? true : emails[j].unread);
        // Add default category if no category is specified
        if((!(emails[j].categories instanceof Array)) || (emails[j].categories.length === 0)){
          emails[j].categories = ["received"];
        }
      }
      this.props.dispatch(updateEmails(emails));
      this.props.dispatch(updateChats(chats));
      this.props.dispatch(loaded(true));
  }
 
  render(){
    if(this.props.loading){
      return (
        <div className="loading">
          LOADING...
        </div>
      );
    }
    if( (this.props.profile === {}) || (typeof this.props.emails === "undefined")){
      return null;
    }
    return (
      <div id="container">
        <Inbox I18n={I18n} dispatch={this.props.dispatch} config={GLOBAL_CONFIG} profile={this.props.profile} emails={this.props.emails} chats={this.props.chats}  close={this.close}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);