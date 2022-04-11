import React from 'react';
import './../assets/scss/keys.scss';
import AreaLink from './AreaLink';

export default class Keys extends React.Component {
  render(){
    return (
      <div id="keys_screen" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        <div className="containers">
          {this.props.show ? <AreaLink tooltip={this.props.I18n.getTrans("see_keypad")} className="keys-link" onClick={()=>this.props.onGrabKeys("grab_keys")}/> : null}
        </div>
      </div>
    );
  }
}