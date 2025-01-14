import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetDataSample() {


  //let data = []  YANLIŞTIR ÇÜNKÜ GELEN DATA STATE ÜZERİNDE TUTULMALIDIR EKRANDA GÖSTERİLMEK İSTENİYORSA
  const [data, setData] = useState([])


  //LIFECYCLE
  useEffect(() => {
    getDataAxios()
  },[])

  //FETCH İLE DATA ÇEKME
  const getDataFetch = async () => {
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
  const getDataAxios = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(response.data)
      setData(response.data.results)
    } catch (error) {
      console.log('Get Data Error', error)
    }
  }

  // () => {}  return yazmak zorundasın
  // () => ()  return yazmak zorunda değilsin

  return (
    <div>
      {/* <button onClick={getDataFetch}>Get Data With Fetch</button>
      <button onClick={getDataAxios}>Get Data With Axios</button> 
      {
        data.map((character, key) => (
          <div key={key}>
            <h1 style={{color: "tomato", fontWeight: "normal", textDecoration: "underline"}}>{character.name}</h1>
            <h3 className="statusStyle">{character.status}</h3>
          </div>
        )
        )
      }
      */}
      
    </div>
  )
}

export default GetDataSample