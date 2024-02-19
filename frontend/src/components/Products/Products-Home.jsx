import React, { useEffect } from 'react';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';



const Products = () => {
  //useDipatch returns a reference to the dispatch function from redux store (no need to pass store.dispatch as a prop from App component) dispatch method runs reducer function. 
  const dispatch = useDispatch();

  //useSelector executes selector instructions and subscribes to re-rendering when selected state is changed. select only the state needed for this component.
 const productList = useSelector(state => state.productList);
 const { products } = productList;

//hook that tells component to do something after render
//dispatch action to the store
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className="products-container">
      {products.map((product) => {
         console.log(product._id);
        return <ProductList key={product._id} product={product}/>
      })}
    </div>
  )
}

export default Products
