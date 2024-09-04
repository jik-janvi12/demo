import React, {useRef}from 'react'

const Useref = () => {
  const btnchange = useRef()
  const handledata = () =>{
    btnchange.current.style.color ="red"
    // btnchange.current.style.backgroundColor ="green"
  }
  return (
    <>
        {/* <input type="text"  onChange={handledata} ref={btnchange}/> */}
        <button ref={btnchange} onClick={handledata}>change</button>
    </>
  )
}

export default Useref