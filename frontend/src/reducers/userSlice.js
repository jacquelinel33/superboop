import { createSlice } from '@reduxjs/toolkit';

//createSlice automatically generates action creators and actions types that correspond to the reducers and state
export const signinSlice = createSlice({
  name: 'signin',
  initialState: {},
  reducers: {
    request(state, action) {
      return state;
    },
    success(state, action) {
      return {
        loading: false, 
        userInfo: action.payload}
    },
    fail(state,action) {
      return {
        loading: false, 
        error: action.payload
      }
    },
    signout(state, action) {
      return {}
    }
  }
});

export const {request, success, fail, signout} = signinSlice.actions;
export default signinSlice.reducer;