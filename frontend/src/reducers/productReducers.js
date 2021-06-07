import { PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const productListReducer = (state = { products: [] }, action) => {
  switch(action.type) {
    case PRODUCT_LIST_SUCCESS: 
      return { products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { error: action.payload }
    default:
      return state;
  }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type){
    case PRODUCT_DETAILS_SUCCESS:
      return { product: action.payload};
    case PRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};