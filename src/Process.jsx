import React, { useState } from 'react'
import Context from './Context'
import Button from './Button'

const Process = () => {
    const [btn ,setBtn] = useState(0)

    const Incre = () =>{
        setBtn(btn + 1)
    }
    const Decre = () =>{
        setBtn(btn + 1)
    }
  return (
    <div>
        <Context.Provider value={{btn ,Incre,Decre}}>
            <Button></Button>
        </Context.Provider>
    </div>
  )
}

export default Process