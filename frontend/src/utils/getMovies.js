const API = "http://api.tvmaze.com/search/shows?q=";

export function getMovies(path) {
  return fetch(API + path).then((result) => result.json());
}