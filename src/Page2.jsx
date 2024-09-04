import React, { useContext } from 'react'
import Page1 from "./Page1";
const Page2 = () => {
    const {button,incre,decre} = useContext(Page1)
  return (
   <>
      <h1>{button}</h1>
      <button onClick={decre}>-1</button>
      <button onClick={incre}>+1</button>
   </>
  )
}

export default Page2