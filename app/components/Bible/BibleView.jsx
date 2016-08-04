import React from 'react';

export default class BibleView extends React.Component {

    render() {
        return (
            <div>
            {this.props.posts.map((obj) => {
                return (
                    <div>
                    <p>{obj.description}</p>
                    <p>{obj.text}</p>
                    </div>
                )
            })}
            </div>
          )
    }
}