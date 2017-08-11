import React, { Component } from 'react';
import Placeholder from '../assets/poster-placeholder.jpg'
import StreamingBox from '../components/streaming-box'

class MovieJumbotron extends Component {

  render() {
    const { imgCfg, backdrop_path, poster_path, title, release_date, tagline, vote_average, vote_count, overview, original_title } = this.props
    return (
      <div className="jumbotron">
        <div className="backdrop" style={{backgroundImage: `url(${imgCfg.base_url}original${backdrop_path})`}}></div>
        <div className="info-wrapper container-fluid">
          <div className="row">
            <img
              src={poster_path !== null ? imgCfg.base_url + 'w300' + poster_path : Placeholder}
              className="poster-image col-md-2 col-lg-4 col-lg-offset-2"
              />
            <div className="info-content col-md-10 col-lg-6">
                <h1>{title} <span style={{opacity: '0.5'}}>({new Date(release_date).getFullYear()})</span></h1>
                {tagline &&
                <p><em className="tagline">"{tagline}"</em></p>}
                <div className="info-row">
                  <div className="votes">
                    <div className="votes-wrapper">
                      <div className="vote-average">{vote_average}<small style={{opacity: '0.5'}}>/ 10</small></div>
                      <div className="vote-count">{vote_count} votes</div>
                    </div>
                  </div>
                  <div className="overview">{overview}</div>
                </div>
                <StreamingBox
                  movieTitle={original_title}
                  />
            </div>
          </div>
      </div>
    </div>
    );
  }

}

export default MovieJumbotron
