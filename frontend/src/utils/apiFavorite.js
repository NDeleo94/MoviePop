export function apiFavorite() {
  fetch("http://localhost:8000/moviepop/api/favorites/")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
