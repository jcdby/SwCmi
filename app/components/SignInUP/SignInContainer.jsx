import React, {Component} from 'react';
import SignInView from './SignInView';
import ModalView from '../CommonViews/ModalView';
import store from '../../store/Store';
import {signIn} from '../SignInUP/SignInUpAction';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux'

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.state ={
      isInit: true
    }
    this.signIn = this.signIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }
  
  signIn(data: any) {
    this.setState({
      isInit: false
    })
    store.dispatch(signIn(data));
  }

  closeModal() {
    this.setState({
      isInit: true
    })
    this.props.closeModal()
  }

  renderSigning() {
    return <CircularProgress></CircularProgress>
  }

  renderSignForm() {
    if(this.props.userState.isLogined){
      return <h1>{this.props.userState.userName + ' ' + this.props.userState.msg}</h1>
    }else if(!this.props.userState.isSuccess && !this.state.isInit) {
      return <SignInView errOn={this.props.userState.errOn} msg={this.props.userState.msg} onClickSignIn={this.signIn}></SignInView>
    }else {
      let msg =''
      return <SignInView errOn={null} onClickSignIn={this.signIn} ></SignInView>
    }
  }


  render() {
    return (
      <div>
         <ModalView showModal={this.props.showModal} closeModal={this.closeModal} >
          {this.props.userState.isSignIning ? this.renderSigning() : this.renderSignForm()}
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

export default connect(mapStateToProps)(SignInContainer);