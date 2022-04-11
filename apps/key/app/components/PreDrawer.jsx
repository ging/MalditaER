import React from 'react';
import AreaLink from './AreaLink';
import './../assets/scss/predrawer.scss';

export default class PreDrawer extends React.Component {
  render(){
    return (
      <div id="screen_predrawer" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")}>
        <div className="containers">
          {this.props.show ? <AreaLink tooltip={this.props.I18n.getTrans("slide")} className="predrawer-area-link" onClick={()=>this.props.onOpenScreen(1)}/> : null}
        </div>
      </div>
    );
  }
}