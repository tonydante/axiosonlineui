
import * as types from '../actions/constants';


const initialState = {
  transactions: {},
};

const transactions = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_TRANS_SUCCESS:
        return {
          ...state,
          transactions: [ ...action.payload ],
        };

      case types.GET_TRANS_ERROR:
        return {};
      case types.GET_USER_TRANS_SUCCESS:
        return {
          ...state,
          transactions: [...action.payload]
        }

      default:
        return state;
    }
};

export default transactions;