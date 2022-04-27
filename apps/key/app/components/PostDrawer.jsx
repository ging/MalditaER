import React from 'react';

import './../assets/scss/postdrawer.scss';

export default class PostDrawer extends React.Component {
  render(){
    return (
      <div id="screen_postdrawer" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")} >
        <div className="containers" />
      </div>
    );
  }
}