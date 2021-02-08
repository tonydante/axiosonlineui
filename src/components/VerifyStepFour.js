import React, { useEffect } from "react";
import $ from "jquery";
import logo from "../assests/images/logo.png";

const VerifyStepFour = ({ history }) => {
  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
  }, []);
  const handleNav = () => {
    history.push("/user/dashboard");
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
            <div className="social">
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="copy_right">© 2020 Quixlab</div>
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
                        action="add-debit-card.html"
                        className="identity-upload">
                        <div className="identity-content">
                          <span className="icon">
                            <i className="fa fa-check"></i>
                          </span>
                          <h4>Identity Verified</h4>
                          <p>
                            Congrats! Your documents were submitted succefully.
                            We will email you once your verification has
                            completed.
                          </p>
                        </div>

                        <div className="text-center mb-4">
                          <button
                            type="submit"
                            onClick={handleNav}
                            className="btn btn-success pl-5 pr-5">
                            Continue
                          </button>
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

//Your documents were submitted succefully. We will email you
//once your verification has completed.

export default VerifyStepFour;
