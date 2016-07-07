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

                {(() => {
                    switch (forum.topics_list.length) {
                        case 0:
                            return (
                                <span>
                                    <emp> There are no topics discussed in this forum. Be the first to create one! </emp>
                                </span>
                            );
                        case 1:
                            return (<span>
                                <emp> There is </emp>
                                <strong> {forum.topics_list.length}</strong>
                                <emp> topic discussed in this forum </emp>
                            </span>
                            );
                        default:
                            return (
                                <span>
                                    <emp> There are </emp>
                                    <strong> {forum.topics_list.length}</strong>
                                    <emp> topics discussed in this forum </emp>
                                </span>
                            );
                    }
                })()}

                    <br/>

                    <h3>Recent topics:</h3>
                    <ListGroup>
                    {forum.topics_list.map((topic, index) => {
                        return (
                            <LinkContainer key={index} to={'/forum/' + forum.state + '/' + topic.state}>
                                <ListGroupItem className="topic">
                                   {topic.title}
                                </ListGroupItem>
                            </LinkContainer>
                        )
                    })}
                    </ListGroup>

                    <LinkContainer to={'/forum/' + forum.state}>
                        <Button bsStyle="primary" bsSize="large" block>Go to Forum</Button>
                    </LinkContainer>
                </CardText>
            </span>
        )
    }
}