import React from 'react';

import {Button,ListGroup, ListGroupItem, Panel,Accordion} from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';


export class Forum_list extends React.Component {


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
                    <Link to={'/forum/' + cat.id}>
                        <h2>
                            <em>Go to </em>
                            <strong > {cat.name} </strong>
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
    };



}

export default Forum_list;

//
//render() {
//    return (
//        <div id="forum-container">
//            <table>
//                <thead>
//                    <tr>
//                        <th> Name of forum </th>
//                        <th> Description </th>
//                        <th> Number of posts </th>
//                        <th> Last active </th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {this.props.categoriesProp.map((category) => {
//                        return (
//                            this.displayCategory(category)
//                        )
//                    })}
//                </tbody>
//            </table>
//        </div>
//    )
//}