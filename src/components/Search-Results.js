import React, { PropTypes } from 'react'
import { getApiConfiguration } from '../utils/api'
import PosterPlaceholder from '../assets/poster-placeholder.jpg'
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {

  constructor () {
    super()

    this.state = {
      imageConfig: {}
    }
  }

  componentDidMount () {
    getApiConfiguration().then(function(data){
      this.setState({imageConfig: data.images})
    }.bind(this))
  }

  render () {
    let results = this.props.results
    let imgCfg = this.state.imageConfig
    return (
      <div>
        {
          results !== undefined &&
          results.map(function(result) {
            const releaseYear = result.release_date !== '' ? new Date(result.release_date).getFullYear(): '????'
            return (
              <div key={result.id}>
                {result.poster_path !== null ?
                  <img className="poster-searchresult" src={imgCfg.base_url + imgCfg.poster_sizes[0] + result.poster_path} />
                  :
                  <img className="poster-searchresult" src={PosterPlaceholder}/>
                }
                <Link to={`/movie/${result.id}`}>{result.original_title} ({releaseYear})</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SearchResults;
