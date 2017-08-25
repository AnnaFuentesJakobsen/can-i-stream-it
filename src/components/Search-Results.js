import React from 'react'
import ReactDOM from 'react-dom'
import PosterPlaceholder from '../assets/poster-placeholder.jpg'
import onClickOutside from 'react-onclickoutside'
import ResultItem from './ResultItem'

class SearchResults extends React.Component {

  constructor () {
    super()
    this.routeToMovie = this.routeToMovie.bind(this)
    this.scrollElementIntoViewIfNeeded = this.scrollElementIntoViewIfNeeded.bind(this)
  }

  routeToMovie (id) {
    this.props.routeToMovie(id)
  }

  handleClickOutside () {
      this.props.hideResults()
  }

  scrollElementIntoViewIfNeeded(domNode) {
    var containerDomNode = ReactDOM.findDOMNode(this)
    domNode.scrollIntoView(false)
  }

  render () {
    let cursor = this.props.cursor
    let results = this.props.results
    let imgCfg = this.props.imageConfig

    return (
          <div
            className="search-results-list"
            onMouseEnter={() => this.props.clearCursor()}
            style={{display: this.props.showList ? 'block': 'none'}}
            >
            {
              results !== undefined &&
              results.map(function(result, i) {
                return(
                  <ResultItem
                    key={result.id}
                    result={result}
                    routeToMovie={this.routeToMovie}
                    imgCfg={imgCfg}
                    active={cursor===i}
                    scrollIntoView={this.scrollElementIntoViewIfNeeded}
                    />
                )
              }.bind(this))
            }
          </div>
    )
  }
}

export default onClickOutside(SearchResults)
