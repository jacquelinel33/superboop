import React from 'react'
import ProductList from './ProductList'

const Product = ({data}) => {
  return (
    <div className="products">
      {data.products.map((product) => {
        return <ProductList key={product._id} product={product}/>
      })};
    </div>
  )
}

export default Product
