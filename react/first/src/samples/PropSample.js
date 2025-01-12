import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function PropSample() {

  let headerText = "Merhaba ben Header için gönderilmiş bir prop'um"
  let mainText = "Merhaba ben Main için gönderilmiş bir prop'um"
  let footerText = "Merhaba ben Footer için gönderilmiş bir prop'um"

  return (
    <>
      <Header yazi={headerText} />
      <Main yazi2={mainText}/>
      <Footer footerText={footerText} text1={"Hello"} number1={20} arr1={[1,2,3]} isVisible={true} />
    </>
  )
}

export default PropSample