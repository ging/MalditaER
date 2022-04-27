import React from 'react';
import './../assets/scss/header.scss';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="header_wrapper">
        <nav>
          <p>Header</p>
        </nav>
      </div>
    );
  }
}