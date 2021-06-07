import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../../actions/productActions';


const ProductPage = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector( state => state.productDetails);
  const { product } = productDetails;
  
  useEffect(() => {
   dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  
  return (
    <>
    <Link to="/">Back</Link>
    <div className="product-container">
      <div >
        <img className="medium-image" src={product.image} alt={product.name}></img>
      </div>
      <section className="product-details">
        <div>{product.name}</div>
        <div>${product.price}</div>
        <div>{product.description}</div>
        <div className="quantity-input">
          <div>Quantity:</div>
          <input size="4" max="9999" min="1" value="1" type="number" step="1"/>
        </div>
        <div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>
    </div>
    </>
  )
}

export default ProductPage
