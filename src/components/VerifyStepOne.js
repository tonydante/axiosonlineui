import React, { useEffect } from "react";
import $ from "jquery";
import logo from "../assests/images/logo.png";

const VerifyStepOne = ({ history }) => {
  useEffect(() => {
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
  }, []);
  const handleNav = () => {
    history.push("/user/verify-step-2");
  };
 
  return (
    <>
      <div id="preloader">
        <div class="sk-three-bounce">
          <div class="sk-child sk-bounce1"></div>
          <div class="sk-child sk-bounce2"></div>
          <div class="sk-child sk-bounce3"></div>
        </div>
      </div>

      <div id="main-wrapper">
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <nav class="navbar">
                  <div class="header-search">
                    <form>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon2">
                            <i class="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="dashboard_log my-2">
                    <div class="d-flex align-items-center">
                      <div class="profile_log dropdown">
                        <div class="user" data-toggle="dropdown">
                          <span class="thumb">
                            <i class="mdi mdi-account"></i>
                          </span>
                          <span class="name">Carla Pascle</span>
                          <span class="arrow">
                            <i class="la la-angle-down"></i>
                          </span>
                        </div>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="accounts.html" class="dropdown-item">
                            <i class="mdi mdi-account"></i> Account
                          </a>
                          <a href="history.html" class="dropdown-item">
                            <i class="la la-book"></i> History
                          </a>
                          <a href="settings.html" class="dropdown-item">
                            <i class="la la-cog"></i> Setting
                          </a>
                          <a href="lock.html" class="dropdown-item">
                            <i class="la la-lock"></i> Lock
                          </a>
                          <a href="signin.html" class="dropdown-item logout">
                            <i class="la la-sign-out"></i> Logout
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

        <div class="sidebar">
          <a class="brand-logo" href="index.html">
            <img src={logo} alt="" />
            <span>Treemium </span>
          </a>
          <div class="menu">
            <ul>
              <li>
                <a href="index.html">
                  <span>
                    <i class="mdi mdi-view-dashboard"></i>
                  </span>
                  <span class="nav-text">Home</span>
                </a>
              </li>
              <li>
                <a href="buy-sell.html">
                  <span>
                    <i class="mdi mdi-repeat"></i>
                  </span>
                  <span class="nav-text">Exchange</span>
                </a>
              </li>
              <li>
                <a href="accounts.html">
                  <span>
                    <i class="mdi mdi-account"></i>
                  </span>
                  <span class="nav-text">Account</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <span>
                    <i class="mdi mdi-settings"></i>
                  </span>
                  <span class="nav-text">Setting</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="sidebar-footer">
            <div class="social">
              <a href="#">
                <i class="fa fa-youtube-play"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
            <div class="copy_right">© 2020 Quixlab</div>
          </div>
        </div>

        <div class="content-body">
          <div class="verification section-padding">
            <div class="container h-100">
              <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                  <div class="auth-form card">
                    <div class="card-header">
                      <h4 class="card-title">Link a Debit card</h4>
                    </div>
                    <div class="card-body">
                      <form class="identity-upload">
                        <div class="identity-content">
                          <span class="icon">
                            <i class="fa fa-shield"></i>
                          </span>
                          <h4>
                            Please verify your identity before adding your card
                          </h4>
                          <p>
                            Uploading your ID helps as ensure the safety and
                            security of your founds
                          </p>
                        </div>

                        <div class="text-center">
                          <button
                            class="btn btn-success pl-5 pr-5"
                            onClick={handleNav}>
                            Upload ID
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

export default VerifyStepOne;
