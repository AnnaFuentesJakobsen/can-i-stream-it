import React, { Component } from 'react'
import Placeholder from '../assets/profile-placeholder.png'

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
    const starring = this.state.cast.slice(0, 5)
    const imgCfg = this.props.imgCfg
    return (
      <div className="starring-box">
        <p>Top Billed Cast</p>
        <div className="starring-row">
          {
            starring.map(function(actor) {
              return (
                <div className="profile-container" key={actor.id}>
                  <div className="img-wrapper">
                    <img
                      className="profile-picture"
                      src={actor.profile_path !== null ? imgCfg.base_url + 'w300' + actor.profile_path : Placeholder}
                    />
                  </div>
                <div className="actor">{actor.name}</div>
                <div className="character">{actor.character}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default StarringBox;
