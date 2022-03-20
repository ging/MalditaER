import React from 'react';
import './../assets/scss/message.scss';

export default class MessageScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  render(){
    let message = (typeof this.props.config.message === "string") ? this.props.config.message : "";
    return (
      <div id="screen_message" className="screen_wrapper">
        <div id="message_container"><pre>{message}</pre></div>
        <div className="message_button" onClick={() => this.props.submitSolution()}>{this.props.I18n.getTrans("i.continue")}</div>
      </div>
    );
  }
}