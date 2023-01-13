import axios from 'axios';
// import { apiEndpoint } from './endpoints'

export const addProduct = (data) => async (dispatch) => {
  try {
    // const response = await axios.post(apiEndpoint.addProduct, data);
    // dispatch({ type: "ADD_PRODUCT", payload: response.data });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
