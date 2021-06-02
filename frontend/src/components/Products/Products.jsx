import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
// import data from '../../data';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data)
    };

    fetchData();
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
