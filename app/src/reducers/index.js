import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null,
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action types are FETCHING, SUCCESS, and FAILURE
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
      };

    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
