import { getCategoriesFromApi, getJokesFromQuery } from "../api/api";

export const getCategories = () => dispatch => {
  getCategoriesFromApi().then(response => {
    dispatch({
      type: "SET_CATEGORIES",
      payload: response.data
    });
  });
};

export const searchJokes = query => dispatch => {
  return getJokesFromQuery(query).then(jokes => {
    if (jokes.length !== 0) {
      dispatch({
        type: "SET_JOKES",
        payload: jokes.data.result
      });
    }
  });
};
