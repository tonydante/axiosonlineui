import axios from 'axios';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import setAuthToken from '../utils/SetAuthToken';
import {
  USER_AUTHENTICATED,
  CREATE_SLOT_SUCCESS,
  USER_SIGNUP_ERRORS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  ACTIVATE_SUCCESS,
  ACTIVATE_ERRORS,
  CREATE_SLOT_FAIL,
  GET_ALL_WISHES_SUCCESS,
  GET_ALL_WISHES_ERROR,
  GET_ALL_PENDING_WISHES_SUCCESS,
  GET_ALL_PENDING_WISHES_ERROR,
  GET_ALL_FULFILLED_WISHES_SUCCESS,
  GET_ALL_FULFILLED_WISHES_ERROR,
  SIGN_UP_USER_ERROR,
} from "./constants";

// const API = 'https://creditdeliveries.herokuapp.com';
const API = 'http://localhost:8000';

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

export function verifyUser(activationCode, history) {
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
          payload: err,
        });
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



const getAllWishesSuccess = allWishes =>
  ({ type: GET_ALL_WISHES_SUCCESS, payload: allWishes });

const getAllWishesFailed = allWishes =>
  ({ type: GET_ALL_WISHES_ERROR, payload: allWishes });

/**
 * @function getAllWishes
 *
 * @param { number } page
 *
 * @returns {object} dispatches an action
 *
 * @description It gets all the existing bills
 */
export const getAllWishes = () =>
  dispatch => axios.get(`${API}/v1/wishes`)
    .then((response) => {
      // return console.log(response)
      dispatch(getAllWishesSuccess(response.data));
    })
    .catch((err) => {
      // return console.log(err, 'error is here')
      dispatch(getAllWishesFailed(err.data.message));
    });

const getAllPendingSuccess = allPendingWishes =>
  ({ type: GET_ALL_PENDING_WISHES_SUCCESS, payload: allPendingWishes });

const getAllPendingFailed = allPendingWishes =>
  ({ type: GET_ALL_PENDING_WISHES_ERROR, payload: allPendingWishes });

/**
 * @function getAllPendingWishes
 *
 * @param { number } page
 *
 * @returns {object} dispatches an action
 *
 * @description It gets all the existing bills
 */
export const getAllPendingWishes = (id) =>
  dispatch => axios.get(`${API}/v1/wishes?status=pending&userId=${id}`)
    .then((response) => {
      dispatch(getAllPendingSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getAllPendingFailed(err));
    });


const getAllFulfilledSuccess = allFulfilledWishes =>
  ({ type: GET_ALL_FULFILLED_WISHES_SUCCESS, payload: allFulfilledWishes });

const getAllFulfilledFailed = allFulfilledWishes =>
  ({ type: GET_ALL_FULFILLED_WISHES_ERROR, payload: allFulfilledWishes });

/**
 * @function getAllFulfilledWishes
 *
 * @param { number } page
 *
 * @returns {object} dispatches an action
 *
 * @description It gets all the existing bills
 */
export const getAllFulfilledWishes = (id) =>
  dispatch => axios.get(`${API}/v1/wishes?status=fulfilled&userId=${id}`)
    .then((response) => {
      dispatch(getAllFulfilledSuccess(response.data));
    })
    .catch((err) => {
      // return console.log(err, 'error is here')
      dispatch(getAllFulfilledFailed(err));
    });


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


// const getAParcelSuccess = parcel =>
//   ({ type: GET_PARCEL_SUCCESS, parcel });

// const getAParcelFailed = parcel =>
//   ({ type: GET_PARCEL_ERROR, parcel });

// /**
//    * @function getABill
//    *
//    * @param { number } Id
//    *
//    * @returns {object} dispatches an action
//    *
//    * @description It gets a single bill by Id
//    */
// export const getAParcel = id => dispatch =>{
//   // return console.log(id, 'hello there')
//   axios.get(`${API}/api/v1/admin/parcel/${id}`)
//     .then((response) => {
//       //  return console.log(response)
//       dispatch(getAParcelSuccess(response.data));
//     })
//     .catch((error) => {
//       swal({
//         title: "Oops!",
//         text: `Sorry ${error.response.data.message}`,
//         icon: "error"
//       });
//       dispatch(getAParcelFailed(error.response.data.message));
//     });
//   }
//     const updateAParcelSuccess = parcel =>
//     ({ type: UPDATE_PARCEL_SUCCESS, parcel });

//   const updateAParcelFailed = parcel =>
//     ({ type: UPDATE_PARCEL_ERROR, parcel });

//   /**
//      * @function getABill
//      *
//      * @param { number } Id
//      *
//      * @returns {object} dispatches an action
//      *
//      * @description It gets a single bill by Id
//      */
//   export function updateAParcel (id, obj) { 
//     return dispatch =>
//     axios.post(`${API}/api/v1/admin/parcel/${id}`, obj)
//       .then((response) => {
//         dispatch(updateAParcelSuccess(response.data));
//       })
//       .catch((error) => {
//         console.log(error)
//         swal({
//           title: "Oops!",
//           text: `Sorry ${error.response.data.message}`,
//           icon: "error"
//         });
//         dispatch(updateAParcelFailed(error.response.data.message));
//       });
//     }

/**
 *
 * @desc this function returns a jwt token
 * @param {any} token
 * @returns {void}
 */
function decode(token) {
  return jwtDecode(token);
}