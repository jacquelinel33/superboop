import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
// import data from '../../data';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = axios.get('/api/products');
    fetchData 
      .then(res => {
        console.log('res', res)
        setProducts(res.data)
      })
      .catch(err => {
        setError(err.message);
      })
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductList key={product._id} product={product}/>
      })};
    </div>
  )
}

export default Products
