import { combineReducers } from 'redux';
import transactions from './transactions';
// import wishes from './wishes';
import clients from './clients';
import setCurrentUser from './setCurrentUser';


const rootReducer = combineReducers({
  setCurrentUser,
  clients,
  transactions,
});

export default rootReducer;