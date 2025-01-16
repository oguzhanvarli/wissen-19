import React from 'react'
import { useSelector } from 'react-redux'

function Favorites() {
  const {number, favoriteArray} = useSelector(state => state.favorite)
  return (
    <div>
      {
        favoriteArray.map((character) => (
          <h1 key={character.id}>{character.name}</h1>
        ))
      }
    </div>
  )
}

export default Favorites