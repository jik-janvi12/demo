import React, { createContext, useState } from 'react'
import Page1 from "./Page1";
import Page2 from "./Page2";
function Page3() {
  const [button ,setButton] =useState(0)

  const incre = () =>{
    setButton(button + 1)
  }
  const decre = () =>{
    setButton(button - 1)
  }
  return (
    <div>
        <Page1.Provider value={{button ,incre ,decre}}>
            
        </Page1.Provider>
    </div>
  )
}

export default Page3