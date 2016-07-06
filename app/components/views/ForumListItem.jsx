import React from 'react'
var classNames = require('classnames');

import { CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ListGroup, ListGroupItem, Image, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default
class ForumListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.getImageClasses = this.getImageClasses.bind(this);
        this.getDetailsClasses = this.getDetailsClasses.bind(this);
    }

    componentDidMount() {

    }

    onMouseOver() {
        this.setState({active: true});
    }

    onMouseOut() {
        this.setState({active: false});
    }

    getImageClasses() {
        var imageClasses = classNames({
            'forum-card-image': true,
            'hidden': this.state.active,
            'active': !this.state.active
        });
        return imageClasses;
    }

    getDetailsClasses() {
        var detailsClasses = classNames({
            'forum-card-details': true,
            'hidden ': !this.state.active,
            'active': this.state.active
        });
        return detailsClasses;
    }


    render() {
        var imageClasses = this.getImageClasses();
        var detailsClasses = this.getDetailsClasses();

        var forum = this.props.forumProp;
        return (
            <span onMouseOut ={this.onMouseOut} onMouseOver ={this.onMouseOver}>
                <LinkContainer to={'/forum/' + forum.state}>
                    <a>
                        <CardTitle title={forum.title} subtitle={forum.subtitle} />
                    </a>
                </LinkContainer>

                {/*  + here should have a wrapper that keeps the size the same
                 the details card could have the same image as a background */}

                <CardMedia className={imageClasses}  style={{width: 350}}>
                    <Image   style={{height: 500}} src="/assets/kittenjesus.jpg" />
                </CardMedia>

                <CardText className={detailsClasses}  style={{height: 500}} >
                    <span>
                          {forum.description}
                    </span>

                    <br/>
                    <emp> Last Post: {forum.active} by</emp>
                    <strong> {forum.author}</strong>
                    <br/>

                    <br/>
                    <emp> There are </emp>
                    <strong> {forum.posts}</strong>
                    <emp> posts in this forum </emp>
                    <br/>

                    <h3>Recent topics:</h3>
                    <ListGroup>
                        <LinkContainer to="/forum/missionary_work/israel_and_missionary_work">
                            <ListGroupItem className="topic">
                                Israel and missionary work
                            </ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/forum/missionary_work/how_to_convert_people_the_book">
                            <ListGroupItem className="topic">
                                How to convert people, the book
                            </ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/forum/missionary_work/how_to_become_a_missionary">
                            <ListGroupItem className="topic">
                                How to become a missionary&#63; {/* the question mark */}
                            </ListGroupItem>
                        </LinkContainer>
                    </ListGroup>

                    <LinkContainer to={'/forum/' + forum.state}>
                        <Button bsStyle="primary" bsSize="large" block>Go to Forum</Button>
                    </LinkContainer>
                </CardText>
            </span>
        )
    }
}