import React, { Component } from 'react';
import {convertMinutesToHoursAndMinutes} from '../utils/utils'
import SpokenLanguages from './Spoken-Languages'
import {FaPlay as PlayIcon} from 'react-icons/lib/fa'

class TitleBar extends Component {

  render() {
    const {title, releaseYear, runtime, spokenLanguages, tagline} = this.props
    return (
      <div className="title-bar">
          <h1 className="movie-title">
            {title}
            <span className="release-year">({releaseYear})</span>
            <div className="trailer-button">
              <span>
                <PlayIcon className="play-icon" /> PLAY TRAILER
              </span>
            </div>
          </h1>
          <div className="inline-details">
            <SpokenLanguages languages={spokenLanguages}/>
            <span>{convertMinutesToHoursAndMinutes(runtime)}</span>
            {/*tagline &&
            <span><em className="tagline">"{tagline}"</em></span>*/}
          </div>
      </div>
    )
  }
}

export default TitleBar;
