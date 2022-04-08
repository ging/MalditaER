import React from 'react';
import './../assets/scss/safeclosed.scss';
import AreaLink from './AreaLink';

export default class SafeClosedScreen extends React.Component {
  render(){
    return (
      <div id="screen_safe_closed_screen" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        {this.props.show ? <AreaLink tooltip={this.props.I18n.getTrans("see_keypad")} className="keypad-link" onClick={()=>this.props.onOpenScreen(2)}/> : null}
      </div>
    );
  }
}