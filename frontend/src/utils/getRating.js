export function getRating(path) {
    if (path) {
      return path.average ? path.average : 0;
    }
  }
  