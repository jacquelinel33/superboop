import axios from "axios";

import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      product: data._id,
      qty,
    }
  });
  //saves item to local storage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const deleteFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };