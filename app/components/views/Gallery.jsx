import React from 'react';
import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StoneCutterGrid = makeResponsive(measureItems(CSSGrid, { measureImages: true }), {
    maxWidth: 1920,
    minPadding: 100
});

export default class Gallery extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {
        return (<div style={{ width: '80%', margin: 'auto', paddingTop: 20, paddingBottom: 50 }}>
            <StoneCutterGrid
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

            </StoneCutterGrid>
        </div>

        )
    }
};

Gallery.propTypes = { galleryList: React.PropTypes.array };
Gallery.defaultProps = { galleryList: [{ file_name1: '21', subject: 'dfd', memo: 'bla' }] };

