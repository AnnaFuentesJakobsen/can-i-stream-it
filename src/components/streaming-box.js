import React, { Component } from 'react';
import { checkStreamingSite } from '../utils/api'


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
      <div>
        <p>Itunes: {this.state.itunes.length === 0 ? 'False' : 'true'}</p>
        <p>Netflix: {this.state.netflix.errorcode !== undefined ? 'false' : 'true'}</p>
      </div>
    );
  }

}

export default StreamingBox;
