import unavailable from "../img/unavailable.jpeg";

export function getImage(path) {
  if (path) {
    return path.original ? path.original : path.medium;
  }
  return unavailable;
}
