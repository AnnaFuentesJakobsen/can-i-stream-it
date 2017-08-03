import React, { Component } from 'react'
import { getMovieInfo, checkStreamingSite } from '../utils/api'
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
      console.log(data)

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
    const {title, release_date, tagline, overview, genres} = this.state.movie

    const genreNames = _.map(genres, function(item) {
      return <li key={item.name}>{item.name}</li>
    })
    
    /*
    const genreNames = genres && genres.map(function(item) {
      return item.name
    })

    const listItem = genres && genreNames.map(function(genre) {
      return <li key={genre}>{genre}</li>
    })
    */

    return (
      <div> 
        <div>{title}</div>
        <div>{release_date}</div>
        <div>{tagline}</div>
        <div>{overview}</div>
        <ul>{genreNames /*listItem*/}</ul> 
      </div>
    );
  }
}

export default Movie;
