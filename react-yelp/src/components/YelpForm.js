import React, { Component } from 'react';
import { fetchListings } from '../actions/actions';
import { connect } from 'react-redux';

class YelpForm extends Component {
  state = {
    location: '',
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.props.fetchListings(this.state.location);
    this.setState({
      location: '',
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleInput}
            type="number"
            name="zip"
            placeholder="Zip"
          />
          <button onClick={this.search}> Search Businesses</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingListings: state.fetchingListings,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchListings })(YelpForm);
