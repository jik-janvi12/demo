/////// usecontext ======= ///////////////
import React, { createContext, useContext, useState }from 'react'
const usercontext = createContext()
const With = () => {
    const [text, setText] =useState('cdmi')
  return (
    <>
        <usercontext.Provider value={text}>
            <First></First>
            <Second></Second>
        </usercontext.Provider>
    </>
  )
}
const First = () =>{
    const data = useContext(usercontext)
    return(
        <>
        <h1>{data}</h1>
        </>
    )
}
const Second = () =>{
    const data = useContext(usercontext)
    return(
        <>
        <h4>{data}</h4>
        </>
    )
}

export default With