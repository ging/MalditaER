import React from 'react';
import AreaLink from './AreaLink';
import './../assets/scss/painting.scss';

export default class PaintingScreen extends React.Component {
  render(){
    return (
      <div id="screen_painting" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        {this.props.show ? <AreaLink tooltip={this.props.I18n.getTrans("slide")} className="painting-area-link" onClick={()=>this.props.onOpenScreen(1)}/> : null}
      </div>
    );
  }
}