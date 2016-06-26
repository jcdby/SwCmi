import React from 'react';
import Image from 'react-bootstrap/lib/Image'
import { CSSGrid,SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AutoResponsive from 'autoresponsive-react'

const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
});

export default class Gallery extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {
        // let item = this.props.galleryList;
        // console.log("rendered!")

        return (
            <Grid
                columns={5}
                columnWidth={310}
                gutterWidth={5}
                gutterHeight={5}
                layout={layout.pinterest}
                duration={800}
                easing="ease-in"
                >
                {this.props.galleryList.map((item, index) => {
                    return (<Card  >
                        <CardMedia style={{ width: 300 }}>
                            <img src={"http://localhost:10000/" + item.file_name1} />
                        </CardMedia>
                        <CardTitle title={item.subject} subtitle="Card subtitle" />
                        <CardText>
                            {item.memo}
                        </CardText>
                    </Card>)

                }) }

            </Grid>
        )
    }
};

Gallery.propTypes = { galleryList: React.PropTypes.array };
Gallery.defaultProps = { galleryList: [{ file_name1: '21', subject: 'dfd', memo: 'bla' }] };

