const BASE_URL_TMDB = 'https://api.themoviedb.org/3/'
const API_KEY_TMDB = '?api_key=b11a826f02f212ff4bb0b99960b729bb'

export function searchMovie(movieTitle){
  return fetch(BASE_URL_TMDB + 'search/movie' + API_KEY_TMDB + '&query=' + movieTitle).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })
}

export function getMovieInfo(id) {
  return fetch(BASE_URL_TMDB + 'movie/' + id + API_KEY_TMDB).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data
  })
}

export function getApiConfiguration() {
  return fetch(BASE_URL_TMDB + 'configuration' + API_KEY_TMDB).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data
  })
}

export function onNetflix(title) {
  return fetch('https://netflixroulette.net/api/api.php?title=' + title).then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data);
  })
}
