import React from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export default function ModalStart(props) {
    return (
      <Modal isOpen={props.showModal} onRequestClose={props.closeModal} style={customStyles}>
        <h2>Hello</h2>
        <div>I am a modal</div>      
        <button onClick={props.closeModal}>close</button>  
      </Modal>);
}