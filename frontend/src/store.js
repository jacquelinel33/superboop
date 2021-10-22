import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
// import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { cartSlice } from "./reducers/cartSlice";
import { signinSlice } from "./reducers/userSlice";

//store holds global state

//get items from local storage, parse string into array or return empty array
const initalState = {
  cart:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  }
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  // cart: cartReducer,
  //cart reducer uses createSlice() to create reducers
  cart: cartSlice.reducer,
  signin: signinSlice.reducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  initalState, 
  composeEnhancer(applyMiddleware(thunk))
);

export default store; 