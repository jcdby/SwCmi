import React from 'react';
import Image from 'react-bootstrap/lib/Image'
import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AutoResponsive from 'autoresponsive-react'

const Grid = makeResponsive(measureItems(CSSGrid, { measureImages: true }), {
    maxWidth: 1920,
    minPadding: 100
});

export default class Gallery extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {
        return (<div style={{ width: '80%', margin: 'auto', paddingTop: 20 }}>
            <Grid
                columns={5}
                columnWidth={350}
                gutterWidth={5}
                gutterHeight={5}
                layout={layout.pinterest}
                duration={800}
                easing="ease-in"
                >
                {this.props.galleryList.map((item, index) => {
                    return (<Card>
                        <CardMedia style={{ width: 350 }}>
                            <img src={"http://localhost:10000/" + item.file_name1} />
                        </CardMedia>
                        <CardTitle title={item.subject} subtitle="Card subtitle" />
                        <CardText>
                            {item.memo}
                        </CardText>
                    </Card>)

                }) }

            </Grid>
        </div>

        )
    }
};

Gallery.propTypes = { galleryList: React.PropTypes.array };
Gallery.defaultProps = { galleryList: [{ file_name1: '21', subject: 'dfd', memo: 'bla' }] };

