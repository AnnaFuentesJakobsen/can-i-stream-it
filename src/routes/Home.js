import React, { Component } from 'react';
import SearchBar from '../components/Search-bar';
import BgImage from '../assets/cinema.png'
import Logo from '../assets/logoV2.png'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src={BgImage} id="bg-img"/>
        <div className="home-wrapper">
          <img src={Logo} className="logo" alt="Logotype"/>
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
