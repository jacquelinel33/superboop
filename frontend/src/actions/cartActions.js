import axios from "axios";

// import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/cartConstants";

//await until product is fetched from api, then dispatches synchronous action
export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: 'cart/addItem',
    payload: {
      image: data.image,
      name: data.name,
      price: data.price,
      product: data._id,
      stock: data.stock,
      qty,
    }
  });
  //saves item to local storage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const deleteFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: 'cart/deleteItem',
    payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };