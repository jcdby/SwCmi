import React from 'react';
import { CSSGrid, SpringGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AdvancedPagination from './AdvancedPagination';
import Button from 'react-bootstrap/lib/Button'


const StoneCutterGrid = makeResponsive(measureItems(CSSGrid, { measureImages: true }), {
    maxWidth: 1920,
    minPadding: 100
});

const DEFAULT_IMAG = "http://www.atmos.washington.edu/~carey/images/notFound.png"

export default class GalleryView extends React.Component {


    constructor(props) {
        super(props);
        this.showImg = this.showImg.bind(this);
        this.showAddPhotoButton = this.showAddPhotoButton.bind(this);
    }

    showImg(item) {
        if(!item.file_name1) {
            return <img  src={"http://localhost:10000/" + item.files[0]} onError={(e) => { e.target.src = DEFAULT_IMG } }
            />
        }else {
            return <img  src={"http://localhost:10000/" + item.file_name1} onError={(e) => { e.target.src = DEFAULT_IMG } }
            />
        }

    }

    showAddPhotoButton() {
        if(!this.props.username) {
            return <div>Please Sign UP/IN</div>
        }else {
            return <div>
            <AdvancedPagination addPhoto={this.props.addPhoto} handleSelect={this.props.handleSelect} pageNo={this.props.count} ></AdvancedPagination>
            </div>
        }
    }

    


    render() {
        return (<div style={{ position: 'relative', width: '80%', margin: 'auto', paddingTop: 20, paddingBottom: 50 }}>
              {this.showAddPhotoButton()}
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
                            {this.showImg(item)}
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

