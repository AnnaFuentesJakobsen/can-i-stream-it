import React, { Component } from 'react'
import { getMovieInfo, checkStreamingSite } from '../utils/api'
import StreamingBox from '../components/streaming-box'

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

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
      this.fetchMovie(nextProps.match.params.movieId)
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.movie.title}</div>
        <StreamingBox
          movieTitle={this.state.movie.original_title}
        />
      </div>
    );
  }

}

export default Movie;
