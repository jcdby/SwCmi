import React from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Image, DropdownButton, MenuItem, Button} from 'react-bootstrap'
import {Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import ForumListItem from '../views/ForumListItem.jsx';

import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const GridForum = makeResponsive(measureItems(CSSGrid, {measureImages: true}), {
    maxWidth: 1920 * (10 / 12),
    minPadding: 0
});


export default
class ForumList extends React.Component {

    constructor(props) {
        super(props);
        this.createGridForum = this.createGridForum.bind(this);
    }

    render() {
        return (
            <div >
            {   this.createGridForum()   }
            </div>
        )
    }

    createGridForum() {
        return (
            <GridForum
                columnWidth={400}
                gutterWidth={5}
                gutterHeight={20}
                layout={layout.pinterest}
                duration={800}
                easing="ease-in">

                <Card style={{width: 350}}>
                    <ForumListItem/>
                </Card>
                <Card style={{width: 350}}>
                    <ForumListItem/>
                </Card>
                <Card style={{width: 350}}>
                    <ForumListItem/>
                </Card>
                <Card style={{width: 350}}>
                    <ForumListItem/>
                </Card>

            </GridForum>
        )
    }
}