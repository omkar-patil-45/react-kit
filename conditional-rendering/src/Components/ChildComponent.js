import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.location}</h3>
    </div>
  )
}

export default ChildComponent
