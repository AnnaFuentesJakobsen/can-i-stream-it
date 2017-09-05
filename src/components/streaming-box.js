import React, { Component } from 'react';
import { checkStreamingSite } from '../utils/api'
import { TiTick as TickIcon, TiTimes as CrossIcon } from 'react-icons/lib/ti'
import NetflixLogo from '../assets/Netflix_logo.png'
import ItunesLogo from '../assets/itunes_logo.png'
import StreamingService from './Streaming-service'

class StreamingBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      netflix: false,
      itunes: false,
      movieTitle: props.movieTitle
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.movieTitle !== nextProps.movieTitle) {
      checkStreamingSite(nextProps.movieTitle, nextProps.releaseYear).then(function(data) {
        let onItunes;
        if(data[0].length > 0) {
          onItunes = new Date(data[0][0].releaseDate).getFullYear() === nextProps.releaseYear
        } else {
          onItunes = false
        }
        this.setState({
          itunes: onItunes,
          netflix: data[1].errorcode !== undefined
        })
      }.bind(this))
    }
  }


  render() {
    return (
      <div className="streaming-box">
        <span>CAN I STREAM IT?</span>
        <div className="services">
          <StreamingService image={NetflixLogo}/>
          <StreamingService image ={ItunesLogo}/>
        </div>
      </div>
    )
  }

}

export default StreamingBox;
