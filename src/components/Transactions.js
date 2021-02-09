import React, { useState, useEffect } from "react";
import $ from "jquery";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo.png";
import { fetchTrans, logout } from "../actions";

const Transactions = (props) => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    props.fetchTrans(props.user._id);
  }, []);

  useEffect(() => {
    setProfile(props.user);
    setActivities(props.transactions);
  }, [props]);
  const replaceFirst5 = (str) => {
    console.log(str, "string");
    return str.replace(/^.{1,5}/, (m) => "*".repeat(m.length + 3));
  };
  const handleMenu = () => {
    setShow(!show);
  };

  const logout = () => {
    props.logout();
  };
  console.log(activities[activities.length - 1]?.createdAt, 'transactions')
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

        <div className="page_title">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page_title-content">
                  <p>
                    Welcome Back,
                    <span> {profile.username}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card profile_card">
                  <div className="card-body">
                    <div className="media">
                      <img
                        className="mr-3 rounded-circle mr-0 mr-sm-3"
                        src={profile.avatar}
                        width="60"
                        height="60"
                        alt=""
                      />
                      <div className="media-body">
                        <span>Hello</span>
                        <h4 className="mb-2">{profile?.name}</h4>

                        <p className="mb-1">
                          {" "}
                          <span>
                            <i className="fa fa-envelope mr-2 text-primary"></i>
                          </span>
                          {profile.email}
                        </p>
                      </div>
                    </div>

                    <ul className="card-profile__info">
                      <li>
                        <h5 className="mr-4">Address</h5>
                        <span className="text-muted">{profile?.address}</span>
                      </li>
                      <li className="mb-1">
                        <h5 className="mr-4">Total Transactions</h5>
                        <span>{activities.length} (times)</span>
                      </li>
                      <li>
                        <h5 className="text-danger mr-4">Last Transaction</h5>
                        <span className="text-danger">
                          {moment(activities[activities.length - 1]?.createdAt).format("DD MMM, YY h:mm A")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header border-0">
                    <h4 className="card-title">All Transactions</h4>
                  </div>
                  <div className="card-body pt-0">
                    <div className="transaction-table">
                      <div className="table-responsive">
                        <table className="table mb-0 table-responsive-sm">
                          <tbody>
                            {activities.length > 0 &&
                              activities.map(
                                (
                                  {
                                    transactionType,
                                    amount,
                                    referenceNo,
                                    createdAt,
                                  },
                                  index
                                ) => (
                                  <tr key={index}>
                                    <td>
                                      <span
                                        className={
                                          transactionType === "credit"
                                            ? "buy-thumb"
                                            : "sold-thumb"
                                        }>
                                        <i
                                          className={
                                            transactionType === "credit"
                                              ? "la la-arrow-up"
                                              : "la la-arrow-down"
                                          }></i>
                                      </span>
                                    </td>
                                    <td>
                                      {transactionType.toUpperCase()}
                                    </td>
                                    <td>
                                      Using - Bank {replaceFirst5(referenceNo)}
                                    </td>
                                    <td
                                      className={
                                        transactionType === "credit"
                                          ? "text-success"
                                          : "text-danger"
                                      }>
                                      {moment(createdAt).format(
                                        "DD MMM, YY h:mm A"
                                      )}
                                    </td>
                                    <td>{amount}</td>
                                  </tr>
                                )
                              )}
                          </tbody>
                        </table>
                      </div>
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
  const {user} = state.setCurrentUser.user;
  const { transactions } = state.transactions;
  return { user, transactions };
};

export default connect(mapStateToProps, { fetchTrans, logout })(Transactions);
