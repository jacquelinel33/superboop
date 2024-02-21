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

  const cart = useSelector( state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const deleteFromCartHandler = (id) => {
    dispatch(deleteFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signing?redirect=shipping')
  };

  return (
  <table className="cart">
    <div>
      <h1>Shopping Cart</h1>
      <tr>
              <th></th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
      { cartItems.length === 0 ? (<Message> Cart is empty </Message>)
      :
      (
        <tbody>
          {cartItems.map((item) => (
            <tr className="cart-item"key={item.product}>
              <td>
                  <img src={item.image} alt={item.name} className="small-img">
                  </img>
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
                    {[...Array(item.stock).keys()].map( x => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                ${item.price}
              </td>
              <td>
                <button type="button" onClick={ () => deleteFromCartHandler(item.product)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
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
    </table>
  );
};

export default Cart;
