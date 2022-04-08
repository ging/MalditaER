import React from 'react';
import './../assets/scss/areaLink.scss';
import './../assets/scss/tooltips.scss';
import {Tooltip, OverlayTrigger} from "react-bootstrap";

export default class AreaLink extends React.Component {
  render(){
    const content =<div className={"areaLink " + this.props.className || ""} onClick={this.props.onClick} />
    const tooltip = this.props.tooltip ? <Tooltip id="button-tooltip" >{this.props.tooltip}</Tooltip>:null;
      return (tooltip ? 
        <OverlayTrigger placement="top" overlay={tooltip}>
          {content}
        </OverlayTrigger> : content
    );
  }
}