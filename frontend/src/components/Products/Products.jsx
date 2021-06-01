import React from 'react'
import ProductList from './ProductList'
import data from '../../data'

const Products = () => {
  return (
    <div className="products-container">
      {data.products.map((product) => {
        return <ProductList key={product._id} product={product}/>
      })};
    </div>
  )
}

export default Products
