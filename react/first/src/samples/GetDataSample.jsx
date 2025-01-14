import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetDataSample() {


  //let data = []  YANLIŞTIR ÇÜNKÜ GELEN DATA STATE ÜZERİNDE TUTULMALIDIR EKRANDA GÖSTERİLMEK İSTENİYORSA
  const [data, setData] = useState([])


  //LIFECYCLE
  useEffect(() => {
    getDataAxios()
  }, [])

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
      <div className='grid grid-cols-4 gap-4 mx-8 my-10'>
        {
          data.map((character) => (
            <div key={character.id} className='h-60 bg-blue-100 rounded'>
              <p className={` text-green-400 font-bold text-center my-2 ${character.name.length < 16 ? "text-xl" : "text-base"}`}>{character.name}</p>
              <div className=' flex justify-center'>
                <img className='object-cover max-h-40 rounded-full' src={character.image} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GetDataSample