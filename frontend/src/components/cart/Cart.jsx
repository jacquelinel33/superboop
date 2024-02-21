import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../actions/cartActions";
import Message from "../Messages/Message";

const Cart = (props) => {

  //react router props
  console.log(props, "cart-props")
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  //useSelector accesses state in Redux store
  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  //watches for changes in the product ID, quantity and dispatches action addToCart as side effect
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const deleteFromCartHandler = (id) => {
    dispatch(deleteFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/checkout')
  };

  return (
<div className="cart-container">
  <h1>Shopping Cart</h1>
  <table className="cart">
    <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.length === 0 ? (
        <tr>
          <td colSpan="5"> <Message> Cart is empty </Message> </td>
        </tr>
      ) : (
        cartItems.map((item) => (
          <tr className="cart-item" key={item.product}>
            <td>
              <img src={item.image} alt={item.name} className="small-img" />
            </td>
            <td>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
            </td>
            <td>
              <select
                value={item.qty}
                onChange={e =>
                  dispatch(
                    addToCart(item.product, Number(e.target.value))
                  )
                }
              >
                {[...Array(item.stock).keys()].map(x => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </td>
            <td>
              ${item.price}
            </td>
            <td>
              <button type="button" onClick={() => deleteFromCartHandler(item.product)}>X</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
  <div className="cart-summary">
    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items): ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
    <div>
      <button type="button" onClick={checkoutHandler} className="checkout-btn" disabled={cartItems.length === 0}>
        Checkout
      </button>
    </div>
  </div>
</div>
  );
};

export default Cart;
