import axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";


export const signin = (email, password) => async (dispatch) => {
  //pending action
  dispatch({
    type: USER_SIGNIN_REQUEST, payload: {email, password}
  });
  try {
    const { data } = await axios.post('/api/users/seed', {email, password});
    //fullfilled action
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    //save to local storage for when user closes out of browser
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  catch(error) {
    //rejected action
    dispatch({ 
      type: USER_SIGNIN_FAIL, 
      payload:  error.response && error.response.data.message 
        ? error.response.data.message
        : error.message  })
  }
}