import React, { Component } from 'react';
import SearchBar from '../components/Search-bar';
import BgImage from '../assets/cinema.png'

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <img
          src={BgImage}
          id="bg-img"
          />
        <h1>Can I Stream It?</h1>
        <SearchBar imageConfig={this.props.imageConfig} />
      </div>
    );
  }

}

export default Home;
