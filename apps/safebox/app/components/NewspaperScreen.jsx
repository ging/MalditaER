import React from 'react';

import './../assets/scss/newspaper.scss';

export default class NewspaperScreen extends React.Component {
  render(){
    return (
      <div id="screen_newspaper_screen" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")} >
        <div className="containers" />
      </div>
    );
  }
}