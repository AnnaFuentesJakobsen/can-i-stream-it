import React, { Component } from 'react';
import Placeholder from '../assets/poster-placeholder.jpg'
import StreamingBox from '../components/streaming-box'
import Genres from './Genres'
import Votes from './Votes'
import TitleBar from './Title-bar'
import StarringBox from '../components/Starring-box'


class MovieJumbotron extends Component {

  render() {
    console.log(this.props.movie);
    const {
      castAndCrew,
      imgCfg,
      history,
      movie
    } = this.props
    const {
      backdrop_path,
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
      } = movie
    const releaseYear = release_date === '' ? '????' : new Date(release_date).getFullYear()
    return (
      <div className="jumbotron">
        <div className="backdrop" style={{backgroundImage: `url(${imgCfg.base_url}original${backdrop_path})`}}></div>
        <div className="info-wrapper">
            <img
              src={poster_path !== null ? imgCfg.base_url + 'w300' + poster_path : Placeholder}
              className="poster-image"
              />
            <div className="info-content">
              <TitleBar
                title={title}
                releaseYear={releaseYear}
                runtime={runtime}
                spokenLanguages={spoken_languages}
                tagline={tagline}
                />
                <div className="overview">{overview}</div>
                <Genres genres={genres} />
                <Votes voteAverage={vote_average} voteCount={vote_count}/>
                <StreamingBox
                movieTitle={original_title}
                releaseYear={releaseYear}
                />
                <StarringBox
                  imgCfg={imgCfg}
                  cast={castAndCrew.cast}
                  history={history}
                  />
            </div>
          </div>
    </div>
    );
  }

}

export default MovieJumbotron
