import React, { useState } from 'react'

const UseState = () => {
  const [city, setCity] = useState("Pune");

  const handleUpdate = () => {
    setCity("Kolhapur");
  }
  return (
    <div>
      <button onClick={handleUpdate}>Button</button>
      <h1>{city}</h1>
    </div>
  )
}

export default UseState
