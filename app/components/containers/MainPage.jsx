import React from 'react'
import HomePage from '../views/HomePage'
import Header from '../views/Header'
import LoginModal from '../views//LoginModal'

export default class MainPage extends React.Component {

  

  constructor(props) {
    super(props);
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
        <HomePage></HomePage>
        <LoginModal showModal={this.state.showModal} closeModal={this.closeModal}></LoginModal>
      </div>
    )
  }
}
