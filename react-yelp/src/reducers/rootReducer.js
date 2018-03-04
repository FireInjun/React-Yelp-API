import * as actionTypes from '../actions/actions';

const initialState = {
  listings: [],
  fetchingListings: false,
  listingsFetched: false,
  error: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log(`The reducer ran ${action.type}`);
  switch (action.type) {
    case actionTypes.GETTING_LISTINGS:
      return { ...state, fetchingListings: true };
    case actionTypes.FETCH_YELP_SUCCESS:
      return {
        ...state,
        listings: action.payload,
        fetchingListings: false,
        listingsFetched: true,
      };
    default:
      return state;
  }
};
