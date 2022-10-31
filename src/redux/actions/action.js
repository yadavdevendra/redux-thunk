import { GET_DATA, GET_SUCCESS, GET_FAIL } from "../constants/constant";

import axios from "axios";


export const action = () => async (dispatch) => {

    dispatch({ type: GET_DATA });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_SUCCESS, payload: data });
    console.log(data);
};
