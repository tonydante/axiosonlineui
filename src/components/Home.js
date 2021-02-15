import React, {useEffect, useState}from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import logo from "../assests/images/logo.png";

function Home() {
  const [show, setShow] = useState(false)
   useEffect(() => {
     //  Preloader
     $("#preloader").fadeOut(500);
     $("#main-wrapper").addClass("show");
   }, []);
const handleMenu = () => {
  setShow(!show);
}
    return (
      <>
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
        <div id="main-wrapper pt-0">
          <div className="header landing_page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 position-relative">
                  <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <Link className="navbar-brand" to="/">
                      <img src={logo} alt="" />
                      <span>Axos Online</span>
                    </Link>
                    <button
                      className={`navbar-toggler ${show ? "" : "collapsed"}`}
                      onClick={handleMenu}
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class={`navbar-collapse collapse ${show ? "show" : ""}`}
                      id="navbarSupportedContent">
                      <ul className={!show ? "desktop" : "navbar-nav"}>
                        <li className="nav-item">
                          <Link to="/signin" className="nav-link">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="./signup" className="nav-link">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dashboard_log">
                      <div className="d-flex align-items-center">
                        <div className="header_auth">
                          <Link to="/signin" className="btn btn-primary">
                            Sign In
                          </Link>
                          <Link
                            to="./signup"
                            className="btn btn-outline-primary">
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div
            className="intro section-padding position-relative"
            id="intro"
            data-scroll-index="0">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-12 col-md-12">
                  <div className="intro-content">
                    <h2>
                      Get Paid Faster <br />
                      Than Your Coworkers
                    </h2>
                    <p>
                      With Essential Checking Get your paycheck up to two days
                      early* with Essential Checking – the no-fee checking
                      account. Pay bills. Slash debt. Or add funds to your
                      savings account early so you can squirrel away more
                      interest earnings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="market section-padding page-section"
            data-scroll-index="1">
            <div className="container">
              <div className="row py-lg-5 justify-content-center">
                <div className="col-xl-7">
                  <div className="section_heading">
                    <span>Explore</span>
                    <h3>Real value. Real bankers.</h3>
                    <p>
                      An online bank with a history you can trust. Offering
                      great rates and low fees is only part of what Bank5
                      Connect is all about. As one of America’s top-rated online
                      banks, we’ve been delivering exceptional value to our
                      customers since Bank5 Connect was created in 2013. But
                      we’ve been in the banking business much longer than that.
                      Bank5 Connect is an online division of BankFive, a trusted
                      community bank based in Massachusetts that’s been serving
                      customers since 1855.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="features section-padding">
            <div className="container">
              <div className="row py-lg-5 justify-content-center">
                <div className="col-xl-7">
                  <div className="section_heading">
                    <span>Helpful Banking Features</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-shield"></i>
                    </span>
                    <h4>Invite Friends</h4>
                    <p>
                      Help a friend bank smarter with little to no fees, high
                      savings rates, and a simple banking app to fit their busy
                      lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-cubes"></i>
                    </span>
                    <h4>Automate Your Bills</h4>
                    <p>
                      Never miss a bill payment again. With Bill Pay, you can
                      truly “set it and forget it” by auto-paying bills directly
                      from your account.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-life-ring"></i>
                    </span>
                    <h4>Peer-to-Peer Payments</h4>
                    <p>
                      Pay your friends directly from your account. All you need
                      is their mobile number or email. It’s fast, easy, and
                      secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form section-padding" data-scroll-index="4">
            <div className="container">
              <div className="row py-lg-5 justify-content-center">
                <div className="col-xl-7">
                  <div className="section_heading">
                    <span>Ask Question</span>
                    <h3>Let us hear from you directly!</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-4">
                  <div className="info-list">
                    <h4 className="mb-3">Address</h4>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i> California, USA
                      </li>
                      <li>
                        <i className="fa fa-phone"></i> 877-303-0448
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>
                        contact@axiosonlinecredits.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-8 col-md-8 col-sm-8">
                  <form
                    method="post"
                    name="myform"
                    className="contact_validate">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="contactName">Full name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactName"
                            placeholder="Full name"
                            name="firstname"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label htmlFor="contactEmail">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="hello@domain.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control p-3"
                            name="message"
                            rows="5"
                            placeholder="Tell us what we can help you with!"></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary px-4">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer landing">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="footer-link text-left">
                    <Link to="/" className="m_logo">
                      <img src={logo} alt="" />
                    </Link>
                    <Link to="/about">About</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 text-lg-right text-center"></div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-12 text-center text-lg-right">
                  <div className="copy_right text-center text-lg-center">
                    Copyright © 2018 axiosonline. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;