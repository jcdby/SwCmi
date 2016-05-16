import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import HomeContainer from './containers/HomeContainer'





ReactDOM.render((<Router history={browserHistory}>
   <Route path="/" component={HomeContainer}>
   </Route>
 </Router>),document.getElementById('suwonApp')
        // <h1>lijincheng</h1>,

      );
      // <Router history={browserHistory}>
      //    <Route path="/" component={HomeContainer}>
      //      <Route path="about" component={About}/>
      //      <Route path="users" component={Users}>
      //        <Route path="/user/:userId" component={User}/>
      //      </Route>
      //      <Route path="*" component={NoMatch}/>
      //    </Route>
      //  </Router>
