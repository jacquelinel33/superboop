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

  //
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }

  
  return (
    <>
    <Link to={"/"}>Back</Link>
    <div className="product-container">
      <div>
        <img className="medium-image" src={product.image} alt={product.name}></img>

      </div>
      <section className="product-details">
        <h2>{product.name}</h2>
        <div>${product.price}</div>
        <div className="product-desription">{product.description}</div>
        {
          product.stock > 0 && (
            <>
            <div className="quantity-input">
              <div>Quantity:</div>
              <div>
                <select 
                  value={qty} 
                  onChange={e => setQty(e.target.value)}
                >
                  {[...Array(product.stock).keys()].map( x => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    )
                  )}
                </select>
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
