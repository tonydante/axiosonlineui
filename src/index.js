import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import jwt from "jsonwebtoken";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { setCurrentUser } from "./actions";
import setAuthToken from "./utils/SetAuthToken";
import rootReducer from "./reducers";
import "./assests/js/scripts";
import "./assests/icons/cryptocoins/css/cryptocoins-colors.css";
import "./assests/css/style.css";
// import "./assests/icons/line-awesome/css/line-awesome.min.css";
// import "./index.scss";
import App from "./App";

const middleware = applyMiddleware(thunk);
const configureStore = (state = {}) =>
  createStore(
    rootReducer,
    state,
    compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

const store = configureStore();
const { localStorage } = window;
const jwtToken = localStorage && localStorage.getItem("token");
const decodedToken = jwt.decode(jwtToken);

if (decodedToken) {
  const hasExpired = decodedToken.exp - Date.now() / 1000 < 0;
  if (!hasExpired) {
    setAuthToken(jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(jwtToken)));
  } else {
    localStorage.removeItem("token");
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
