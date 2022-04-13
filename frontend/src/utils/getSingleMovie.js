const APISingleMovies = "http://api.tvmaze.com/shows/";

export function getSingleMovie(peliculaId) {
  return fetch(APISingleMovies + peliculaId).then((result) => result.json());
}