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
    this.SignUp = this.SignUp.bind(this);
  }

  SignUp(data) {
    store.dispatch(SignUpAction.signUP(data))
  }

  renderOnSignUp() {
    return <CircularProgress></CircularProgress>
  }

  renderSignUpForm() {
    if (this.props.userState.isLogined) {
      return <h1>Welcome {this.props.userState.userName}</h1>
    } else {
      return <SignUpView {...this.props} onClickSignUp={this.SignUp} ></SignUpView>
    }

  }

  render() {
    return (<div>
      <ModalView showModal={this.props.showModal} closeModal={this.props.closeModal} >
        {this.props.userState.isSignUping ? this.renderOnSignUp() : this.renderSignUpForm() }
      </ModalView>
    </div>
    );

  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    userState: state.userState
  }
}

export default connect(mapStateToProps)(SignUpContainer);

