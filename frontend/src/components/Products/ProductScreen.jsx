import React from 'react';
import data from '../../data';

const ProductScreen = (props) => {
  console.log("PROPS!", props);
  const product = data.products.find( e => e._id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }

  return (
    // <Link to '/'
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
  )
}

export default ProductScreen
