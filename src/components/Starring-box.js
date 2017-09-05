import React, { Component } from 'react'
import Placeholder from '../assets/profile-placeholder.png'
import { Link } from 'react-router-dom'

class StarringBox extends Component {
  constructor (props) {
      super(props)
      this.state = {
        cast: []
      }
  }

  componentWillReceiveProps(props) {
    if(props.cast !== undefined) {
      this.setState({cast: props.cast})
    }
  }

  render () {
    const starring = this.state.cast.slice(0, 4)
    const imgCfg = this.props.imgCfg
    return (
      <div className="starring-box">
        <div>
          <span className="title">Top Billed Cast</span>
          <a href="#" className="full-cast">Full cast and crew</a>
        </div>
        <div className="starring-row">
          {
            starring.map(function(actor) {
              return (
                <div className="profile-container" onClick={() => this.props.history.push(`/actor/${actor.id}`) } key={actor.id}>
                  <div className="img-wrapper">
                    <img
                      src={actor.profile_path !== null ? imgCfg.base_url + 'w300' + actor.profile_path : Placeholder}
                      style={{bottom: actor.profile_path === null && '0'}}
                    />
                  </div>
                <div className="character">{actor.character}</div>
                <div className="actor">{actor.name}</div>
                </div>
              )
            }.bind(this))
          }
        </div>
      </div>
    )
  }

}

export default StarringBox;
