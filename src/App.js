import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Home from "./components/Home";
import AdminBoard from "./components/Admin/AdminBoard";
import Clients from "./components/Admin/Clients";
// import Dashboard from "./components/Dashboard";
// import Slot from "./components/Slots";
// import AdminDashboard from "./components/Admin/Dashboard";
import $ from "jquery";


const App = (props) => {
  useEffect(() => {
   //  Preloader
     $("#preloader").fadeOut(500);
     $("#main-wrapper").addClass("show");
  }, [])
    return (
      <Router>
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
            {/* <PrivateRoute
              role={this.props.role}
              requiredRoles={["user"]}
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              role={this.props.role}
              requiredRoles={["user"]}
              exact
              path="/slots"
              component={Slot}
            /> */}
          </Switch>
          <Route exact path="/" component={Home} />
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
        </div>
      </Router>
    );
}
const mapStateToProps = (state) => {
  const role= state.setCurrentUser.user.user?.role;
  return {role}
};
export default connect(mapStateToProps, null)(App);
