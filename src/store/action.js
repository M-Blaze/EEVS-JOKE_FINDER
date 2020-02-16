import {
  getCategoriesFromApi,
  getJokesFromQuery,
  getJokeFromCategory
} from "../api/api";

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
    const resultJokes = jokes.data.result;
    if (resultJokes.length !== 0) {
      dispatch({
        type: "SET_JOKES",
        payload: resultJokes
      });
      dispatch({
        type: "SET_ACTIVE_CATEGORY",
        payload: "Random"
      });
    }
  });
};

export const setActiveCategory = categoryName => dispatch => {
  dispatch({
    type: "SET_ACTIVE_CATEGORY",
    payload: categoryName
  });
};

export const fetchJoke = category => dispatch => {
  return getJokeFromCategory(category).then(joke => {
    if (joke.length !== 0) {
      dispatch({
        type: "SET_JOKES",
        payload: [joke.data]
      });
    }
  });
};
