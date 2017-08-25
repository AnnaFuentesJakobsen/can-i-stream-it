import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PosterPlaceholder from '../assets/poster-placeholder.jpg'

class ResultItem extends Component {

  componentDidMount() {
    this.ensureVisible();
  }

  componentDidUpdate() {
    this.ensureVisible();
  }

  ensureVisible() {
    if (this.props.active) {
      console.log(ReactDOM.findDOMNode(this));
      this.props.scrollIntoView(ReactDOM.findDOMNode(this));
    }
  }

  render() {
    const {result, cursor, i, imgCfg, active} = this.props
    const releaseYear = result.release_date !== '' ? new Date(result.release_date).getFullYear(): '????'
    const activeStyle = {
      backgroundColor: "rgba(255,204,204,0.5)",
      borderRadius: "10px"
    }
    return (
        <div
          className="results-item"
          onClick={() => {this.props.routeToMovie(result.id)}}
          style={active ? activeStyle : {}}
          >
          {result.poster_path !== null ?
            <img src={imgCfg.base_url + imgCfg.poster_sizes[0] + result.poster_path} />
            :
            <img src={PosterPlaceholder}/>
          }
          <p>{result.original_title} ({releaseYear})</p>
        </div>
    )
  }

}

export default ResultItem;
