import { GET_DATA, GET_SUCCESS, GET_FAIL } from "../constants/constant";

export const reducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_DATA:
      return { loading: true, users: [] };

    case GET_SUCCESS:
      return { loading: false, users: action.payload };

    case GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
