import React, {Component} from 'react';
import SignUpView from './SignUpView';
import ModalView from './../CommonViews/ModalView';
import store from '../../store/Store';
import * as SignUpAction from './SignInUpAction';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isInit: true
    }
    this.SignUp = this.SignUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  SignUp(data) {
    this.setState({
      isInit: false
    })
    store.dispatch(SignUpAction.signUP(data))
  }

  closeModal(){
    this.setState({
      isInit: true
    });
    this.props.closeModal()

  }

  renderOnSignUp() {
    return <CircularProgress></CircularProgress>
  }

  renderSignUpForm() {
    if (this.props.signUpState.isSignUpSuccess) {
      return <h1>Welcome {this.props.userState.userName}, Sign Up Successfully</h1>
    } else if (!this.props.signUpState.isSignUpSuccess && !this.state.isInit){
      return <SignUpView msg={this.props.signUpState.errMsg} {...this.props} onClickSignUp={this.SignUp} ></SignUpView>
    } else {
      let msg = ''
      return <SignUpView msg={msg} onClickSignUp={this.SignUp} ></SignUpView>
    }

  }

  render() {
    return (<div>
      <ModalView showModal={this.props.showModal} closeModal={this.closeModal} >
        {this.props.signUpState.isSignUping ? this.renderOnSignUp() : this.renderSignUpForm() }
      </ModalView>
    </div>
    );

  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    signUpState: state.signUpState,
    userState: state.userState
  }
}

export default connect(mapStateToProps)(SignUpContainer);

