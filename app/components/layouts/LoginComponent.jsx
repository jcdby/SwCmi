import React, {Component} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem'

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logined: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }


  handleLogin() {
    this.props.clickLogin()
  }

  handleSignIn() {
    this.props.clickLogin()
  }

  handleLogout() {

  }

  renderWhenLogined() {
    return (
      <Nav pullRight>
     <NavItem eventKey={1} href="#" onClick={() => {this.setState({logined: false})}} >UserName:{this.props.username + ' Logout'} </NavItem>
     </Nav>
    )
  }

  renderWhenNoLogined() {
    return (<Nav pullRight>
      <NavItem eventKey={1} href="#" onClick={this.handleSignIn} >SignUp</NavItem>
        <NavItem eventKey={2} href="#" onClick={this.handleLogin} >SignIn</NavItem>        
       </Nav> 
    )
  }
  
  render() {
    return ( 
      <div>{ this.state.logined ? this.renderWhenLogined() : this.renderWhenNoLogined() }</div>    
      
    );
  }
}

export default LoginComponent;