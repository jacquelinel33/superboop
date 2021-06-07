import React, { useEffect } from 'react';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';



const Products = () => {
const dispatch = useDispatch();
 const productList = useSelector( state => state.productList);
 const { products } = productList;


  useEffect(() => {
    dispatch(listProducts())
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
