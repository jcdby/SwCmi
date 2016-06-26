import React from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Image, DropdownButton, MenuItem} from 'react-bootstrap'

export default
class ForumList extends React.Component {

    constructor(props) {
        super(props);
        this.createForumList = this.createForumList.bind(this);
        this.displayForum = this.displayForum.bind(this);
    }

    render() {
        return (
            <div>
            {   this.createForumList()   }
            </div>
        )
    }

    createForumList()  {

        return (
            <Grid>
                <Row className="header">
                    <Col  md={8} mdOffset={1}>
                        Welcome to the Forum page. You can select a Forum, see the associated Topics and react to them.
                    </Col >
                    <Col md={2} mdOffset={1}>
                        <DropdownButton title="Missionary Work" id="forum-naviguation">
                            <MenuItem eventKey="1">General Discussion</MenuItem>
                            <MenuItem eventKey="2">Worship</MenuItem>
                            <MenuItem eventKey="3">Vacaton &amp; Family</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col  md={12}>
                        <ListGroup id="forum-list-container">
                            {this.displayForum('') /* normally a map function */}
                            {this.displayForum('') /* normally a map function */}
                            {this.displayForum('') /* normally a map function */}
                        </ListGroup>
                    </Col >
                </Row>
            </Grid>
        )
    };

    displayForum(forumData) {
        return (
            <ListGroupItem className="forumList-forum">

            {/* md total = 12 columns */}
                <Grid>
                    <Row className="header">
                        <Col  md={2}>
                            <Image src="/assets/kittenjesus.jpg" thumbnail />
                        </Col>
                        <Col md={5}>
                            <h2>Missionary Work</h2>
                            <span>
                                A forum discussing missionary work in general.
                                <br/>
                                You can also find more about the missions of our members oversea.
                            </span>
                        </Col>
                        <Col md={5}>
                            <emp> Last Post: June 9th, 2016 at 13:15 by</emp>
                            <strong> Jincheng</strong>
                            <br/>
                            3 Topics are discussed in Missionary Work.
                        </Col>
                    </Row>
                    <Row className="recent-topics">
                        <Col md={10} mdOffset={2} >
                            <h3>Recent topics:</h3>
                            <ListGroup>
                                <ListGroupItem className="topic">
                                    Israel and missionary work
                                </ListGroupItem>
                                <ListGroupItem className="topic">
                                    How to convert people, the book
                                </ListGroupItem>
                                <ListGroupItem className="topic">
                                    How to become a missionary&#63; {/* the question mark */}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </ListGroupItem>
        )
    };
}