import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";
import Message from "../Messages/Message";

const Cart = (props) => {

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //add delete action
  };

  const checkoutHandler = () => {
    props.history.push('/signing?redirect=shipping')
  };

  return (
    <>
    <div>
      <h1>Shopping Cart</h1>
      { cartItems.length === 0 ? (<Message> Cart is empty </Message>)
      :
      (
        <div>
          {cartItems.map((item) => (
            <div key={item.product}>
              <div>
                  <img src={item.image} alt={item.name} className="small-img">
                  </img>
              </div>
              <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </div>
              <div>
                <select
                value={item.qty}
                onChange={e => 
                  dispatch(
                      addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.stock).keys()].map( x => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                ${item.price}
              </div>
              <div>
                <button type="button" onClick={ () => removeFromCartHandler(item.product)}>X</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <div>
      <div>
      Subtotal( {cartItems.reduce((a,c) => a + c.qty, 0)} items) : ${cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
      </div>
      <div>
        <button type="button" onClick={checkoutHandler} className="checkout-btn" disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
