import React from 'react'
//import Header from './../components//Header'
import Header from '../views/Header'
import { Footer } from 'rebass'
import LoginModal from '../views/LoginModal'

export default
    class indexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }

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
                <Header clickLogin={this.clickLogin}></Header>
                <LoginModal showModal={this.state.showModal} closeModal={this.closeModal}></LoginModal>
                {this.props.children}
            </div>
        )
    }
}
