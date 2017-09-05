import React from 'react'
import {MdStar as StarIcon} from 'react-icons/lib/md'

function Votes({voteAverage, voteCount}) {
  return (
    <div className="votes">
      <StarIcon className="star-icon"/>
      <div className="flex-column">
        <div className="vote-average">{voteAverage}/10</div>
        <div className="vote-count">{voteCount} votes</div>
      </div>
    </div>
  )
}

export default Votes
