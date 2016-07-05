import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal'
import ModalHeader from 'react-bootstrap/lib/ModalHeader'
import ModalBody from 'react-bootstrap/lib/ModalBody'
import ModalFooter from 'react-bootstrap/lib/ModalFooter'
import Button from 'react-bootstrap/lib/Button';

class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    }


  }
  

  

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal
    })
  }
  

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Login Modal</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;