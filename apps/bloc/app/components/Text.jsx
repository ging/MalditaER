import React from 'react';
import './../assets/scss/text.scss';

export default class Text extends React.Component {
  render(){
    return (<div className="boxStyle" >
      <div>
        {this.props.children}
      </div>
    </div>);
  }
}