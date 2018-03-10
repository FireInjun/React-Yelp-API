import React, { Component } from 'react';
import { fetchListings } from '../actions/actions';
import { connect } from 'react-redux';

class YelpForm extends Component {
  state = {
    location: '',
    search_term: '',
    sort_by: { value: 'rating' },
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = (e) => {
    e.preventDefault();
    this.props.fetchListings(this.state);
    this.setState({
      location: '',
      search_term: '',
      sort_by: { value: 'rating' },
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleInput}
            type="text"
            name="location"
            placeholder="Location"
          />
          <input
            onChange={this.handleInput}
            type="text"
            name="search_term"
            placeholder="Search Term"
          />
          <select onChange={this.handleInput} value={this.state.sort_by.value}>
            <option value="rating" />
            <option value="best_match" />
            <option value="review_count" />
            <option value="distance" />
          </select>
          <button onClick={this.search}> Search Businesses</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingListings: state.fetchingListings,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchListings })(YelpForm);
