import React, { useState } from 'react'

function StateSample() {

  const [fullName, setFullName] = useState("Oğuzhan")

  const changeName2 = () => {
    setFullName("Oğuzhan Varlı")
  }

  // let name = "Oğuzhan"

  // const changeName = () => {
  //   console.log("worked")
  //   name = "Oğuzhan Varlı"
  //   console.log(name)
  // }

  return (
    <div>
      <h1>{fullName}</h1>
      <button onClick={changeName2}>Change Name</button>
    </div>
  )
}

export default StateSample