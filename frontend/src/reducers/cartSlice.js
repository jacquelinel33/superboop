import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);
      if(existItem) {
        return {
          ...state, 
          cartItems: state.cartItems.map( x => x.product === existItem.product ? item : x
          ),
        }; 
      } else {
        return {...state, cartItems: [...state.cartItems, item]}
      }
    },
    deleteItem(state, action) {
      return {
        ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload),
      };
    }
  }
})