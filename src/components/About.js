import React from 'react';
import Logo from '../assests/images/logo.png';
import {Link} from 'react-router-dom'

const About = () => (
  <>
    <div id="preloader">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>

    <div id="main-wrapper">
      <div className="header landing_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} alt="" />
                  <span>Axios Online </span>
                </Link>

                <div className="dashboard_log">
                  <div className="d-flex align-items-center">
                    <div className="header_auth">
                      <Link to="/signin" className="btn btn-success  mx-2">
                        Sign In
                      </Link>
                      <Link to="/signup" className="btn btn-outline-primary  mx-2">
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

      <div className="page_title pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-6 col-6">
              <div className="page_title-content">
                <p>Last updated: October 21, 2020</p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-6 col-6 text-sm-left">
              <ul className="text-right breadcrumbs list-unstyle">
                <li className="active">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="about_content">
                <div className="our_vision">
                  <h3>OUR VISION</h3>
                  <p>
                    Axios is known to provide the perfect fit financial
                    services. Our excellent squad of financial advisors is
                    experienced in understanding the needs of our frequenter’s
                    business and offer solutions accordingly. .
                  </p>
                  <p>
                    We at Axios Online Credit advice our clients to invest the
                    saved money in the business, real estate, and gold or
                    silver. We ensure that we match the financial objectives and
                    goals of our customers with the financial resources
                    exquisitely in order to acquaint them with the best solution
                    for their business.
                  </p>
                  <p>
                    We are great providers of Business Banking solutions. Our
                    solutions help our clients to save time and manage their
                    business risks.
                  </p>
                  <p>
                    We offer preeminent Offshore Banking services to our
                    customers based on their needs. We ensure that our offshore
                    banking services are helpful to them in saving time and
                    managing their transactions. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer" style={{position: "fixed"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="footer-link text-left">
                <Link to="/" className="m_logo">
                  <img src={Logo} alt="" />
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

export default About