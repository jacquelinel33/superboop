import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

const Cart = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  console.log("match", props);
  console.log("qty", props.location.search);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        add to cart : ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default Cart;
