import React, { Component } from 'react';
import SearchBar from '../components/Search-bar';
import BgImage from '../assets/cinema.png'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src={BgImage} id="bg-img"/>
        <div className="home-wrapper">
          <a href="/"><div className="logo" style={{width:'250px', padding: '40px 0'}}></div></a>
          <SearchBar
            imageConfig={this.props.imageConfig}
            history={this.props.history}
            />
        </div>
      </div>
    );
  }
}

export default Home;
