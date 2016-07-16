import React, {Component} from 'react';
import SignUpView from './SignUpView';
import ModalView from './../CommonViews/ModalView'

class SignUpContainer extends Component {

  


  render() {
    return (
      <div>
        <ModalView showModal={this.props.showModal} closeModal={this.props.closeModal} >
          <SignUpView></SignUpView>
        </ModalView>        
      </div>
    );
  }
}

export default SignUpContainer;