import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';
import './../assets/scss/main.scss';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="screen_wrapper screen_main">
        <p>Main Screen</p>
        <p>{this.props.I18n.getTrans("i.button_nok")}</p>
        <p>{this.props.I18n.getTrans("i.hello", {name:"World"})}</p>
      </div>
    );
  }
}