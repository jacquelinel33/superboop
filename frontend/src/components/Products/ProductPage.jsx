import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../../actions/productActions';


const ProductPage = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector( state => state.productDetails);
  const { product } = productDetails;
  const [qty, setQty] = useState(1);
  
  useEffect(() => {
   dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty={qty}`);
  }

  
  return (
    <>
    <Link to="/">Back</Link>
    <div className="product-container">
      <div>
        <img className="medium-image" src={product.image} alt={product.name}></img>
      </div>
      <section className="product-details">
        <div>{product.name}</div>
        <div>${product.price}</div>
        <div>{product.description}</div>
        {
          product.countInStock > 0 && (
            <>
            <div className="quantity-input">
              <div>Quantity:</div>
              <div>
                <select value={qty} onChange={e => setQty(e.target.value)}/>
                  {
                    [...Array(product.countInStock).keys().map( e => {
                      <option key={e+1} value={e+1}>{e+1}</option>
                    })]
                  }
              </div>
            </div>
            <div>
              <button onClick={addToCartHandler} className="add-to-cart">Add to Cart</button>
            </div>
            </>
          )
        }
      </section>
    </div>
    </>
  )
}

export default ProductPage
