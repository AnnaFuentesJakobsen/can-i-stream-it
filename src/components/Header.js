import React, { Component } from 'react'
import SearchBar from './Search-bar'
import Logo from '../assets/logoV2.png'


class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img
          className="logo"
          src={Logo}
          onClick={() => this.props.history.push('/')}
          />
        <SearchBar 
          className="searchbar" 
          imageConfig={this.props.imageConfig} 
          history={this.props.history}
          />
      </div>
    )
  }
}

export default Header;