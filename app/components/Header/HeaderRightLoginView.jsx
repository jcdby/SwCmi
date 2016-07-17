import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem'

class LoginComponent extends Component {
  constructor(props) {
    super(props);  
  }
   

  renderWhenLogined() {
    return (
      <Nav pullRight>
     <NavItem eventKey={1} href="#" >{'UserName: ' + this.props.userState.userName + ' Logout'} </NavItem>
     </Nav>
    )
  }

  renderWhenNoLogined() {
    return (<Nav pullRight>
      <NavItem eventKey={1} href="#" onClick={this.props.onClickSignUp} >SignUp</NavItem>
        <NavItem eventKey={2} href="#" onClick={this.props.onClickSignIn} >SignIn</NavItem>        
       </Nav> 
    )
  }
  
  render() {
    return ( 
      <div>{ this.props.userState.isLogined ? this.renderWhenLogined() : this.renderWhenNoLogined() }</div>    
      
    );
  }
}

LoginComponent.propTypes = {
  onClickSignIn: PropTypes.func,
  onClickSignUp: PropTypes.func,
  isLogined: PropTypes.bool,
  username: PropTypes.string,
}

export default LoginComponent;