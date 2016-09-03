import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import {HelpBlock} from 'react-bootstrap'

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.onUpdateUsername = this.onUpdateUsername.bind(this);
    this.onUpdatePassword = this.onUpdatePassword.bind(this);
    this.onClickSignUp = this.onClickSignUp.bind(this);

  }

  onUpdateUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onUpdatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onClickSignUp() {
    let data = {};
    data.username = this.state.username;
    data.password = this.state.password;

    this.props.onClickSignUp(data)
  }


  render() {
    return (
      <div>
        <Form horizontal>
          {<HelpBlock>{this.props.msg}</HelpBlock>}
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              UserName
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="User Name" name="username" value={this.state.username}
                           onChange={this.onUpdateUsername}/>
            </Col>

          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" name="password" value={this.state.password}
                           onChange={this.onUpdatePassword}/>
            </Col>

          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.onClickSignUp}>
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignUpView;