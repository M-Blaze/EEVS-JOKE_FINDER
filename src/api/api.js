import axios from "axios";

export function getCategoriesFromApi() {
  return axios.get("https://api.chucknorris.io/jokes/categories");
}
