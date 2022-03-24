import React from 'react';

export default class Category extends React.Component {
  render(){
    return <li className={this.props.selected ? "a1_selected" : null} onClick={e=>this.props.selectCategory(this.props.id)}><i className={"fas " + (this.props.icon || "")}/>{this.props.title} <span>{(this.props.quantity > 0 ? this.props.quantity : "")}</span></li>;
  }
}