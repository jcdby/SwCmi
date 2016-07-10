import React from 'react';
import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AdvancedPagination from './AdvancedPagination'


const StoneCutterGrid = makeResponsive(measureItems(SpringGrid, { measureImages: true }), {
    maxWidth: 1920,
    minPadding: 100
});

const DEFAULT_IMAG = "http://www.atmos.washington.edu/~carey/images/notFound.png"

export default class GalleryView extends React.Component {


    constructor(props) {
        super(props)
    }

    handleImgError () {

    }


    render() {
        return (<div style={{ position: 'relative', width: '80%', margin: 'auto', paddingTop: 20, paddingBottom: 50 }}>
            <AdvancedPagination handleSelect={this.props.handleSelect} pageNo={this.props.count} ></AdvancedPagination>
            <StoneCutterGrid
                columnWidth={350}
                gutterWidth={5}
                gutterHeight={5}
                layout={layout.pinterest}
                duration={800}
                easing="ease-in"
                >
                {this.props.galleryList.map((item, index) => {
                    return (<Card >
                        <CardMedia style={{ width: 350 }}>
                            <img  src={"http://localhost:10000/" + item.file_name1} onError={(e)=>{e.target.src=DEFAULT_IMG}}
                            />
                        </CardMedia>
                        <CardTitle title={item.subject} subtitle={item.name} />
                        <CardText>
                            {item.memo}
                        </CardText>
                    </Card>)

                }) }

            </StoneCutterGrid>

        </div>

        )
    }
}

GalleryView.propTypes = { galleryList: React.PropTypes.array };
GalleryView.defaultProps = { galleryList: [{ file_name1: '21', subject: 'dfd', memo: 'bla' }] };

