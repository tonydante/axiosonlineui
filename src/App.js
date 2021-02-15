import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import {createHashHistory} from "history";
import { connect } from "react-redux";
import CheckLoggedInUser from "./utils/CheckLoggedInUser";
import { PrivateRoute } from "./utils/PrivateRoute";
import Signup from "./components/Authentication/Signup";
import Signin from "./components/Authentication/Signin";
import AdminSignin from "./components/Admin/Auth/Signin";
import AdminSignup from "./components/Admin/Auth/Signup";
import VerifyToken from "./components/Authentication/VerifyToken";
import VerifyStepOne from "./components/VerifyStepOne";
import VerifyStepTwo from "./components/VerifyStepTwo";
import VerifyStepThree from "./components/VerifyStepThree";
import VerifyStepFour from "./components/VerifyStepFour";
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import User from "./components/User";
import UserTransfer from "./components/UserTransfer";
import TransferRedirect from "./components/TransferRedirect";
import COT from "./components/COT";
import Tax from "./components/Tax";
import Home from "./components/Home";
import About from "./components/About";
import AdminBoard from "./components/Admin/AdminBoard";
import Clients from "./components/Admin/Clients";
import Client from "./components/Admin/Client";
import Transfer from "./components/Admin/Transfer";
import NotFound from './NotFound'
import $ from "jquery";
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const App = (props) => {
  useEffect(() => {
   //  Preloader
     $("#preloader").fadeOut(500);
     $("#main-wrapper").addClass("show");
  }, [])
    return (
      <Router history={hashHistory}>
        <div id="app">
          <Switch>
            <PrivateRoute
              role={props.role}
              requiredRoles={["admin"]}
              exact
              path="/admin/dashboard"
              component={AdminBoard}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["admin"]}
              exact
              path="/admin/clients"
              component={Clients}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["admin"]}
              exact
              path="/admin/clients/:id"
              component={Client}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["admin"]}
              exact
              path="/admin/transfer/:id"
              component={Transfer}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/verify-step-1"
              component={VerifyStepOne}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/verify-step-2"
              component={VerifyStepTwo}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/verify-step-3"
              component={VerifyStepThree}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/verify-step-4"
              component={VerifyStepFour}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/dashboard"
              component={Accounts}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/:name/transactions"
              component={Transactions}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/transfer"
              component={UserTransfer}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/transferdirect"
              component={TransferRedirect}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/cot"
              component={COT}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/tax"
              component={Tax}
            />
            <PrivateRoute
              role={props.role}
              requiredRoles={["user"]}
              exact
              path="/user/:id"
              component={User}
            />
            <Route exact path="/" component={CheckLoggedInUser(Home)} />
            <Route exact path="/about" component={CheckLoggedInUser(About)} />
            <Route exact path="/signin" component={CheckLoggedInUser(Signin)} />
            <Route exact path="/signup" component={CheckLoggedInUser(Signup)} />
            <Route
              exact
              path="/admin/signin"
              component={CheckLoggedInUser(AdminSignin)}
            />
            <Route
              exact
              path="/admin/signup"
              component={CheckLoggedInUser(AdminSignup)}
            />
            <Route
              exact
              path="/verify-token"
              component={CheckLoggedInUser(VerifyToken)}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
}
const mapStateToProps = (state) => {
  const role= state.setCurrentUser.user.user?.role;
  return {role}
};
export default connect(mapStateToProps, null)(App);
