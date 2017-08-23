import React from 'react'
import PosterPlaceholder from '../assets/poster-placeholder.jpg'

class SearchResults extends React.Component {

  constructor () {
    super()
    this.routeToMovie = this.routeToMovie.bind(this)
  }

  routeToMovie (id) {
    console.log(id);
    this.props.routeToMovie(id)
  }

  render () {
    let cursor = this.props.cursor
    let results = this.props.results
    let imgCfg = this.props.imageConfig
    const active = {
      backgroundColor: "rgba(255,204,204,0.5)",
      borderRadius: "10px"
    }
    return (
          <div
            className="search-results-list"
            onMouseEnter={() => this.props.clearCursor()}
            style={{display: this.props.showList ? 'block': 'none'}}
            >
            {
              results !== undefined &&
              results.map(function(result, i) {
                const releaseYear = result.release_date !== '' ? new Date(result.release_date).getFullYear(): '????'
                return (
                    <div
                      className="results-item"
                      style={cursor === i ? active : {}}
                      onClick={() => {this.routeToMovie(result.id)}}
                      key={result.id}
                      >
                      {result.poster_path !== null ?
                        <img src={imgCfg.base_url + imgCfg.poster_sizes[0] + result.poster_path} />
                        :
                        <img src={PosterPlaceholder}/>
                      }
                      <p>{result.original_title} ({releaseYear})</p>
                    </div>
                )
              }.bind(this))
            }
          </div>
    )
  }
}

export default SearchResults;
