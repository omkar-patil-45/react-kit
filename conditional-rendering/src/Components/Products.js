import React from 'react'

const Products = (props) => {
  return (
    <div>
      <img src={props.img} alt=''/>
      <h2>{props.name}</h2>
      <p>{props.discription}</p>
      <h2>{props.price}</h2>
    </div>
  )
}

export default Products
