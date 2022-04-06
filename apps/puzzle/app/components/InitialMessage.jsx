import React, {useState} from "react";
let GLOBAL_CONFIG = require('../config/config.js');
import {Modal, Button, CardGroup, Card, Tab, Tabs, Sonnet} from 'react-bootstrap';
import './../assets/scss/main.scss';

export default function InitialMessage(props){
  const [show, setShow] = useState(true);
  const [enable, setEnable] = useState(GLOBAL_CONFIG.timeToReadInstructions === undefined || GLOBAL_CONFIG.timeToReadInstructions < 1);
  const handleClose = () => setShow(false);

  let timeToReadInstructions;
  (GLOBAL_CONFIG.timeToReadInstructions === undefined || GLOBAL_CONFIG.timeToReadInstructions < 1) ?
    timeToReadInstructions = "" : timeToReadInstructions = GLOBAL_CONFIG.timeToReadInstructions;


  let styleCards = {maxWidth:"70px", margin:"auto", marginTop:"10px"};

  let goalCard = "";
  goalCard = (
    <Card>
      <Card.Img style={styleCards} src="assets/icons/goal.svg"/>
      <Card.Body>
        <Card.Title><b>Objetivo</b></Card.Title>
        <Card.Text >
            Ordenar las piezas para dar con la solución.
        </Card.Text>
      </Card.Body>

    </Card>
  );

  let flipPieceCard = "";

  GLOBAL_CONFIG.reverseMode ? flipPieceCard = (
    <Card>
      <Card.Img style={styleCards} src="assets/icons/flip_piece.svg"/>
      <Card.Body>
        <Card.Title><b>Piezas reversibles</b></Card.Title>
        <Card.Text>
            Para dar la vuelta a una pieza se debe hacer doble click sobre ella.
        </Card.Text>
      </Card.Body>

    </Card>
  ) : flipPieceCard = "";

  let interchangeCard = "";
  interchangeCard = (
    <Card>
      <Card.Img style={styleCards} src="assets/icons/interchange.svg"/>
      <Card.Body>
        <Card.Title><b>Intercambio de piezas</b></Card.Title>
        <Card.Text>
          Mediante un click se selecciona la pieza y se deposita con otro click en el lugar de destino.
        </Card.Text>
      </Card.Body>

    </Card>
  );

  return (
    <>
      <Modal backdrop="static" keyboard={false} show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header>
          <Modal.Title style={{fontSize:"45px"}}>Instrucciones</Modal.Title>
        </Modal.Header>
        <Modal.Body className="tab">
          <Tabs defaultActiveKey="instructions" id="uncontrolled-tab-example" >
            <Tab eventKey="instructions" title="Cómo jugar" >
              <CardGroup>
                {goalCard}
                {interchangeCard}
                {flipPieceCard}
              </CardGroup>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button className={"btn btn-dark"}style={{width:"50%", margin:"auto"}} variant="primary" disabled={!enable && props.temporizador} onClick={()=>{handleClose(); props.ocultarInstrucciones();}}>
            <p style={{fontSize:"20px"}}><b>Entendido</b></p>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}