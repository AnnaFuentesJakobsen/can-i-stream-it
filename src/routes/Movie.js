import React, { Component } from 'react'
import { getMovieInfo, onNetflix } from '../utils/api'

class Movie extends Component {

  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  fetchMovie (id) {

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
      getMovieInfo(nextProps.match.params.movieId).then(function(data) {
        this.setState({movie: data})
        onNetflix(data.original_title)
      }.bind(this))
    }
  }

  render() {
    return (
      <div>{this.state.movie.title}</div>
    );
  }

}

export default Movie;
