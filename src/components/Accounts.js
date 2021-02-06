import React, { useEffect } from "react";
import $ from "jquery";
import logo from "../assests/images/logo.png";

const Accounts = () => {
     useEffect(() => {
       //  Preloader
       $("#preloader").fadeOut(500);
       $("#main-wrapper").addClass("show");
     }, []);
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
                    <div className="header-search d-flex align-items-center">
                      <a className="brand-logo mr-3" href="index.html">
                        <img src={logo} alt="" width="30" />
                      </a>
                    </div>

                    <div className="dashboard_log">
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

          <div className="page_title">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="page_title-content">
                    <p>
                      Welcome Back,
                      <span> Carla Pascle</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="widget-card">
                        <div className="widget-title">
                          <h5>Balance</h5>
                          <p className="text-success">
                            133%{" "}
                            <span>
                              <i className="las la-arrow-up"></i>
                            </span>
                          </p>
                        </div>
                        <div className="widget-info">
                          <h3>$18,235.0</h3>
                          <p>USD</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="widget-card">
                        <div className="widget-title">
                          <h5>Balance</h5>
                          <p className="text-danger">
                            133%{" "}
                            <span>
                              <i className="las la-arrow-down"></i>
                            </span>
                          </p>
                        </div>
                        <div className="widget-info">
                          <h3>$18,235.0</h3>
                          <p>USD</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="widget-card">
                        <div className="widget-title">
                          <h5>Balance</h5>
                          <p className="text-success">
                            133%{" "}
                            <span>
                              <i className="las la-arrow-up"></i>
                            </span>
                          </p>
                        </div>
                        <div className="widget-info">
                          <h3>$18,235.0</h3>
                          <p>USD</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                      <div className="widget-card">
                        <div className="widget-title">
                          <h5>Balance</h5>
                          <p className="text-danger">
                            133%{" "}
                            <span>
                              <i className="las la-arrow-down"></i>
                            </span>
                          </p>
                        </div>
                        <div className="widget-info">
                          <h3>$18,235.0</h3>
                          <p>USD</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-8 col-lg-12 col-xxl-8">
                      <div className="card profile_chart transparent">
                        <div className="card-header">
                          <div className="chart_current_data">
                            <h3>
                              254856 <span>USD</span>
                            </h3>
                            <p className="text-success">
                              125648 <span>USD (20%)</span>
                            </p>
                          </div>
                          <div className="duration-option">
                            <a id="all" className="active">
                              ALL
                            </a>
                            <a id="one_month" className="">
                              1M
                            </a>
                            <a id="six_months">6M</a>
                            <a id="one_year" className="">
                              1Y
                            </a>
                            <a id="ytd" className="">
                              YTD
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div id="timeline-chart"></div>
                          <div className="chart-content text-center">
                            <div className="row">
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">24hr Volume</p>
                                  <strong>$1236548.325</strong>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">Market Cap</p>
                                  <strong>19B USD</strong>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">Circulating</p>
                                  <strong>29.4M BTC</strong>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">All Time High</p>
                                  <strong>19.783.06 USD</strong>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">Typical hold </p>
                                  <strong>88 days</strong>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6 col-6">
                                <div className="chart-stat">
                                  <p className="mb-1">Trading activity </p>
                                  <strong>70% buy </strong>
                                </div>
                              </div>
                              {/* <!-- <div className="col-xl-4 col-sm-6 col-6">
                                                    <div className="chart-stat">
                                                        <p className="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-sm-6 col-6">
                                                    <div className="chart-stat">
                                                        <p className="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-xxl-4">
                      <div className="card balance-widget transparent">
                        <div className="card-body">
                          <div id="wallet-chart"></div>
                          <div className="balance-widget">
                            <h4>
                              Total Balance : <strong>$125480</strong>
                            </h4>
                            <ul className="list-unstyled">
                              <li className="media">
                                <i className="la la-btc mr-3"></i>
                                <div className="media-body">
                                  <h5 className="m-0">Bitcoin</h5>
                                </div>
                                <div className="text-right">
                                  <h5>0.000242 BTC</h5>
                                  <span>0.125 USD</span>
                                </div>
                              </li>
                              <li className="media">
                                <i className="cc LTC mr-3"></i>
                                <div className="media-body">
                                  <h5 className="m-0">Litecoin</h5>
                                </div>
                                <div className="text-right">
                                  <h5>0.000242 LTC</h5>
                                  <span>0.125 USD</span>
                                </div>
                              </li>
                              <li className="media">
                                <i className="cc XRP mr-3"></i>
                                <div className="media-body">
                                  <h5 className="m-0">Ripple</h5>
                                </div>
                                <div className="text-right">
                                  <h5>0.000242 XRP</h5>
                                  <span>0.125 USD</span>
                                </div>
                              </li>
                              <li className="media">
                                <i className="cc DASH mr-3"></i>
                                <div className="media-body">
                                  <h5 className="m-0">Dash</h5>
                                </div>
                                <div className="text-right">
                                  <h5>0.000242 XRP</h5>
                                  <span>0.125 USD</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-xxl-12">
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="widget-card">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="widget-stat">
                                <div className="coin-title">
                                  <span>
                                    <i className="la la-btc"></i>
                                  </span>
                                  <h5 className="d-inline-block ml-2 mb-3">
                                    Bitcoin
                                    <span>(24h)</span>
                                  </h5>
                                </div>
                                <h4>
                                  USD 1254.36{" "}
                                  <span className="badge badge-success ml-2">
                                    + 06%
                                  </span>
                                </h4>
                              </div>
                              <div id="btcChart"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="widget-card">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="widget-stat">
                                <div className="coin-title">
                                  <span>
                                    <i className="la la-ethereum"></i>
                                  </span>
                                  <h5 className="d-inline-block ml-2 mb-3">
                                    Ethereum
                                    <span>(24h)</span>
                                  </h5>
                                </div>
                                <h4>
                                  USD 1254.36{" "}
                                  <span className="badge badge-danger ml-2">
                                    - 06%
                                  </span>
                                </h4>
                              </div>
                              <div id="ltcChart"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="widget-card">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="widget-stat">
                                <div className="coin-title">
                                  <span>
                                    <i className="cc LTC-alt"></i>
                                  </span>
                                  <h5 className="d-inline-block ml-2 mb-3">
                                    Litecoin
                                    <span>(24h)</span>
                                  </h5>
                                </div>
                                <h4>
                                  USD 1254.36{" "}
                                  <span className="badge badge-primary ml-2">
                                    06%
                                  </span>
                                </h4>
                              </div>
                              <div id="xrpChart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-xxl-4">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Exchange</h4>
                        </div>
                        <div className="card-body">
                          <div className="buy-sell-widget">
                            <form
                              method="post"
                              name="myform"
                              className="currency_validate">
                              <div className="form-group">
                                <label className="mr-sm-2">Currency</label>
                                <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                    <label className="input-group-text">
                                      <i className="cc BTC-alt"></i>
                                    </label>
                                  </div>
                                  <select
                                    name="currency"
                                    className="form-control">
                                    <option value="">Select</option>
                                    <option value="bitcoin">Bitcoin</option>
                                    <option value="litecoin">Litecoin</option>
                                  </select>
                                </div>
                              </div>

                              <div className="form-group">
                                <label className="mr-sm-2">
                                  Payment Method
                                </label>
                                <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                    <label className="input-group-text">
                                      <i className="fa fa-bank"></i>
                                    </label>
                                  </div>
                                  <select
                                    className="form-control"
                                    name="method">
                                    <option value="">Select</option>
                                    <option value="bank">
                                      Bank of America ********45845
                                    </option>
                                    <option value="master">
                                      Master Card ***********5458
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="form-group">
                                <label className="mr-sm-2">
                                  Enter your amount
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    name="currency_amount"
                                    className="form-control"
                                    placeholder="0.0214 BTC"
                                  />
                                  <input
                                    type="text"
                                    name="usd_amount"
                                    className="form-control"
                                    placeholder="125.00 USD"
                                  />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                  <p className="mb-0">Monthly Limit</p>
                                  <h6 className="mb-0">$49750 remaining</h6>
                                </div>
                              </div>
                              <button
                                type="submit"
                                name="submit"
                                className="btn btn-success btn-block">
                                Exchange Now
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-xxl-8">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Transaction </h4>
                        </div>
                        <div className="card-body">
                          <div className="transaction-widget">
                            <ul className="list-unstyled">
                              <li className="media">
                                <span className="sold-thumb">
                                  <i className="la la-arrow-down"></i>
                                </span>
                                <div className="media-body">
                                  <p>
                                    <small>9 November, 2020</small>
                                    <small>15:33</small>
                                  </p>
                                  <p className="wallet-address text-dark">
                                    15f5s8s47bhj61r8w4e77e5e56
                                  </p>
                                </div>
                                <div className="text-right">
                                  <h4>0.000242 BTC</h4>
                                </div>
                              </li>
                              <li className="media">
                                <span className="buy-thumb">
                                  <i className="la la-arrow-up"></i>
                                </span>
                                <div className="media-body">
                                  <p>
                                    <small>9 November, 2020</small>
                                    <small>15:33</small>
                                  </p>
                                  <p className="wallet-address text-dark">
                                    15f5s8s47bhj61r8w4e77e5e56
                                  </p>
                                </div>
                                <div className="text-right">
                                  <h4>0.000242 LTC</h4>
                                </div>
                              </li>
                              <li className="media">
                                <span className="sold-thumb">
                                  <i className="la la-arrow-down"></i>
                                </span>
                                <div className="media-body">
                                  <p>
                                    <small>9 November, 2020</small>
                                    <small>15:33</small>
                                  </p>
                                  <p className="wallet-address text-dark">
                                    15f5s8s47bhj61r8w4e77e5e56
                                  </p>
                                </div>
                                <div className="text-right">
                                  <h4>0.000242 XRP</h4>
                                </div>
                              </li>
                              <li className="media">
                                <span className="buy-thumb">
                                  <i className="la la-arrow-up"></i>
                                </span>
                                <div className="media-body">
                                  <p>
                                    <small>9 November, 2020</small>
                                    <small>15:33</small>
                                  </p>
                                  <p className="wallet-address text-dark">
                                    15f5s8s47bhj61r8w4e77e5e56
                                  </p>
                                </div>
                                <div className="text-right">
                                  <h4>0.000242 XRP</h4>
                                </div>
                              </li>
                              <li className="media">
                                <span className="buy-thumb">
                                  <i className="la la-arrow-up"></i>
                                </span>
                                <div className="media-body">
                                  <p>
                                    <small>9 November, 2020</small>
                                    <small>15:33</small>
                                  </p>
                                  <p className="wallet-address text-dark">
                                    15f5s8s47bhj61r8w4e77e5e56
                                  </p>
                                </div>
                                <div className="text-right">
                                  <h4>0.000242 XRP</h4>
                                </div>
                              </li>
                            </ul>
                          </div>
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
}

export default Accounts;