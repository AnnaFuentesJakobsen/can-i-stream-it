import React from 'react'

function Genres ({genres = []}) {
  return (
    <ul className="genre-list">
      {
        genres.map(genre => <li key={genre.id}>{genre.name}</li>)
      }
    </ul>
  )
}

export default Genres
