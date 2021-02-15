import React, { useState, useEffect } from "react";
import $ from "jquery";
import swal from 'sweetalert'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAUser, logout, updateUser } from "../../actions";
import logo from "../../assests/images/logo.png";

const Client = (props) => {
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(0);
  const [accNumber, setAccNumber] = useState(0);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [tax, setTax] = useState(false);
  const [cot, setCot] = useState(false);
  const [transferStatus, setTransferStatus] = useState(true);

  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    props.getAUser(props.match.params.id);
  }, []);

  useEffect(() => {
    //  Preloader
    setName(props.user.name || "John Doe");
    setBalance(props.user.balance);
    setAccNumber(props.user.accNumber)
    setEmail(props.user.email)
    setDob(props.user.dob)
    setAddr(props.user.address)
    setCity(props.user.city)
    setState(props.user.state)
    setPostalCode(props.user.postalcode);
    setCountry(props.user.country);
    setTax(props.user.tax)
    setCot(props.user.cot)
    setTransferStatus(props.user.transferStatus);
  }, [props.user]);

  const handleMenu = () => {
    setShow(!show);
  };

  const handleCotStatus = (e) => {
     e.preventDefault();
     swal("Are you sure you want to update this?", {
       buttons: ["Oh noez!", "Aww yiss!"],
      }).then((update) => {
        if (update) {
         setCot(!cot)
         setTransferStatus(!transferStatus);
         props.updateUser(
           props.match.params.id,
           { cot: !cot, transferStatus: !transferStatus },
           props.history
         );
         swal("Poof! user cotcode has been updated!", {
           icon: "success",
         });
       } else {
         swal("No updates were made!");
       }
     });
  };
  const handleTaxStatus = (e) => {
     e.preventDefault();
     swal("Are you sure you want to update this?", {
       buttons: ["Oh noez!", "Aww yiss!"],
      }).then((update) => {
        if (update) {
         setTax(!tax)
         props.updateUser(props.match.params.id, { tax: !tax }, props.history);
         swal("Poof! user taxcode has been updated!", {
           icon: "success",
         });
       } else {
         swal("No updates were made!");
       }
     });
  };

  const handleAccDetails = (e) => {
     e.preventDefault();
    
     swal("Are you sure you want to update this?", {
       buttons: ["Oh noez!", "Aww yiss!"],
     }).then((update) => {
       if (update) {
         props.updateUser(props.match.params.id, { accNumber }, props.history);
         swal("Poof! user password has been updated!", {
           icon: "success",
         });
       } else {
         swal("No updates were made!");
       }
     });
  };
  const handleUserProfile = (e) => {
     e.preventDefault();
      const userObj = {
        name,
        email,
        dob,
        address,
        city,
        state,
        postalcode,
        country,
      };
     swal("Are you sure you want to update this?", {
       buttons: ["Oh noez!", "Aww yiss!"],
     }).then((update) => {
       if (update) {
         props.updateUser(props.match.params.id, userObj, props.history);
         swal("Poof! user password has been updated!", {
           icon: "success",
         });
       } else {
         swal("No updates were made!");
       }
     });
  };

  const handleAccBal = (e) => {
    e.preventDefault();
     swal("Are you sure you want to approve this?", {
       buttons: ["Oh noez!", "Aww yiss!"],
     }).then((update) => {
       if (update) {
        props.updateUser(props.match.params.id, {balance}, props.history);
         swal("Poof! account balance has been updated!", {
           icon: "success",
         });
       } else {
         swal("No updates were made!");
       }
     });
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
            <span>Axios Online </span>
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
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">User Account Balance</h4>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-xl-12">
                              <div className="media align-items-center mb-3">
                                <img
                                  className="mr-3 rounded-circle mr-0 mr-sm-3"
                                  src={props.user?.avatar}
                                  width="55"
                                  height="55"
                                  alt=""
                                />
                                <div className="media-body">
                                  <h4 className="mb-0">{name}</h4>
                                </div>
                              </div>
                              <div className="form-group col-xl-12">
                                <label className="mr-sm-2">Your Balance</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Balance"
                                  value={balance}
                                  onChange={(e) => setBalance(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-success"
                                onClick={handleAccBal}>
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Update Account Number </h4>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-xl-12">
                              <label className="mr-sm-2">Email</label>
                              <input
                                type="email"
                                disabled
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-group col-xl-12">
                              <label className="mr-sm-2">
                                {" "}
                                Account Number{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="67*****88"
                                value={accNumber || ""}
                                onChange={(e) => setAccNumber(e.target.value)}
                              />
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-success"
                                onClick={handleAccDetails}>
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Approve COT Code </h4>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-xl-12">
                              <label className="mr-sm-2">
                                {" "}
                                COT Code status{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={cot || false}
                                disabled
                                onChange={(e) => setCot(e.target.value)}
                              />
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-success"
                                onClick={handleCotStatus}>
                                {cot ? "Revoke" : "Approve"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Approve TAX Code </h4>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <div className="form-row">
                            <div className="form-group col-xl-12">
                              <label className="mr-sm-2">
                                {" "}
                                TAx Code Status
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={tax || false}
                                onChange={(e) => setTax(e.target.value)}
                                disabled
                              />
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-success"
                                onClick={handleTaxStatus}>
                                {tax ? "Revoke" : "Approve"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Client's Information</h4>
                      </div>
                      <div className="card-body">
                        <form className="personal_validate">
                          <div className="form-row">
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Your Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Carla Pascle"
                                name="fullname"
                                value={name || ""}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Hello@example.com"
                                name="email"
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Date of birth</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="10-10-2020"
                                id="datepicker"
                                autoComplete="off"
                                name="dob"
                                value={dob || ""}
                                onChange={(e) => setDob(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Present Address</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="56, Old Street, Brooklyn"
                                name="presentaddress"
                                value={address || ""}
                                onChange={(e) => setAddr(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">City</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Brooklyn"
                                name="city"
                                value={city || ""}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">State</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="New York"
                                name="state"
                                value={state || ""}
                                onChange={(e) => setState(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Postal Code</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="25481"
                                name="postal"
                                value={postalcode || ""}
                                onChange={(e) => setPostalCode(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-xl-6">
                              <label className="mr-sm-2">Country</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="United States"
                                name="country"
                                value={country || ""}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-12">
                              <button
                                className="btn btn-success pl-5 pr-5"
                                onClick={handleUserProfile}>
                                Save
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
export default connect(mapStateToProps, { getAUser, logout, updateUser })(
  Client
);
