import React, {useState,useEffect} from 'react'
import $ from "jquery";
import {Link} from 'react-router-dom'
import logo from "../../assests/images/logo.png";
import { connect } from "react-redux";
import {logout} from '../../actions'

const AdminBoard = (props) => {
    const [show, setShow] = useState(false)
    const [profile, setProfile] = useState({})

    useEffect(() => {
      //  Preloader
      $("#preloader").fadeOut(500);
      $("#main-wrapper").addClass("show");
    }, []);

    useEffect(() => {
        setProfile(props.admin)
    }, [props])

    const handleMenu = () => {
        setShow(!show)
    }
    
    const logout = () => {
        props.logout()
    }
console.log(profile, 'profile')
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
                          className={`profile_log dropdown ${
                            show ? "show" : ""
                          }`}
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
                  <Link to="/admin/clients">
                    <span>
                      <i className="mdi mdi-repeat"></i>
                    </span>
                    <span className="nav-text">Clients</span>
                  </Link>
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
                <div className="col-xl-6 col-lg-6 col-md-12">
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
                          <span className="text-muted">
                            {profile?.address}
                          </span>
                        </li>
                        <li className="mb-1">
                          <h5 className="mr-4">Total Transactions</h5>
                          <span>103 Time ( 5 Today )</span>
                        </li>
                        <li>
                          <h5 className="text-danger mr-4">Last Transaction</h5>
                          <span className="text-danger">
                            3 February, 2020, 10:00 PM
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="card acc_balance">
                    <div className="card-header">
                      <h4 className="card-title">Wallet</h4>
                    </div>
                    <div className="card-body">
                      <span>Available BTC</span>
                      <h3>0.0230145 BTC</h3>

                      <div className="d-flex justify-content-between my-4">
                        <div>
                          <p className="mb-1">Buy this month</p>
                          <h4>3.0215485 BTC</h4>
                        </div>
                        <div>
                          <p className="mb-1">Sell this month</p>
                          <h4>3.0215485 BTC</h4>
                        </div>
                      </div>

                      <div className="btn-group mb-3">
                        <button className="btn btn-primary">Sell</button>
                        <button className="btn btn-success">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header border-0">
                      <h4 className="card-title">All Activities</h4>
                    </div>
                    <div className="card-body pt-0">
                      <div className="transaction-table">
                        <div className="table-responsive">
                          <table className="table mb-0 table-responsive-sm">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="sold-thumb">
                                    <i className="la la-arrow-down"></i>
                                  </span>
                                </td>

                                <td>
                                  <span className="badge badge-danger">
                                    Sold
                                  </span>
                                </td>
                                <td>
                                  <i className="cc BTC"></i> BTC
                                </td>
                                <td>Using - Bank *******5264</td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="buy-thumb">
                                    <i className="la la-arrow-up"></i>
                                  </span>
                                </td>
                                <td>
                                  <span className="badge badge-success">
                                    Buy
                                  </span>
                                </td>
                                <td>
                                  <i className="cc LTC"></i> LTC
                                </td>
                                <td>Using - Card *******8475</td>
                                <td className="text-success">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="sold-thumb">
                                    <i className="la la-arrow-down"></i>
                                  </span>
                                </td>
                                <td>
                                  <span className="badge badge-danger">
                                    Sold
                                  </span>
                                </td>
                                <td>
                                  <i className="cc XRP"></i> XRP
                                </td>
                                <td>Using - Card *******8475</td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="buy-thumb">
                                    <i className="la la-arrow-up"></i>
                                  </span>
                                </td>
                                <td>
                                  <span className="badge badge-success">
                                    Buy
                                  </span>
                                </td>
                                <td>
                                  <i className="cc DASH"></i> DASH
                                </td>
                                <td>Using - Card *******2321</td>
                                <td className="text-success">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="sold-thumb">
                                    <i className="la la-arrow-down"></i>
                                  </span>
                                </td>
                                <td>
                                  <span className="badge badge-danger">
                                    Sold
                                  </span>
                                </td>
                                <td>
                                  <i className="cc BTC"></i> BTC
                                </td>
                                <td>Using - Card *******2321</td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                              </tr>
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
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    const admin = state.setCurrentUser.user.user;
    return { admin };
}

export default connect(mapStateToProps, { logout })(AdminBoard);