import React from 'react';
import {updateProfile, updateEmails, updateChats} from '../reducers/actions.jsx';
import "../assets/scss/style.sass";

import LeftMenu from './emailComponents/LeftMenu';
import EmailList from './emailComponents/EmailList';
import EmailContent from './emailComponents/EmailContent';

export default class Inbox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedEmailId:undefined,
      selectedCategory:"received",
    };

    this.readEmail = this.readEmail.bind(this);
    this.highlightEmail = this.highlightEmail.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.getEmailsFromCategory = this.getEmailsFromCategory.bind(this);
    this.getUnreadEmailsFromCategory = this.getUnreadEmailsFromCategory.bind(this);
  }
  readEmail(emailId){
    let email = this.getEmailById(emailId);
    email.unread = false;
    this.updateEmail(emailId, email);
    this.setState({selectedEmailId:emailId});
  }
  getEmailById(emailId){
    if(typeof emailId !== "number"){
      return undefined;
    }
    for(let i = 0; i < this.props.emails.length; i++){
      if(this.props.emails[i].id === emailId){
        return this.props.emails[i];
      }
    }
    return undefined;
  }
  updateEmail(emailId, newEmail){
    let emails = Object.assign([], this.props.emails);
    for(let i = 0; i < emails.length; i++){
      if(emails[i].id === emailId){
        emails[i] = newEmail;
      }
    }
    this.props.dispatch(updateEmails(emails));
  }
  getEmailsFromCategory(category){
    let emails = [];
    for(let j = 0; j < this.props.emails.length; j++){
      if(this.props.emails[j].categories.indexOf(category) !== -1){
        emails.push(this.props.emails[j]);
      }
    }
    return emails;
  }
  getUnreadEmailsFromCategory(category){
    let unreadMails = [];
    let emails = this.getEmailsFromCategory(category);
    for(let i = 0; i < emails.length; i++){
      if(emails[i].unread){
        unreadMails.push(emails[i]);
      }
    }
    return unreadMails;
  }
  highlightEmail(emailId){
    if((typeof emailId !== "number") && (typeof this.state.selectedEmailId === "number")){
      emailId = this.state.selectedEmailId;
    }
    let email = this.getEmailById(emailId);
    if(typeof email !== "undefined"){
      let hIndex = email.categories.indexOf("highlighted");
      if(hIndex === -1){
        // Add to highlights
        email.categories.push("highlighted");
      } else {
        // Remove from highlights
        email.categories.splice(hIndex, 1);
      }
      this.updateEmail(emailId, email);
    }
  }
  render(){
    let emails = this.getEmailsFromCategory(this.state.selectedCategory);
    let email = this.getEmailById(this.state.selectedEmailId);
    return <div className="wrapper">
	    <LeftMenu config={this.props.config} profile={this.props.profile} chats={this.props.chats} selectedCategory={this.state.selectedCategory} getUnreadEmailsFromCategory={this.getUnreadEmailsFromCategory} selectCategory={category=>this.setState({selectedCategory:category})} close={this.props.close}/>
	    <EmailList emails={emails} selectedEmail={email} selectEmail={this.readEmail} highlightEmail={this.highlightEmail} />
	    <EmailContent profile={this.props.profile} email={email} highlightEmail={this.highlightEmail} />
	  </div>;
  }
}