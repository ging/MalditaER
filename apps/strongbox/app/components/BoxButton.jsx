import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';

export default class BoxButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={"boxButton boxButton" + this.props.position}>
        <li>
          <p>{this.props.value}</p>
        </li>
      </div>
    );
  }
}