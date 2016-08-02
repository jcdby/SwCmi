/**
 * Created by simon on 7/31/2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import BibleView from './BibleView'

class BiblePageContainer extends React.Component {

	componentDidMount() {
    	store.dispatch(bible_actions.fetchDataIfNeeded());
  	}

    render() {
        return (
            <div>
                <BibleView/>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
  return {
  }
}

export default connect(mapStateToProps)(BiblePageContainer);