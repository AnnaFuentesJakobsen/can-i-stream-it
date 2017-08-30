const BASE_URL_TMDB = 'https://api.themoviedb.org/3/'
const API_KEY_TMDB = '?api_key=b11a826f02f212ff4bb0b99960b729bb'

const BASE_URL_ITUNES = 'https://itunes.apple.com/search?term='

const BASE_URL_NETFLIX = 'https://netflixroulette.net/api/api.php?title='


export function searchMovie(movieTitle){
 return fetch(BASE_URL_TMDB+ 'search/movie' + API_KEY_TMDB + '&query=' + movieTitle).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })
}

export function checkStreamingSite(movieTitle){

  const itunesData = fetch(BASE_URL_ITUNES + movieTitle + '&entity=movie').then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })

  const netflixData = fetch(BASE_URL_NETFLIX + movieTitle).then(function(response) {
     return response.json()
  }).then(function(data) {
    return data
  })

   return Promise.all([itunesData,netflixData]).then(values => {
    return values
  });
}

export function getMovieInfo(id) {
  //to include extra data in response, add endpoint to comma-separated list
  return fetch(BASE_URL_TMDB + 'movie/' + id + API_KEY_TMDB + '&append_to_response=credits,videos').then(function(response) {
    return response.json()
  }).then(function(data) {
    return data
  })
}

export function getActorInfo(id) {
  return fetch(BASE_URL_TMDB + 'person/' + id + API_KEY_TMDB).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data
  })
}

export function getApiConfiguration() {
  return fetch(BASE_URL_TMDB + 'configuration' + API_KEY_TMDB).then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)
    return data
  })
}
