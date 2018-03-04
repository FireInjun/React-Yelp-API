import axios from 'axios';
import token from '../token';

export const ERROR = 'ERROR';
export const GET_LISTINGS = 'GET_LISTINGS';
export const GETTING_LISTINGS = 'GETTING_LISTINGS';
export const FETCH_YELP_SUCCESS = 'FETCH_YELP_SUCCESS';

const apiUrl = 'https://api.yelp.com/v3/graphql';

// Must create a separate js file exporting your API token
var axiosConfig = {
  headers: { Authorization: `Bearer ${token}`},
};

//Async Action
export const fetchListings = (query) => {
  const listings = axios.get(apiUrl, query, axiosConfig);
  return dispatch => {
    // Returns a promise
    listings
    .then(({ data }) => {
        dispatch({ type: GET_LISTINGS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
