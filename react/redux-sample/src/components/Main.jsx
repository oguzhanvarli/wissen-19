import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCounter, increment } from '../store/slices/counterSlice'

function Main() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(clearCounter())}>Sıfırla</button>
    </div>
  )
}

export default Main