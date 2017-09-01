import React, { Component } from 'react';
import { searchMovie } from '../utils/api'
import SearchResults from './Search-Results'


class SearchBar extends Component {

  constructor() {
    super()
    this.state = {
      searchResults: [],
      searchText: '',
      cursor: -1,
      showResultList: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearSearchField = this.clearSearchField.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
    this.clearCursor = this.clearCursor.bind(this)
    this.hideResults = this.hideResults.bind(this)
  }

  handleChange (e) {
    this.setState({searchText: e.target.value})
    searchMovie(e.target.value).then(function(data) {
      this.setState({
        searchResults: data,
        showResultList: data !== undefined ? true : false
      })
    }.bind(this))
  }

  handleKeyPress (e) {
    const { cursor, searchResults } = this.state
    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
      } else if (e.keyCode === 13) {
        if(this.state.cursor >= 0) {
          let id = this.state.searchResults[this.state.cursor].id
          this.handleRouteChange(id)
        }
    }
  }

  handleRouteChange (id){
    this.props.history.push(`/movie/${id}`)
    this.clearSearchField()
  }

  clearSearchField () {
    this.setState({
      searchResults: [],
      searchText: '',
      cursor: -1,
      showResultList: false
    })
  }

  hideResults() {
    this.setState({showResultList: false})
  }

  clearCursor() {
    this.setState({
      cursor: -1
    })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search movie"
          onChange={this.handleChange}
          value={this.state.searchText}
          style={{fontFamily: 'Open Sans'}}
          onKeyDown={this.handleKeyPress}
        />
        <SearchResults
          results={this.state.searchResults}
          routeToMovie={this.handleRouteChange}
          imageConfig={this.props.imageConfig}
          cursor={this.state.cursor}
          clearCursor={this.clearCursor}
          showList={this.state.showResultList}
          hideResults={this.hideResults}
        />
    </div>
    );
  }
}
 export default SearchBar;
