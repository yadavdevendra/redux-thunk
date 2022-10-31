import { GET_DATA, GET_SUCCESS, GET_FAIL } from "../constants/constant";

import axios from "axios";


export const action = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
