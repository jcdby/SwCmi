import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import {HelpBlock} from 'react-bootstrap'

class SignInView extends Component {
  constructor(props) {
    super(props);
   
  }
  

  render() {
    return (
      <div>
         <Form horizontal action="/login">
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    UserName
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" name="email" />
                </Col>
                 <Col sm={12}>
                    <HelpBlock>Help text with validation state.</HelpBlock>
                </Col> 
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type="password" placeholder="Password" name="password" />
                </Col>
                 <Col sm={12}>
                    <HelpBlock>Help text with validation state.</HelpBlock>
                </Col> 
            </FormGroup>            

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button >
                        Sign in
                    </Button>
                </Col>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignInView;