import { combineReducers } from 'redux';
// import signup from './signup';
import fulfilled from './fulfilled';
import wishes from './wishes';
import clients from './clients';
import setCurrentUser from './setCurrentUser';


const rootReducer = combineReducers({
  setCurrentUser,
  clients,
  fulfilled,
  wishes
});

export default rootReducer;