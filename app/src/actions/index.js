import axios from "axios";

// Create 3 different actions
// 1. Fetching
// 2. Success
// 3. Failure

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// the url to GET the characters from is `https://rickandmortyapi.com/api/character/`
export const getCharacters = () => {
  dispatch({ type: FETCHING });

  axios
    .get("https://rickandmortyapi.com/api/")
    .then((res) => dispatch({ type: SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: FAILURE, payload: err }));
};
