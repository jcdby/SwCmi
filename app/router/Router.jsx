import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MainPage from '../components/containers/MainPage'
import GalleryPage from '../components/containers/GalleryPageContainer'
import MainLayout from '../components/layouts/MainLayout'
import ForumLayout from '../components/layouts/ForumLayout'

import Old_ForumContainer from '../components/containers/OldForumContainer'
import Old_ForumTopicContainer from '../components/containers/OldForumTopicContainer'
import ForumListContainer from '../components/containers/ForumListContainer'
import ForumContainer from '../components/containers/ForumContainer'
import TopicContainer from '../components/containers/TopicContainer'


class APPRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={MainPage}/>
                    <Route path="gallery" component={GalleryPage}/>
                    <Route path="old_forum">
                        <IndexRoute component={Old_ForumContainer} />
                        <Route path=":forumID" component={Old_ForumTopicContainer} />
                    </Route>
                    <Route path="forum" component={ForumList}>
                        <IndexRoute component={ForumListContainer} />
                        <Route path=":forumID">
                            <IndexRoute component={ForumContainer} />
                            <Route path=":topicID">
                                <IndexRoute component={TopicContainer} />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Router>
        )
    }
}
export default APPRouter;
