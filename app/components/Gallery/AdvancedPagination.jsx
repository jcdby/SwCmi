//@flow
import Pagination from 'react-bootstrap/lib/Pagination'
import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button'
import {Grid, Row, Col} from 'react-bootstrap'

class AdvancedPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
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
        <Row style={{height: "100%"}} >
          <Col md={10}>
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
          </Col>
          <Col md={2}>
          <div  ></div>
            <Button style={{margin: 20}} bsStyle="primary">Add Photo</Button>
          </Col>
        </Row>


      </div>
    );
  }
}

export default AdvancedPagination;

