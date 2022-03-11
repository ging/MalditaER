import React from 'react';
import {changeScreen} from '../reducers/actions.jsx';
import BoxButton from './BoxButton.jsx';
import './../assets/scss/main.scss';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
  };

  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize);
  // }

  // handleResize(){
  //   var scale = Math.min($("#container").width() / 690, $("#container").height() / 690);
  //   var newWidth = 70*scale;
  //   var newHeight = 70*scale;
  //   $("div.boxButton").width(newWidth).height(newHeight);
  // }

  render(){
    return (
      <div id="container">
        <div id="row1" className="row">
          <BoxButton value={"1"} position={1}/>
          <BoxButton value={"2"} position={2}/>
          <BoxButton value={"3"} position={3}/>
        </div>
        <div id="row2" className="row">
          <BoxButton value={"4"} position={4}/>
          <BoxButton value={"5"} position={5}/>
          <BoxButton value={"6"} position={6}/>
        </div>
        <div id="row3" className="row">
          <BoxButton value={"7"} position={7}/>
          <BoxButton value={"8"} position={8}/>
          <BoxButton value={"9"} position={9}/>
        </div>
        <div id="row4" className="row">
          <BoxButton value={"*"} position={10}/>
          <BoxButton value={"0"} position={11}/>
          <BoxButton value={"#"} position={12}/>
        </div>
      </div>
    );
  }
}