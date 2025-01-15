import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

function Detail() {
  const {state} = useLocation()

  const [character, setCharacter] = useState({})
  
  useEffect(() => {
    getCharacterById()
  }, [])

  const getCharacterById = async() => {
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/character/${state.id}`)
      setCharacter(response.data)
    } catch (error) {
      console.log("Get Character By Id Error", error)
    }
  }
  

  return (
    <div>
      <p className='text-center text-2xl'>{character.name}</p>
    </div>
  )
}

export default Detail