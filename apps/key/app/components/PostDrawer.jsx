import React from 'react';
import * as LocalStorage from '../vendors/Storage.js';

import './../assets/scss/PostDrawer.scss';

export default class PostDrawer extends React.Component {
  render(){
    return (
      <div id="screen_postdrawer" className={"screen_wrapper" + (this.props.show ? "" : " screen_hidden")} >
        <div className="containers" />
      </div>
    );
  }
}