const API_KEY = 'b5cd3fae011a36a857068d95d756f08e';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendCollection() {
  const trendMovies = await fetch(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
  return trendMovies;
}

export async function movieDetails(movieId) {
  const oneMovieInfo = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
  return oneMovieInfo;
}

export async function movieActors(movieId) {
  const actorsInfo = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
  return actorsInfo;
}

export async function movieReviews(movieId) {
  const reviews = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));
  return reviews;
}

export async function fetchMoviesByKeyWord(value) {
  const movies = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => console.log(error));

  return movies;
}
