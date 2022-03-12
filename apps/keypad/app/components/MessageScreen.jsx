import React from 'react';
import './../assets/scss/message.scss';

export default class MessageScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize(){
    var contentHeight = $("#root").height();
    var contentWidth = $("#root").width();
    var aspectRatio = 4/3;
    var boxWidth = Math.min(contentHeight*aspectRatio,contentWidth);
    var boxHeight = boxWidth/aspectRatio;

    var messageContainer = $("div#message_container");
    $(messageContainer).width(boxWidth*0.5);
    $(messageContainer).height(boxHeight*0.5);
    $(messageContainer).css("margin-right",boxWidth/2*0.1);
    $(messageContainer).css("margin-top",boxHeight*0.03);
    
    if(this.props.config.afterOpen === "SHOW_MESSAGE_AND_CONTINUE"){
      var messageButton = $("div.message_button");
      //$(messageButton).width(boxWidth*0.3);
      //$(messageButton).height(boxHeight*0.05);
      //$(messageButton).css("margin-right",boxWidth/2*0);
      //$(messageButton).css("margin-top",boxHeight*0);
      $(messageButton).css("display","block");
    }
  };

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