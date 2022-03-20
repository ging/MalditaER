import React from 'react';
import './../assets/scss/areaLink.scss';

export default class AreaLink extends React.Component {
  render(){
    return (
      <div className={"areaLink " + this.props.className || ""} onClick={this.props.onClick} />
    );
  }
}