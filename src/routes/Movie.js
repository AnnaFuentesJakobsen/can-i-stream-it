import React, { Component } from 'react'
import { getMovieInfo, checkStreamingSite } from '../utils/api'
import StreamingBox from '../components/streaming-box'
import SearchBar from '../components/Search-bar';
import _ from 'underscore'
import Placeholder from '../assets/poster-placeholder.jpg'

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
        <h1><span>Can I Stream It?</span></h1>
        <SearchBar imageConfig={this.props.imageConfig} />
          <div className="backdrop" style={{backgroundImage: `url(${imgCfg.base_url}original${backdrop_path})`}}></div>
          <div className="jumbotron">
            <div className="info-wrapper">
              <img
                src={poster_path !== null ? imgCfg.base_url + 'w300' + poster_path : Placeholder}
                className="poster-image"
                />
              <div className="info-content">
                  <h1>{title} ({new Date(release_date).getFullYear()})</h1>
                  <em className="tagline">"{tagline}"</em>
                  <div className="info-row">
                    <div className="votes">
                      <div className="vote-average">{vote_average}</div>
                      <div className="vote-count">{vote_count} votes</div>
                    </div>
                    <div className="overview">{overview}</div>
                  </div>
                  <div className="info-row">
                    <div></div>
                  </div>
              </div>
            </div>
          </div>
        <div>Release date: {release_date}</div>
        <div>{runtime} min</div>
        <div><em>{tagline}</em></div>

        <ul>{genreNames /*listItem*/}</ul>
        <StreamingBox
          movieTitle={this.state.movie.original_title}
        />
      </div>
    );
  }
}

export default Movie;
