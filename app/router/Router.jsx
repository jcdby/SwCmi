import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import MainPageContainer from '../components/MainPage/MainPageContainer'

import GalleryPageContainer from '../components/Gallery/GalleryPageContainer'

import BiblePageContainer from '../components/Bible/BiblePageContainer'

import MainLayout from '../components/layouts/MainLayout'

import Old_ForumContainer from '../components/Old_Forum/Old_ForumContainer'
import Old_ForumTopicContainer from '../components/Old_Forum/Old_ForumTopicContainer'

import ForumLayout from '../components/Forum/ForumLayout'
import ForumListContainer from '../components/Forum/ForumListContainer'
import ForumContainer from '../components/Forum/ForumContainer'
import TopicContainer from '../components/Forum/TopicContainer'


class APPRouter extends React.Component {   
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={MainLayout}>
                    <IndexRoute component={MainPageContainer}/>
                    <Route path="bible" component={BiblePageContainer}/>
                    <Route path="gallery" component={GalleryPageContainer}/>
                    <Route path="old_forum">
                        <IndexRoute component={Old_ForumContainer} />
                        <Route path=":forumID" component={Old_ForumTopicContainer} />
                    </Route>
                    <Route path="forum" component={ForumLayout}>
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
