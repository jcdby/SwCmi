import React, {Component} from 'react';
import SignInView from './SignInView';
import ModalView from '../CommonViews/ModalView'

class SignInContainer extends Component {
  render() {
    return (
      <div>
         <ModalView showModal={this.props.showModal} closeModal={this.props.closeModal} >
          <SignInView></SignInView>
        </ModalView>    
      </div>
    );
  }
}

export default SignInContainer;