import React, { Component } from 'react';
import {searchMovie} from './utils/api'

class App extends Component {

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
        <input onChange={this.handleChange} />
        
      </div>
    );
  }
}

export default App;
