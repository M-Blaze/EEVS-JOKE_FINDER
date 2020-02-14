import { getCategoriesFromApi } from "../api/api";

export const getCategories = () => dispatch => {
  getCategoriesFromApi().then(response => {
    console.log(response);

    dispatch({
      type: "SET_CATEGORIES",
      payload: response.data
    });
  });
};
