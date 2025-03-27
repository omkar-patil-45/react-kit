// import React from 'react'
import { useState } from 'react'

const UseState = () => {
  const [city,setCity]=useState("Pune");

  const handleClick=()=>{
    setCity("Kolhapur")
  }
  return (
    <div>
      <h1>{city}</h1>
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default UseState
