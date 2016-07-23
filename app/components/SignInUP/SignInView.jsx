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
        this.state = {
            username: '',
            password: ''
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onClickSignIn = this.onClickSignIn.bind(this);
    }

    
    

    updateUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onClickSignIn() {
        let data = {};
        data.username = this.state.username;
        data.password = this.state.password;

        this.props.onClickSignIn(data)
    }


    render() {
        let errOnUserName = '';
        let errOnPassWord = '';
        switch (this.props.errOn || '') {
            case 'userName':
                errOnUserName = this.props.msg
                break;
            case 'password':
                errOnPassWord = this.props.msg
                break;
            default:
                break;
        }


        return (
            <div>
                <Form horizontal >
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            UserName
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" name="email" value={this.state.username} onChange={this.updateUsername} />
                        </Col>
                        <Col sm={12}>
                            <HelpBlock>{errOnUserName}</HelpBlock>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.updatePassword} />
                        </Col>
                        <Col sm={12}>
                            <HelpBlock>{errOnPassWord}</HelpBlock>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.onClickSignIn} >
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