import { applyMiddleware, compose, createStore } from "redux";
import data from "./data";
import thunk from 'redux-thunk';

const initalState = {};
const reducer = (state, action) => {
  return {products: data.products }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, 
  initalState, 
  composeEnhancer(applyMiddleware(thunk))
);

export default store; 