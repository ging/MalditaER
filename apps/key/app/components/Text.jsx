import React from 'react';

export default class Text extends React.Component {
  render(){
    return (<div className="boxStyle" >
      <div>
        {this.props.children}
      </div>
    </div>);
  }
}