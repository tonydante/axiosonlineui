import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAUser, logout, updateUser, transfer } from "../../actions";
import logo from "../../assests/images/logo.png";

const Transfer = (props) => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const [accNumber, setAccNumber] = useState(0);

  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    props.getAUser(props.match.params.id);
  }, []);

  useEffect(() => {
    //  Preloader
    setAccNumber(props.user.accNumber);
  }, [props.user]);

  const handleTransfer = (e) => {
    e.preventDefault();
    const transferObj = {
      referenceNo: props.user.accNumber,
      amount,
      transactionType: "credit"
    };
    console.log(transferObj)
    props.transfer(props.match.params.id, transferObj, props.history);
  };

  const handleMenu = () => {
    setShow(!show);
  };

  const logout = () => {
    props.logout();
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
                            Howdy, {props.admin?.username}
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
          <Link className="brand-logo" to="/">
            <img src={logo} alt="" />
            <span>ACBC </span>
          </Link>
          <div className="menu">
            <ul>
              <li>
                <Link to="/admin/dashboard">
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/clients">
                  <span>
                    <i className="mdi mdi-repeat"></i>
                  </span>
                  <span className="nav-text">Clients</span>
                </Link>
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
              <div className="col-xl-12">
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
              <div className="col-xl-3 col-md-4">
                <div className="card settings_menu">
                  <div className="card-header">
                    <h4 className="card-title">Settings</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li className="nav-item">
                        <Link
                          to={`/admin/clients/${props.match.params.id}`}
                          className="nav-link active">
                          <i className="mdi mdi-account"></i>
                          <span>Edit Account Details</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={`/admin/transfer/${props.match.params.id}`}
                          className="nav-link">
                          <i className="la la-university"></i>
                          <span>Transfer To Client</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-md-8">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Preperences</h4>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Account Number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="67****899"
                                name="accNumber"
                                disabled
                                value={accNumber || ""}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Amount</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="1000"
                                name="amount"
                                value={amount || ""}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </div>
                            <div className="form-group">
                              <button
                                className="btn btn-success pl-5 pr-5"
                                onClick={handleTransfer}>
                                Transfer
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const admin = state.setCurrentUser.user.user;
  const user = state.clients?.user || {};
  return { admin, user };
};
export default connect(mapStateToProps, {
  getAUser,
  logout,
  updateUser,
  transfer,
})(Transfer);
