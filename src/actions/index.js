import axios from 'axios';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import setAuthToken from '../utils/SetAuthToken';
import {
  USER_AUTHENTICATED,
  UPDATE_USER_ERROR,
  USER_SIGNUP_ERRORS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  VERIFY_SUCCESS,
  VERIFY_ERROR,
  ACTIVATE_ERRORS,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  TRANSFER_ERROR,
  SIGN_UP_USER_ERROR,
  GET_TRANS_SUCCESS,
  GET_TRANS_ERROR,
  GET_USER_TRANS_SUCCESS,
  GET_USER_TRANS_ERROR,
  WITHDRAW_ERROR,
} from "./constants";

// export const API = 'https://axiosonline.herokuapp.com';
export const API = 'http://localhost:8000';

/**
 *
 *
 * @export
 * @param {any} user
 * @returns {void}
 */
export function setCurrentUser(user) {
  return {
    type: USER_AUTHENTICATED,
    user
  };
}

export function signupErros(errors) {
  return {
    type: SIGN_UP_USER_ERROR,
    errors
  };
}
export function getCrytoData() {
  return axios.get(`${API}/coins`);
}
/**
 *
 *
 * @desc this function signs in a user
 * @param {object} responseData
 * @returns {function}
 */
export function SigninRequest(userData) {
  return (dispatch) =>
    axios.post(`${API}/v1/signin`, userData).then(({ data }) => {
      const token = registerToken("token", data, setAuthToken);
      dispatch(setCurrentUser(decode(token)));
      return decode(token);
    });
}

/**
 *
 *
 * @desc this function register the returned jwt token to
 * localstorage and pass it to axios header
 * @param {object} data
 * @returns {string}
 */
function registerToken(key, { token }, fn) {
  setLocalStore(key, token)
  fn(token);
  return token;
}

const setLocalStore = (key, token) => window.localStorage.setItem(key, token);
/**
 *
 *
 * @desc this method signs up a user
 * @param {object} userData
 * @param callback
 * @returns {function}
 */

 export const SignupRequest = (user, history) => (dispatch) => {
   axios
     .post(`${API}/v1/signup`, user)
     .then((res) => {
       res.data.user?.role === "admin"
         ? history.push("/admin/signin")
         : history.push("/verify-token");
      })
     .catch((err) => {
       dispatch({
         type: USER_SIGNUP_ERRORS,
         payload: err.response.data,
       });
     });
 };

export function activateUser(activationCode, history) {
  return (dispatch) =>
    axios
      .patch(`${API}/v1/activate`, activationCode)
      .then(({data}) => {
        const token = registerToken("token", data, setAuthToken);
        dispatch(setCurrentUser(decode(token)));
        history.push("/user/verify-step-1");
      })
      .catch((err) => {
        dispatch({
          type: ACTIVATE_ERRORS,
          payload: err.response.data,
        });
      });
}

const verifyUserSuccess = (user) => ({
  type: VERIFY_SUCCESS,
  payload: user,
});

const verifyUserError = (data) => ({ type: VERIFY_ERROR, payload: data });

export function verifyUser(userData) {
  return (dispatch) =>
    axios
      .patch(`${API}/v1/admin/users/verify`, userData)
      .then(({ data }) => {
        dispatch(verifyUserSuccess(data.updatedUser));
      })
      .catch((err) => {
        dispatch(verifyUserError(err.response.data));
      });
}



/**
 *
 * @desc this function returns a users details
 * @param {any} token
 * @returns {void}
 */
const getAllusersSuccess = user =>
  ({ type: GET_USERS_SUCCESS, payload: user });

const getAllUsersError = data =>
  ({ type: GET_USERS_ERROR, payload: data });

export const getAllUsers = () => dispatch => {
  axios.get(`${API}/v1/admin/users`)
    .then((response) => {
      dispatch(getAllusersSuccess(response.data.users));
    })
    .catch((error) => {
      dispatch(getAllUsersError(error.response.data));
    });
}


/**
 *
 * @desc this function returns a users details
 * @param {any} token
 * @returns {void}
 */
const getUserSuccess = user =>
  ({ type: GET_USER_SUCCESS, payload: user });

const getUserError = data =>
  ({ type: GET_USER_ERROR, payload: data });

export const getAUser = id => dispatch => {
  axios.get(`${API}/v1/user/${id}`)
    .then((response) => {
      dispatch(getUserSuccess(response.data.user));
    })
    .catch((error) => {
      dispatch(getUserError(error.response.data));
    });
}


 const updateUserError = (data) => ({ type: UPDATE_USER_ERROR, data });

 export function updateUser(id, obj, history) {
   return (dispatch) =>
     axios
       .patch(`${API}/v1/users/${id}`, obj)
       .then(() => {
         history.push(`/admin/clients/${id}`)
        })
       .catch((error) => {
         dispatch(updateUserError(error.response.data));
       });
 }

 const transferError = (data) => ({ type: TRANSFER_ERROR, data });

 export function transfer(id, obj, history) {
   return (dispatch) =>
     axios
       .post(`${API}/v1/admin/transfer`, obj)
       .then((res) => {
         history.push(`/admin/transfer/${id}`);
       })
       .catch((error) => {
         dispatch(transferError(error.response.data));
       });
 }

 const withdrawError = (data) => ({ type: WITHDRAW_ERROR, data });

 export function withdraw(obj, history) {
   return (dispatch) =>
     axios
       .post(`${API}/v1/user/withdraw`, obj)
       .then((res) => {
         history.push("/user/dashboard");
       })
       .catch((error) => {
         dispatch(withdrawError(error.response.data));
       });
 }

const getTransSuccess = (data) => ({ type: GET_TRANS_SUCCESS, payload: data });

const getTransError = (data) => ({ type: GET_TRANS_ERROR, payload: data });

export const getTransations = () => (dispatch) => {
  axios
    .get(`${API}/v1/admin/transactions`)
    .then((response) => {
      dispatch(getTransSuccess(response.data.transactions.transactions));
    })
    .catch((error) => {
      dispatch(getTransError(error.response.data));
    });
};



/**
 *
 * @desc this function returns list of transactions for a user
 * @param {any} token
 * @returns {void}
 */
const fetchTransSuccess = transaction =>
  ({ type: GET_USER_TRANS_SUCCESS, payload: transaction });

const fetchTransError = data =>
  ({ type: GET_USER_TRANS_ERROR, payload: data });

export const fetchTrans = id => dispatch => {
  axios.get(`${API}/v1/users/${id}/transactions`)
    .then((response) => {
      dispatch(fetchTransSuccess(response.data.transactions.transactions));
    })
    .catch((error) => {
      dispatch(fetchTransError(error.response.data));
    });
}

/**
 * 
 * 
 * @desc this method logs out a user
 * @returns {void}
 */
export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
}




/**
 *
 * @desc this function returns a jwt token
 * @param {any} token
 * @returns {void}
 */
function decode(token) {
  return jwtDecode(token);
}