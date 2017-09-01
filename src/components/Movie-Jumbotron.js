import React, { Component } from 'react';
import Placeholder from '../assets/poster-placeholder.jpg'
import StreamingBox from '../components/streaming-box'
import {FaPlay as PlayIcon} from 'react-icons/lib/fa'
import {convertMinutesToHoursAndMinutes} from '../utils/utils'
import SpokenLanguages from './Spoken-Languages'
import Genres from './Genres'
import Votes from './Votes'


class MovieJumbotron extends Component {

  render() {
    console.log(this.props.movie);
    const { backdrop_path,
      poster_path,
      title,
      release_date,
      tagline,
      vote_average,
      vote_count,
      overview,
      original_title,
      runtime,
      spoken_languages,
      genres
      } = this.props.movie
    const imgCfg = this.props.imgCfg
    const releaseYear = release_date === '' ? '????' : new Date(release_date).getFullYear()
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
                <div className="info-row">
                  <h1 className="movie-title">{title} <span className="release-year">({releaseYear})</span></h1>
                  <div className="trailer-button"><PlayIcon/>PLAY TRAILER</div>
                </div>
                <div className="info-row">
                  <SpokenLanguages languages={spoken_languages}/>
                  <span className="detail">{convertMinutesToHoursAndMinutes(runtime)}</span>
                </div>
                {tagline &&
                <p><em className="tagline">"{tagline}"</em></p>}
                <div className="overview">{overview}</div>
                <Genres genres={genres} />
                <Votes voteAverage={vote_average} voteCount={vote_count}/>
                <StreamingBox
                movieTitle={original_title}
                releaseYear={releaseYear}
                />
            </div>
          </div>
      </div>
    </div>
    );
  }

}

export default MovieJumbotron
