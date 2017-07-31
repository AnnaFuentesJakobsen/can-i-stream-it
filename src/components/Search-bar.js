import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: ''};
  }

  render() {
    return (
      <div>
        <input 
          placeholder="Search movie" />
      </div>
    );
  }
}
 export default SearchBar;