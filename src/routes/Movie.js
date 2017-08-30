import React, { Component } from 'react'
import { getMovieInfo } from '../utils/api'
import SearchBar from '../components/Search-bar'
import Header from '../components/Header'
import MovieJumbotron from '../components/Movie-Jumbotron'
import StarringBox from '../components/Starring-box'
import SimilarMovies from '../components/similar-movies'
import { Link } from 'react-router-dom'
import Logo from '../assets/logoV2.png'

import _ from 'underscore'

class Movie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {},
      castAndCrew: {},
      similarMovies: []
    }
    this.fetchMovie(props.match.params.movieId)
  }

  fetchMovie (id) {
    getMovieInfo(id).then((data) => {
      console.log(data);
      this.setState({
        movie: data,
        castAndCrew: data.credits,
        similarMovies: data.recommendations.results.slice(0,5)
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.match.params.movieId !== nextProps.match.params.movieId) {
      this.fetchMovie(nextProps.match.params.movieId)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.history.action === "PUSH") {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const {title, release_date, runtime, tagline, overview, genres, backdrop_path, poster_path, vote_average, vote_count} = this.state.movie
    const imgCfg = this.props.imageConfig
    const genreNames = _.map(genres, function(item) {
      return <li key={item.name}>{item.name}</li>
    })

    return (
      <div className="movie-container">
        <Header imageConfig={this.props.imageConfig} history={this.props.history}/>
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
        <StarringBox
          imgCfg={imgCfg}
          cast={this.state.castAndCrew.cast}
          history={this.props.history}
          />
        <SimilarMovies
          similarMovies={this.state.similarMovies}
          imgCfg={imgCfg}
          history={this.props.history}
          />
      </div>
    );
  }
}

export default Movie;
