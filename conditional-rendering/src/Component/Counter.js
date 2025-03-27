import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0);

  const fnIncrement = () => {
    for (let i = 0; i < 5; i++) {
      setValue((val) => {
        return val + 1
      })
    }
  }
  return (
    <div>
      <button onClick={fnIncrement}>Button</button>
      <hh1>{value}</hh1>
    </div>
  )
}

export default Counter
