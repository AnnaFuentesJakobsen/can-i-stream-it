import React, { Component } from 'react';
import { searchMovie } from '../utils/api'
import SearchResults from './Search-Results'

class SearchBar extends Component {

  constructor() {
    super()
    this.state = {searchResults: []}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    searchMovie(e.target.value).then(function(data) {
      this.setState({searchResults: data})
    }.bind(this))
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search movie"
          onChange={this.handleChange}
        />
        <SearchResults
          results={this.state.searchResults}
        />
    </div>
    );
  }
}
 export default SearchBar;
