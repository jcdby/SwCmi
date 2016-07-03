//@flow
import Pagination from 'react-bootstrap/lib/Pagination'
import React, {Component} from 'react';

class AdvancedPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    this.props.handleSelect(this.state.activePage);
  }

  render() {
    return (
      <div>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={this.props.pageNo}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default AdvancedPagination;

