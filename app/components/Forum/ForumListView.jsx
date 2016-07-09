import React from 'react'
import ForumListItemView from './ForumListItemView';

import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';
import {Card} from 'material-ui/Card';

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
                    {this.props.forumListProps.map((forum, index) => {
                        return (
                            <Card className="forumlist-forum-item" key={index} style={{width: 350}}>
                                <ForumListItemView forumProp = {forum}/>
                            </Card>
                        )
                    })}

            </GridForum>
        )
    }
}
