import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import { Footer } from 'rebass';
import SignUpContainer from '../SignInUP/SignUpContainer'
import SignInContainer from '../SignInUP/SignInContainer'

export default
    class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignInModal: false,
            showSignUpModal: false,
            username: '',
            isLogined: false
        }

        this.onClickSignIn = this.onClickSignIn.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onCloseSignIn = this.onCloseSignIn.bind(this);
        this.onCloseSignUp = this.onCloseSignUp.bind(this);


    }

    onClickSignIn() {
        this.setState({
            showSignInModal: !this.state.showSignInModal,
            showSignUpModal: false
        })
    }

    onClickSignUp() {
        this.setState({
            showSignUpModal: !this.state.showSignUpModal,
            showSignInModal: false
        })
    }

    onCloseSignIn() {
        this.setState({
            showSignInModal: false
        })
    }

    onCloseSignUp() {
        this.setState({
            showSignUpModal: false
        })
    }

    


    render() {
        return (
            <div>
                <HeaderContainer  onClickSignIn={this.onClickSignIn} onClickSignUp={this.onClickSignUp} username={this.state.username} isLogined={this.state.isLogined} ></HeaderContainer>
                <SignUpContainer showModal={this.state.showSignUpModal} closeModal={this.onCloseSignUp} ></SignUpContainer>
               <SignInContainer showModal={this.state.showSignInModal} closeModal={this.onCloseSignIn} ></SignInContainer>
                {this.props.children}
            </div>
        )
    }
}
