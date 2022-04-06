import React, {useState} from "react";
import {Modal, Button, CardGroup, Card, Tab, Tabs, Sonnet} from 'react-bootstrap';
import './../assets/scss/main.scss';

export default function InitialMessage(props){
  const [show, setShow] = useState(true);
  const [enable, setEnable] = useState(true);
  const handleClose = () => setShow(false);

  let styleCards = {maxWidth:"70px", margin:"auto", marginTop:"10px"};

  let goalCard = "";
  goalCard = (
    <Card>
      <Card.Body>
        <Card.Title><b>{props.I18n.getTrans("i.instructions_c1_title")}</b></Card.Title>
        <Card.Text >
            {props.I18n.getTrans("i.instructions_c1")}
        </Card.Text>
      </Card.Body>

    </Card>
  );

  let flipPieceCard = "";

  props.config.reverseMode ? flipPieceCard = (
    <Card>
      <Card.Body>
        <Card.Title><b>{props.I18n.getTrans("i.instructions_c3_title")}</b></Card.Title>
        <Card.Text>
            {props.I18n.getTrans("i.instructions_c3")}
        </Card.Text>
      </Card.Body>

    </Card>
  ) : flipPieceCard = "";

  let interchangeCard = "";
  interchangeCard = (
    <Card>
      <Card.Body>
        <Card.Title><b>{props.I18n.getTrans("i.instructions_c2_title")}</b></Card.Title>
        <Card.Text>
          {props.I18n.getTrans("i.instructions_c2")}
        </Card.Text>
      </Card.Body>

    </Card>
  );

  return (
    <>
      <Modal backdrop="static" keyboard={false} show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header>
          <Modal.Title style={{fontSize:"45px"}}>{props.I18n.getTrans("i.instructions_title")}</Modal.Title>
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
          <Button className={"btn btn-dark"}style={{width:"50%", margin:"auto"}} variant="primary" onClick={()=>{handleClose(); props.ocultarInstrucciones();}}>
            <p style={{fontSize:"20px"}}><b>Entendido</b></p>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}