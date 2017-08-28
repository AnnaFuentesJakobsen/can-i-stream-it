import React, { Component } from 'react';

class SimilarMovies extends Component {

  render() {
    const {similarMovies, imgCfg, history} = this.props
    return (
      <div className="similar-movies">
        <p>PEOPLE WHO LIKED THIS ALSO LIKED...</p>
        <div className="movie-row">
          { similarMovies.length > 0 &&
            similarMovies.map(function(movie) {
              return (
                <img
                  src={imgCfg.base_url + 'w300' + movie.poster_path}
                  onClick={()=> history.push(`/movie/${movie.id}`)}
                />
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default SimilarMovies;
