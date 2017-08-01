const BASE_URL_TMDM = 'https://api.themoviedb.org/3/'
const API_KEY_TMDM = 'api_key=b11a826f02f212ff4bb0b99960b729bb'

const BASE_URL_ITUNES = 'https://itunes.apple.com/search?term='

const BASE_URL_NETFLIX = 'https://netflixroulette.net/api/api.php?title='

/*
export function searchMovie(movieTitle){
 return fetch(BASE_URL_TMDM+ 'search/movie?' + API_KEY_TMDM + '&query=' + movieTitle).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })
}
*/
/*
export function searchMovie(movieTitle){

  return fetch(BASE_URL_ITUNES + movieTitle + '&entity=movie').then(function(response) {
    console.log(BASE_URL_ITUNES + movieTitle + '&entity=movie');
    return response.json();
  }).then(function(j) {
    console.log(j);
    return j.results
  });
}
*/
export function searchMovie(movieTitle){
  const p1 = fetch(BASE_URL_TMDM + 'search/movie?' + API_KEY_TMDM + '&query=' + movieTitle).then(function(response) {
    return response.json()
  }).then(function(data) {
    return data.results
  })

  const p2 = fetch(BASE_URL_ITUNES + movieTitle + '&entity=movie').then(function(response) {
    //debugger
    return response.json()
  }).then(function(data) {
    return data.results
  })

  const p3 = fetch(BASE_URL_NETFLIX + movieTitle).then(function(response) {
    //console.log(BASE_URL_NETFLIX + movieTitle, { mode: 'no-cors' })
     return response.json()
  }).then(function(data) {
    return data.results
  })

  Promise.all([p1,p2,p3]).then(values => {
    console.log(values);
  });
}

/*
var httpReq = new XMLHttpRequest();
  httpReq.open("GET", "https://netflixroulette.net/api/api.php?title=Attack%20on%20titan");
  httpReq.onreadystatechange = function () {
            
  console.log(httpReq.responseText)
};
httpReq.send();
*/