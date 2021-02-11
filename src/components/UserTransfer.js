import React, { useState, useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions";
import logo from "../assests/images/logo.png";

const UserTransfer = (props) => {
  const [show, setShow] = useState(false);

  const [routingNo, setRoutingNo] = useState("");
  const [accNo, setAccNo] = useState("");
  const [name, setName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
  }, []);

  useEffect(() => {
    if (routingNo.trim() && accNo.trim() && name.trim()) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [routingNo, accNo, name]);

  const handleMenu = () => {
    setShow(!show);
  };

  const logout = () => {
    props.logout();
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    // if (cot !== "23455") {
    //   return setError("There problem with the code entered ");
    // }
    const { withdrawObj } = props.history.location.state;
    props.history.push({
      pathname: "/user/transferdirect",
      state: { withdrawObj },
    });
  };

  return (
    <>
      <div id="preloader">
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>

      <div id="main-wrapper">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <nav className="navbar">
                  <div className="header-search"></div>

                  <div className="dashboard_log my-2">
                    <div className="d-flex align-items-center">
                      <div
                        className={`profile_log dropdown ${show ? "show" : ""}`}
                        onClick={handleMenu}>
                        <div
                          className="user"
                          data-toggle="dropdown"
                          aria-expanded={show}>
                          <span className="thumb">
                            <i className="mdi mdi-account"></i>
                          </span>
                          <span className="name">
                            Howdy, {props.user?.username}
                          </span>
                          <span className="arrow">
                            <i className="la la-angle-down"></i>
                          </span>
                        </div>
                        <div
                          className={`dropdown-menu dropdown-menu-right ${
                            show ? "show" : ""
                          }`}>
                          <span
                            onClick={logout}
                            className="dropdown-item logout">
                            <i className="la la-sign-out"></i> Logout
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <a className="brand-logo" href="index.html">
            <img src={logo} alt="" />
            <span>Axion Online </span>
          </a>
          <div className="menu">
            <ul>
              <li>
                <Link to="/user/dashboard">
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                  <span className="nav-text">Home</span>
                </Link>
              </li>

              <li>
                <Link to={`/user/${props.user.username}/transactions`}>
                  <span>
                    <i className="mdi mdi-account"></i>
                  </span>
                  <span className="nav-text">Account</span>
                </Link>
              </li>
              <li>
                <Link to={`/user/${props.user._id}`}>
                  <span>
                    <i className="mdi mdi-settings"></i>
                  </span>
                  <span className="nav-text">Setting</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-footer">
            <div className="copy_right">
              Copyright © 2018 axiosonline. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="verification section-padding mb-80">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center  my-5">
                <div className="col-xl-5 col-md-6">
                  <div className="auth-form card">
                    <div className="card-header">
                      <h4 className="card-title">Link a bank account</h4>
                    </div>
                    <div className="card-body">
                      <form
                        action="verify-step-6.html"
                        className="identity-upload">
                        <div className="form-row">
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">Routing number </label>
                            <input
                              onChange={(e) => setRoutingNo(e.target.value)}
                              type="number"
                              className="form-control"
                              placeholder="25487"
                            />
                          </div>
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">Account number </label>
                            <input
                              onChange={(e) => setAccNo(e.target.value)}
                              type="number"
                              className="form-control"
                              placeholder="36****475"
                            />
                          </div>
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">Fulll name </label>
                            <input
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="Carla Pascle"
                            />
                          </div>
                          <div className="text-center col-12">
                            <Link
                              to="/user/dashboard"
                              className="btn btn-primary mx-2">
                              Back
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-success mx-2"
                              disabled={btnDisabled}
                              onClick={handleWithdraw}>
                              Next
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { user } = state.setCurrentUser.user;
  return { user };
};
export default connect(mapStateToProps, { logout })(UserTransfer);
