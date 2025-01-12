import axios from 'axios'
import React from 'react'

function GetDataSample() {

  //FETCH İLE DATA ÇEKME
  const getDataFetch = async() => {
    try {
      let response = await fetch("https://rickandmortyapi.com/api/character")
      console.log(response)
      let secondResponse = await response.json()
      console.log(secondResponse)
    } catch (error) {
      console.log('Get Data Error', error)
    }
  }

  //AXIOS İLE DATA ÇEKME
  const getDataAxios = async() => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(response.data)
    } catch (error) {
      console.log('Get Data Error', error)
    }
  }


  return (
    <div>
      <button onClick={getDataFetch}>Get Data With Fetch</button>
      <button onClick={getDataAxios}>Get Data With Axios</button>
    </div>
  )
}

export default GetDataSample