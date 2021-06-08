import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ( {product} ) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img className="small-image" src={product.image} alt={product.name}/>
        <div>{product.name}</div>
      </Link>
      <div>${product.price}</div>
    </div>
  )
}

export default ProductList
