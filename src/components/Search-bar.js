import React, { Component } from 'react';
import { searchMovie } from '../utils/api'
import SearchResults from './Search-Results'

class SearchBar extends Component {

  constructor() {
    super()
    this.state = {
      searchResults: [],
      searchText: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.clearSearchField = this.clearSearchField.bind(this)
  }

  handleChange (e) {
    this.setState({searchText: e.target.value})
    searchMovie(e.target.value).then(function(data) {
      this.setState({searchResults: data})
    }.bind(this))
  }

  clearSearchField () {
    this.setState({
      searchResults: [],
      searchText: ''
    })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search movie"
          onChange={this.handleChange}
          value={this.state.searchText}
        />
        <SearchResults
          results={this.state.searchResults}
          clearSearchField={this.clearSearchField}
        />
    </div>
    );
  }
}
 export default SearchBar;
