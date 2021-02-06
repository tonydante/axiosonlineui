import * as types from "../actions/constants";
const initialState = {
  clients: [],
};
const clients = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        clients: [...action.payload],
      };
      case types.GET_USERS_ERROR:
        return {}

    default:
      return state;
  }
};

export default clients;
