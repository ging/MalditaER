import React from 'react';
import './../assets/scss/keys.scss';
import AreaLink from './AreaLink';
import Text from './Text';

export default class Keys extends React.Component {
  render(){
    return (
      <div id="keys_screen" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        <div className="containers">
          {this.props.show ? <AreaLink tooltip={this.props.I18n.getTrans("grab_keys")} className="keys-link" onClick={()=>this.props.onGrabKeys("grab_keys")}/> : null}
        </div>
        <Text><p>{this.props.I18n.getTrans("thinking")}</p></Text>
      </div>
    );
  }
}