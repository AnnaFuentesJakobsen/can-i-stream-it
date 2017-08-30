import React, { Component } from 'react';
import { checkStreamingSite } from '../utils/api'
import { TiTick as TickIcon, TiTimes as CrossIcon } from 'react-icons/lib/ti'
//import { FaSmileO as TickIcon, FaFrownO as CrossIcon } from 'react-icons/lib/fa'

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
        <div className="service">
          <span className="service-name">
            iTunes:
          </span>
          {this.state.itunes ?
            <TickIcon className="tick-icon"/>
            :
            <CrossIcon className="cross-icon"/>
          }
        </div>
        <div className="service">
          <span className="service-name">
            Netflix:
          </span>
          {this.state.netflix ?
            <CrossIcon className="cross-icon"/>
            :
            <TickIcon className="tick-icon"/>
          }
        </div>
      </div>
    );
  }

}

export default StreamingBox;
