import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MainPage from './page//MainPage'
import GalleryPage from './page/GalleryPage'
import index from './page//index'

export default class APPRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={index}>
          <IndexRoute component={MainPage}/>
          <Route path="gallery" component={GalleryPage}/>
        </Route>
        
      </Router>
    )

  }
}



// <Router history={browserHistory}>
//    <Route path="/" component={HomeContainer}>
//      <Route path="about" component={About}/>
//      <Route path="users" component={Users}>
//        <Route path="/user/:userId" component={User}/>
//      </Route>
//      <Route path="*" component={NoMatch}/>
//    </Route>
//  </Router>

