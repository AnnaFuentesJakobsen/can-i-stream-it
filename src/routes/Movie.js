import React, { Component } from 'react'
import { getMovieInfo, checkStreamingSite } from '../utils/api'

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
      checkStreamingSite(data.original_title)
    }.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
      this.fetchMovie(nextProps.match.params.movieId)
    }
  }

  render() {
    return (
      <div>{this.state.movie.title}</div>
    );
  }

}

export default Movie;
