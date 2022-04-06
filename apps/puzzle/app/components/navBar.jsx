import React from "react";
import '../assets/scss/main.scss';
import {Navbar, Nav} from "react-bootstrap";

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
        <Navbar bg="transparent" expand="lg" style={{width:"100%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item style={{marginRight:"30%"}}>
                <img width="50"
                  height="50"
                  className="d-inline-block align-top icon"
                  src="assets/icons/instructions.svg"
                  title="¿Cómo jugar?"
                  style={{cursor:"pointer"}}
                  onClick={()=>{this.props.mostrarInstrucciones();}}
                />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}