import React from 'react';

import {ListGroup, ListGroupItem, Panel,Accordion} from 'react-bootstrap';
import {Link} from 'react-router';

export default
class OldForum_list extends React.Component {

    render() {
        return (
            <div id="forum-container">
                <ListGroup>
                     {this.props.categoriesProp.map((category) => {
                         return (
                             this.displayCategory(category)
                         )
                     })}
                </ListGroup>
            </div>
        )
    }

    displayCategory(cat) {
        return (
            <ListGroupItem  key={cat.id}>
                <span className="category-name" >
                    <Link to={'/old_forum/' + cat.id}>
                        <h2>
                            <em>Go to </em>
                            <strong > {cat.title} </strong>
                        </h2>
                    </Link>
                    <Accordion>
                        <Panel header="Description" eventKey={cat.id} >
                            <span className="category-description"> {cat.description} </span>
                        </Panel>
                    </Accordion>
                </span>
                <span className="category-posts" > {cat.posts} posts. </span>
                <span className="category-active" >
                    <i>Last post: {cat.active}</i>
                </span>
            </ListGroupItem>
        )
    }

}
