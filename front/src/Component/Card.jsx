import React from 'react'

function Card({data}) {
  return (
    <div>
    <h1>your cart</h1>
    
<div className='card-container'>
          <div className='card-pay'>
          <p className='name-product'> {data.name}</p>
          <p className='name-product'>description:{data.description} </p>
          <p className='name-product'>price:{data.price}$</p>
          <p className='price-product'>Success</p>

        </div>
        
      
    
    </div>
    </div>
    )}


export default Card