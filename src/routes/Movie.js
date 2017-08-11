import React, { Component } from 'react'
import { getMovieInfo, checkStreamingSite } from '../utils/api'

import SearchBar from '../components/Search-bar';
import MovieJumbotron from '../components/Movie-Jumbotron'
import { Link } from 'react-router-dom'

import _ from 'underscore'

class Movie extends Component {

  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
    this.fetchMovie(props.match.params.movieId)
  }

  fetchMovie (id) {
    getMovieInfo(id).then(function(data) {
      this.setState({movie: data})
    }.bind(this))
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
      this.fetchMovie(nextProps.match.params.movieId)
    }
  }

  render() {
    const {title, release_date, runtime, tagline, overview, genres, backdrop_path, poster_path, vote_average, vote_count} = this.state.movie
    const imgCfg = this.props.imageConfig
    console.log(this.state.movie);
    const genreNames = _.map(genres, function(item) {
      return <li key={item.name}>{item.name}</li>
    })

    return (
      <div className="movie-container">
        <Link to={'/'}><div className="logo"></div></Link>
        <SearchBar imageConfig={this.props.imageConfig}/>
        <MovieJumbotron
          backdrop_path={backdrop_path}
          imgCfg={imgCfg}
          poster_path={poster_path}
          title={title}
          release_date={release_date}
          tagline={tagline}
          vote_average={vote_average}
          vote_count={vote_count}
          overview={overview}
          original_title={this.state.movie.original_title}
          />
      <div>
        HEJ OCH HÅ
      </div>
      { /* <div>Release date: {release_date}</div>
        <div>{runtime} min</div>
        <div><em>{tagline}</em></div>

        <ul>{genreNames}</ul>
        <StreamingBox
          movieTitle={this.state.movie.original_title}
        />
      */}
      </div>
    );
  }
}

export default Movie;
