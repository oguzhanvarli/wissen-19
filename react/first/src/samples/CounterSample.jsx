import React, { useState } from 'react'

function CounterSample() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    if(counter < 10){
      setCounter(counter + 1)
    }
  }

  const functionTest = (value) => {
    console.log(value)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counter > 0 ? () => setCounter(counter - 1) : null}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => functionTest("Oğuzhan")}>Fonksiyon Test</button>
      {/* <button onClick={functionTest("Oğuzhan Varlı")}>Fonksiyon Test Yanlış</button>  
      YANLIŞTIR ARROW FUNCTION İLE GONDERİLMESİ LAZIM PARAMETRE GÖNDERİMİ YAPILIYORSA!!! */}
    </div>
  )
}

export default CounterSample