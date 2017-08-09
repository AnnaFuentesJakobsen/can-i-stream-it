import React, { Component } from 'react';
import { checkStreamingSite } from '../utils/api'
import { TiTick as TickIcon, TiTimes as CrossIcon } from 'react-icons/lib/ti'
// import { FaSmileO as TickIcon, FaFrownO as CrossIcon } from 'react-icons/lib/fa'

class StreamingBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      netflix: {},
      itunes: {},
      movieTitle: props.movieTitle
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.movieTitle !== nextProps.movieTitle) {
      checkStreamingSite(nextProps.movieTitle).then(function(data) {
        this.setState({
          itunes: data[0],
          netflix: data[1]
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
          {this.state.itunes.length === 0 ?
            <CrossIcon className="cross-icon"/>
            :
            <TickIcon className="tick-icon"/>
          }
        </div>
        <div className="service">
          <span className="service-name">
            Netflix:
          </span>
          {this.state.netflix.errorcode !== undefined ?
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
