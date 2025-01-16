import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { incremant } from '../store/slices/favoriteSlice'

function Home() {

  const dispatch = useDispatch()

  const [data, setData] = useState([])

  useEffect(() => {
    getDataAxios()
  }, [])

  const getDataAxios = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(response.data)
      setData(response.data.results)
    } catch (error) {
      console.log('Get Data Error', error)
    }
  }

  const addFavorite = (character) => {
    dispatch(incremant(character))
  }
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 my-10'>
        {
          data.map((character) => (
            <CharacterCard key={character.id} character={character} addFavorite={addFavorite} />
          ))
        }
      </div>
    </>
  )
}

export default Home