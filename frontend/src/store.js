

import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers/cartSlice';
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";

//initialize cart state from local storage
const preloadedState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

//sets up redux store. Combine slice reducers to the root reducer
const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartSlice.reducer,
  },
  preloadedState,
});

export default store;
