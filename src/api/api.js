import axios from "axios";

export function getCategoriesFromApi() {
  return axios.get("https://api.chucknorris.io/jokes/categories");
}

export function getJokeFromCategory(category) {
  return axios.get(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
}

export function getJokesFromQuery(query) {
  return axios.get(`https://api.chucknorris.io/jokes/search?query=${query}
`);
}
