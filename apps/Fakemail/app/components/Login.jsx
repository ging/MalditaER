import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
      error:"",
    };
  }
  render(){
    return (<div className="login">
      <div className="logo"><img src="./assets/images/logos/csic_completo.png" alt="Logotype"/></div>
      <form autoComplete="off">
        <input style={{display:"none"}} type="email" name="fakeemail"/>
        <input style={{display:"none"}} type="password" name="fakepassword"/>
        <h1>Acceso a la pasarela de correo electrónico</h1>
        {this.props.error ? <div className={"error-msg"}>Credenciales incorrectas</div> : null }
        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <div className="emailWrapper">
            <input type="email" name="email" autoComplete="off" id="email" value={this.state.username} onChange={e=>this.setState({username:e.target.value})}/><span id="domain">@{this.props.profile.domain}</span>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="email">Contraseña</label>
          <input type="password" name="password" autoComplete="new-password" id="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
        </div>
        <button className="button1" type="button" onClick={this.handleSubmit.bind(this)}>Acceder</button>
      </form>
    </div>);
  }
  handleSubmit(){
    this.props.login((this.state.username + this.state.password));
  }
}