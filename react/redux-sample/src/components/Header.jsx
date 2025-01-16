import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const {value} = useSelector(state => state.counter)
  return (
    <div>{value}</div>
  )
}

export default Header

// () => {}   //Birden fazla satır
// () => ...   // Tek Satırda Bitecekse
// state => ...  //Tek satırda ve tek bir parametre varsa


