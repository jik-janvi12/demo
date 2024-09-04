import React, { useContext } from 'react'
import Context from './Context'

const Button = () => {
    const {btn ,Incre,Decre} = useContext(Context) 
  return (
    <div>
        <h1>{btn}</h1>
        <button onClick={Incre}>+</button>
        <button onClick={Decre}>-</button>
    </div>
  )
}

export default Button