const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'api_key=b11a826f02f212ff4bb0b99960b729bb'

export function searchMovie(movieTitle){
  return fetch(BASE_URL + 'search/movie?' + API_KEY + '&query=' + movieTitle).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })
}
