import React, { PropTypes } from 'react'
import { getApiConfiguration } from '../utils/api'
import PosterPlaceholder from '../assets/poster-placeholder.jpg'
import { Route } from 'react-router-dom'

class SearchResults extends React.Component {

  constructor () {
    super()

    this.state = {
      imageConfig: {}
    }

    this.routeToMovie = this.routeToMovie.bind(this)
  }

  componentDidMount () {
    getApiConfiguration().then(function(data){
      this.setState({imageConfig: data.images})
    }.bind(this))
  }

  routeToMovie (history, id) {
    history.push(`/movie/${id}`)
    this.props.clearSearchField()
  }

  render () {
    let results = this.props.results
    let imgCfg = this.state.imageConfig
    return (

        <div className="search-results-list">
          {
            results !== undefined &&
            results.map(function(result) {
              const releaseYear = result.release_date !== '' ? new Date(result.release_date).getFullYear(): '????'
              return (

                <Route render={({ history}) => (
                  <div key={result.id} className="results-item" onClick={() => {this.routeToMovie(history, result.id)}}>
                    {result.poster_path !== null ?
                      <img src={imgCfg.base_url + imgCfg.poster_sizes[0] + result.poster_path} />
                      :
                      <img src={PosterPlaceholder}/>
                    }
                    <p>{result.original_title} ({releaseYear})</p>
                  </div>
                )} />
              )
            }.bind(this))
          }
        </div>
    )
  }
}

export default SearchResults;
