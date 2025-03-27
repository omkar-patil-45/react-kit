import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const user = {
    name: "Omkar",
    age: 25,
    location: "Pune"
  }
  return (
    <div>
      <ChildComponent
        name={user.name}
        age={user.age}
        location={user.location}
      />
    </div>
  )
}

export default ParentComponent
