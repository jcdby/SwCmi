import React from 'react'
//import Header from './../components//Header'
import Header from '../views/Header'
import { Footer } from 'rebass'

export default
class indexPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header></Header>
              {this.props.children}
            </div>
        )
    }
}
