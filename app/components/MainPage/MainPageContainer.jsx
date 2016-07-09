import React from 'react'
import HomePageView from './HomePageView'

export default class MainPageContainer extends React.Component {

  constructor(props) {
    super(props);  

  }

  render() {
    return (
      <div>
        <HomePageView></HomePageView>
      </div>
    )
  }
}
