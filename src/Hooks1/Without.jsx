// useContext============== //////
import React, { useState } from 'react'
import { useContext } from 'react'

const Without = () => {
    const [text , setText] =useState("demo")
  return (
    <>
        <First val={text}></First>
        <Second val={text}></Second>
    </>
  )
}

const First = ({val}) =>{
    
    return(
        <>
            <h1>{val}</h1>
        </>
    )
}
const Second =({val}) =>{
    return(
        <>
            <h5>{val}</h5>
        </>
    )
}

export default Without