import React from 'react';

export default class ChatContact extends React.Component {
  render(){
  	let status = this.props.status || "offline";
    return <div className="contact" title={(status === "offline" ? "Este usuario no está conectado en este momento" : "")}>
      <div className="picture2"><img src={this.props.photo} alt={this.props.name}/></div>
      <div className="contact_info">
        <div className="name2"><span>{this.props.name}</span><span className={status} /></div>
        <div className="mail2">{this.props.msg}</div>
      </div>
    </div>;
  }
}