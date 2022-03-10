import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';
import BoxButton from './BoxButton.jsx';
import './../assets/scss/main.scss';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="container">
        <BoxButton value={"1"} position={1}/>
        <BoxButton value={"2"} position={2}/>
        <BoxButton value={"3"} position={3}/>
        <BoxButton value={"4"} position={4}/>
        <BoxButton value={"5"} position={5}/>
        <BoxButton value={"6"} position={6}/>
        <BoxButton value={"7"} position={7}/>
        <BoxButton value={"8"} position={8}/>
        <BoxButton value={"9"} position={9}/>
        <BoxButton value={"*"} position={10}/>
        <BoxButton value={"0"} position={11}/>
        <BoxButton value={"#"} position={12}/>
      </div>
    );
  }
}