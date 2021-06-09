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

  return (
    <div>
      <h1>Shopping Cart</h1>
      { cartItems.length === 0 ? <Message> Cart is empty </Message>
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
            </div>
          ))}
        </div>
      ) }
      <p>
        add to cart : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default Cart;
