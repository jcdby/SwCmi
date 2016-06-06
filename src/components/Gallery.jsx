import React from 'react';
import PackLayout from 'react-layout-pack';
import Thumbnail from 'react-bootstrap/lib/Thumbnail'


export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <PackLayout>
                {
                    this.props.gallery.map((item) => {
                        return (
                            <Thumbnail>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image style={{ width: 150, height: 150 }} src={item.file_name1} circle></Image>
                                </div>
                                <h3>{item.subject}</h3>
                                <p>{item.memo}</p>
                            </Thumbnail>
                        )
                    })
                }
            </PackLayout>
        )
    }
};

