import React, {Component} from 'react';
import HeaderView from './HeaderView';
import {connect} from 'react-redux';
import * as HeaderActions from './HeaderActions.js';
import store from '../../store/Store.js';


class HearderContainer extends Component {
  constructor(props) {
    super(props);
    
    this.clickLogin = this.clickLogin.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }


  componentDidMount() {
    //check user token
    store.dispatch(HeaderActions.checkToken())
  }
  

  clickLogin() {

  }
  

  onClickLogout() {
    store.dispatch(HeaderActions.logout());
    
  }


  render() {
    return (
      <div>
        <HeaderView {...this.props} onClickSignIn={this.props.onClickSignIn} onClickSignUp={this.props.onClickSignUp} onClickLogout={this.onClickLogout}></HeaderView>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return ({
    userState: state.userState
  })
}

export default connect(mapStateToProps)(HearderContainer);