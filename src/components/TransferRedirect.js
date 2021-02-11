import React, { useEffect } from "react";
import $ from "jquery";
import logo from "../assests/images/logo.png";

const TransferRedirect = ({ history }) => {
  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    const { withdrawObj } = history.location.state;
    window.setTimeout(function () {
        history.push({
          pathname: "/user/cot",
          state: { withdrawObj },
        });
    }, 2000);
  }, [history]);

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
                  <div className="header-search">
                  </div>

                  <div className="dashboard_log my-2">
                    <div className="d-flex align-items-center">
                      <div className="profile_log dropdown">
                        <div className="user" data-toggle="dropdown">
                          <span className="thumb">
                            <i className="mdi mdi-account"></i>
                          </span>
                          <span className="name">Carla Pascle</span>
                          <span className="arrow">
                            <i className="la la-angle-down"></i>
                          </span>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="accounts.html" className="dropdown-item">
                            <i className="mdi mdi-account"></i> Account
                          </a>
                          <a href="history.html" className="dropdown-item">
                            <i className="la la-book"></i> History
                          </a>
                          <a href="settings.html" className="dropdown-item">
                            <i className="la la-cog"></i> Setting
                          </a>
                          <a href="lock.html" className="dropdown-item">
                            <i className="la la-lock"></i> Lock
                          </a>
                          <a
                            href="signin.html"
                            className="dropdown-item logout">
                            <i className="la la-sign-out"></i> Logout
                          </a>
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
                <a href="index.html">
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                  <span className="nav-text">Home</span>
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
            <div className="copy_right">
              Copyright © 2018 axiosonline. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="verification section-padding">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-xl-5 col-md-6">
                  <div className="auth-form card">
                    <div className="card-body">
                      <form
                        action="verify-step-4.html"
                        className="identity-upload">
                        <div className="identity-content">
                          <span className="icon">
                            <i className="fa fa-shield"></i>
                          </span>
                          <h4>Transfer in Progress</h4>
                          <p>This may take some time depending on the account destination.</p>
                        </div>

                        <div className="upload-loading text-center mb-3">
                          <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
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

export default TransferRedirect;
