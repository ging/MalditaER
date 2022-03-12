import React from 'react';
import './../assets/scss/content.scss';

export default class ContentScreen extends React.Component {
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

    var contentContainer = $("div#content_container");
    $(contentContainer).width(boxWidth*0.55);
    $(contentContainer).height(boxHeight*0.75);
    $(contentContainer).css("margin-right",boxWidth/2*0.1);
    // $(contentContainer).css("margin-top",boxHeight*0.03);
  };

  render(){
    if(typeof this.props.config.url !== "string"){
      return "";
    }
    let content;
    if(this.props.Utils.isImage(this.props.config.url)){
      content = (<img className="iframe_wrapper" src={this.props.config.url} width="100%" height="100%" style={{border:0}} />);
    } else {
      content = (<iframe className="iframe_wrapper" src={this.props.config.url} width="100%" height="100%" style={{border:0}} allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="0"/>);
    }

    return (
      <div id="screen_content" className="screen_wrapper">
        <div id="content_container">
          {content}
        </div>
      </div>
    );
  }
}