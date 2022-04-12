const API = "http://api.tvmaze.com/search/shows?q=star%20wars";

export function getMovies() {
  return fetch(API).then((result) => result.json());
}