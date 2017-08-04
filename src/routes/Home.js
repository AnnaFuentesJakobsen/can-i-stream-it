import React, { Component } from 'react';
import SearchBar from '../components/Search-bar';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <h1>Can I Stream It?</h1>
        <SearchBar imageConfig={this.props.imageConfig} />
      </div>
    );
  }

}

export default Home;
