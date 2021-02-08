import * as types from "../actions/constants";
const initialState = {
  user: {},
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
      return {};
    case types.VERIFY_SUCCESS:
      const { clients } = state;
      const filteredClients = clients.map((client) => {
        if (client._id === action.payload._id) {
          client = action.payload;
        }
        return client;
      });
      return {
        ...state,
        clients: [...filteredClients],
      };
    case types.VERIFY_ERROR:
      return {};
    case types.GET_USER_SUCCESS: 
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
};

export default clients;
