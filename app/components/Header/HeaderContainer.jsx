import React, {Component} from 'react';
import HeaderView from './HeaderView'

class HearderContainer extends Component {
  constructor(props) {
    super(props);
    
    this.clickLogin = this.clickLogin.bind(this);
  }


  componentDidMount() {
    //check user token
  }
  

  clickLogin() {

  }
  


  render() {
    return (
      <div>
        <HeaderView onClickSignIn={this.props.onClickSignIn} onClickSignUp={this.props.onClickSignUp} ></HeaderView>
      </div>
    );
  }
}

export default HearderContainer;