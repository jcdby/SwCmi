import React from 'react'
import HeaderView from './HeaderView'
import { Footer } from 'rebass'
import LoginModalView from './LoginModalView'

export default
    class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        };

        this.clickLogin = this.clickLogin.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    clickLogin() {
        this.setState({
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <HeaderView clickLogin={this.clickLogin}></HeaderView>
                <LoginModalView showModal={this.state.showModal} closeModal={this.closeModal}></LoginModalView>
                {this.props.children}
            </div>
        )
    }
}
