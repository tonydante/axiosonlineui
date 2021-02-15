import React, { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import moment from "moment";
import * as Icon from "react-cryptocoins";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../assests/images/logo.png";
import { fetchTrans, logout, getAUser, API } from "../actions";

const Accounts = (props) => {
  const [show, setShow] = useState(false);
  const [coin, setCoin] = useState({});
  const [activities, setActivities] = useState([]);
  const [amount, setAmount] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [currency, setCurrency] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    //  Preloader
    // window.location.hash = props.history.location.pathname;
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    props.fetchTrans(props.user._id);
    props.getAUser(props.user._id);
    axios
      .get(
        `${API}/coins`
      )
      .then(({data: {data}}) => {
        setCoin(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setActivities(props.transactions);
  }, [props]);

  useEffect(() => {
    amount.trim() && currency.trim() && account.trim()
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  }, [amount, currency, account]);

  const handleWithdraw = (e) => {
    e.preventDefault();

    const withdrawObj = {
      referenceNo: props.user.accNumber,
      amount,
      transactionType: "debit",
    };
    // const userId = {
    //   id: props.user._id,
    // };
    props.history.push({
      pathname: "/user/transfer",
      state: { withdrawObj },
    });
  };

  const replaceFirst5 = (str) => {
    return str.replace(/^.{1,5}/, (m) => "*".repeat(m.length + 3));
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
                  <div className="header-search d-flex align-items-center">
                    <a className="brand-logo mr-3" href="index.html">
                      <img src={logo} alt="" width="30" />
                    </a>
                  </div>

                  <div className="dashboard_log">
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
                            Howdy, {props.client?.username}
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
                    <span> {props.user.name || props.user.username}</span>
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
                  <div className="col-xl-8 col-lg-12 col-xxl-8">
                    <div className="card profile_chart transparent">
                      <div className="card-header">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="widget-card">
                            <div className="widget-title">
                              <h5>Balance</h5>
                            </div>
                            <div className="widget-info">
                              <h3>${props.client.balance || 0}</h3>
                              <p>USD</p>
                            </div>
                          </div>
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
                                <strong>
                                  ${coin.DASH?.quote.USD.volume_24h.toFixed(2)}
                                </strong>
                              </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-6">
                              <div className="chart-stat">
                                <p className="mb-1">Market Cap</p>
                                <strong>
                                  {coin.DASH?.quote.USD.market_cap.toFixed(2)}{" "}
                                  USD
                                </strong>
                              </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-6">
                              <div className="chart-stat">
                                <p className="mb-1">Circulating</p>
                                <strong>
                                  {coin.BTC?.circulating_supply} BTC
                                </strong>
                              </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 col-6">
                              <div className="chart-stat">
                                <p className="mb-1">Total Supply</p>
                                <strong>18624337</strong>
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
                            Total Balance :{" "}
                            <strong>${props.client.balance || 0}</strong>
                          </h4>
                          <ul className="list-unstyled">
                            <li className="media">
                              <i className="mr-3">
                                <Icon.Btc color="#F7931A" size={35} />
                              </i>
                              <div className="media-body">
                                <h5 className="m-0">Bitcoin</h5>
                              </div>
                              <div className="text-right">
                                <span>
                                  {coin.BTC?.quote.USD.price.toFixed(3)} USD
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <i className="mr-3">
                                <Icon.Ltc size={35} />
                              </i>
                              <div className="media-body">
                                <h5 className="m-0">Litecoin</h5>
                              </div>
                              <div className="text-right">
                                <span>
                                  {coin.LTC?.quote.USD.price.toFixed(3)} USD
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <i className="mr-3">
                                <Icon.Eth size={35} />
                              </i>
                              <div className="media-body">
                                <h5 className="m-0">Ethereum</h5>
                              </div>
                              <div className="text-right">
                                <span>
                                  {coin.ETH?.quote.USD.price.toFixed(3)} USD
                                </span>
                              </div>
                            </li>
                            <li className="media">
                              <i className="mr-3">
                                <Icon.Dash size={35} />
                              </i>
                              <div className="media-body">
                                <h5 className="m-0">Dash</h5>
                              </div>
                              <div className="text-right">
                                <span>
                                  {coin.DASH?.quote.USD.price.toFixed(3)} USD
                                </span>
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
                                  <i className="mr-3">
                                    <Icon.Btc color="#F7931A" size={35} />
                                  </i>
                                </span>
                                <h5 className="d-inline-block ml-2 mb-3">
                                  Bitcoin
                                  <span>(24h)</span>
                                </h5>
                              </div>
                              <h4>
                                USD {coin.BTC?.quote.USD.price.toFixed(2)}{" "}
                                <span className="badge badge-primary ml-2">
                                  {coin.BTC?.quote.USD.percent_change_24h.toFixed(
                                    1
                                  )}
                                  %
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
                                  <i className="mr-3">
                                    <Icon.Eth size={35} />
                                  </i>
                                </span>
                                <h5 className="d-inline-block ml-2 mb-3">
                                  Ethereum
                                  <span>(24h)</span>
                                </h5>
                              </div>
                              <h4>
                                USD {coin.ETH?.quote.USD.price.toFixed(2)}{" "}
                                <span className="badge badge-primary ml-2">
                                  {coin.ETH?.quote.USD.percent_change_24h.toFixed(
                                    1
                                  )}
                                  %
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
                                  <i className="mr-3">
                                    <Icon.Ltc size={35} />
                                  </i>
                                </span>
                                <h5 className="d-inline-block ml-2 mb-3">
                                  Litecoin
                                  <span>(24h)</span>
                                </h5>
                              </div>
                              <h4>
                                USD {coin.LTC?.quote.USD.price.toFixed(2)}{" "}
                                <span className="badge badge-primary ml-2">
                                  {coin.LTC?.quote.USD.percent_change_24h.toFixed(
                                    1
                                  )}
                                  %
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
                                    <Icon.Btc />
                                  </label>
                                </div>
                                <select
                                  name="currency"
                                  onChange={(e) => setCurrency(e.target.value)}
                                  className="form-control">
                                  <option value="">Select</option>
                                  <option value="bitcoin">Dollars</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="mr-sm-2">Payment Method</label>
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <label className="input-group-text">
                                    <i className="fa fa-bank"></i>
                                  </label>
                                </div>
                                <select
                                  className="form-control"
                                  name="method"
                                  onChange={(e) => setAccount(e.target.value)}>
                                  <option value="">Select</option>
                                  <option value="bank">
                                    Bank Account {props.user.accNumber}
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
                                  type="number"
                                  name="usd_amount"
                                  className="form-control"
                                  placeholder="eg: 1000"
                                  onChange={(e) => setAmount(e.target.value)}
                                />
                              </div>
                              <div className="d-flex justify-content-between mt-3">
                                <p className="mb-0">Balance</p>
                                <h6 className="mb-0">
                                  ${props.client.balance} remaining
                                </h6>
                              </div>
                            </div>
                            <button
                              type="submit"
                              name="submit"
                              disabled={btnDisabled}
                              onClick={handleWithdraw}
                              className="btn btn-success btn-block">
                              Withdraw Now
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
                            {activities.length > 0 &&
                              activities
                                .reverse()
                                .slice(0, 5)
                                .map(
                                  (
                                    {
                                      transactionType,
                                      amount,
                                      referenceNo,
                                      timestamp,
                                    },
                                    index
                                  ) => (
                                    <li className="media" key={index}>
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
                                      <div className="media-body">
                                        <p>
                                          <small>{timestamp}</small>
                                        </p>
                                        <p className="wallet-address text-dark">
                                          {replaceFirst5(referenceNo)}
                                        </p>
                                      </div>
                                      <div className="text-right">
                                        <h4>{amount} USD</h4>
                                      </div>
                                    </li>
                                  )
                                )}
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
};
const mapStateToProps = (state) => {
  const { user } = state.setCurrentUser.user;
  const { transactions } = state.transactions;
  const client = state.clients?.user || {};

  return { user, transactions, client };
};
export default connect(mapStateToProps, { fetchTrans, logout, getAUser })(
  withRouter(Accounts)
);
