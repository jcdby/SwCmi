/**
 * Created by simon on 7/31/2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import BibleView from './BibleView'

var json_mock = [{
	"description" : "Arch",
	"text" : "Build it!"
},{
	"description" : "Pokemons",
	"text" : "Pokemons are okay!"
}];

class BiblePageContainer extends React.Component {



	componentDidMount() {
    	//store.dispatch(bible_actions.fetchDataIfNeeded());
    	//adfasfdkkk
  	}

    render() {
        return (
            <div>
                <BibleView posts={json_mock}/>
            </div>
        )
    }
}

const mapStateToStore = (store) => {
  	return {
        BiblePosts : store.BibleState.BiblePosts
  	};
};

export default connect(mapStateToStore)(BiblePageContainer);