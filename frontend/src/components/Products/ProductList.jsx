import React from 'react'

const ProductList = ( {product} ) => {
  return (
    <div className="card">
      <img className="product-image" src={product.image} alt={product.name}/>
      <div>{product.name}</div>
      <div>${product.price}</div>
    </div>
  )
}

export default ProductList
