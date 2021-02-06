import React, { useState, useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import logo from "../../assests/images/logo.png";
import { getAllUsers, logout } from "../../actions";
const Clients = (props) => {
	const [customers, setcustomers] = useState([]);
	const [show, setShow] = useState(false);


  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    props.getAllUsers();
  }, []);

  useEffect(() => {
    setcustomers(props.users);
  }, [props]);

  const handleMenu = () => {
    setShow(!show);
  };
  const logout = () => {
    props.logout();
  };
  console.log(customers, "object");
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
                          <span className="name">Howdy, Admin </span>
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
            <span>Treemium </span>
          </a>
          <div className="menu">
            <ul>
              <li>
                <a href="index.html">
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                  <span className="nav-text">Home</span>
                </a>
              </li>
              <li>
                <a href="buy-sell.html">
                  <span>
                    <i className="mdi mdi-repeat"></i>
                  </span>
                  <span className="nav-text">Exchange</span>
                </a>
              </li>
              <li>
                <a href="accounts.html">
                  <span>
                    <i className="mdi mdi-account"></i>
                  </span>
                  <span className="nav-text">Account</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <span>
                    <i className="mdi mdi-settings"></i>
                  </span>
                  <span className="nav-text">Setting</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-footer">
            <div className="copy_right">© 2020 Quixlab</div>
          </div>
        </div>

        <div className="page_title">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="page_title-content">
                  <p>
                    Welcome Back,
                    <span> {props.admin?.username}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">My Clients</h4>
                  </div>
                  <div className="card-body">
                    <div className="form">
                      <ul className="linked_account">
                        {/* {uuidv4} */}
                        {customers.length > 0 &&
                          customers.map((customer, index) => (
                            <li key={index}>
                              <div className="row">
                                <div className="col-9">
                                  <div className="media my-2">
                                    <span className="mr-3">
                                      <i className="fa fa-bank"></i>
                                    </span>
                                    <div className="media-body">
                                      <h5 className="mt-0 mb-1">
                                        {customer?.username}
                                      </h5>
                                      <p>{customer?.uuidv4}</p>
                                    </div>
                                    <div className="edit-option">
                                      <a href="#">
                                        <i className="fa fa-eye"></i>
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-trash"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className="verify">
                                    <div
                                      className={
                                        customer.status
                                          ? "verified"
                                          : "not-verify"
                                      }>
                                      <span>
                                        <i className="la la-check"></i>
                                      </span>
                                      <a href="#">Verified</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
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
  // console.log(state);
  const admin = state.setCurrentUser.user.user;
  const users = state.clients?.clients || [];
  return { admin, users };
};

export default connect(mapStateToProps, { getAllUsers, logout })(Clients);
