import React, { useEffect, useState } from "react";
import Logo from "../assests/images/logo.png";
import $ from "jquery";
import { Link } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
  }, []);
  const handleMenu = () => {
    setShow(!show);
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
        <div className="header landing_page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 position-relative">
                <nav className="navbar navbar-expand-lg navbar-light px-0">
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" />
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
                    <ul className="navbar-nav">
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
                        <Link to="./signup" className="btn btn-outline-primary">
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
                      silver. We ensure that we match the financial objectives
                      and goals of our customers with the financial resources
                      exquisitely in order to acquaint them with the best
                      solution for their business.
                    </p>
                    <p>
                      We are great providers of Business Banking solutions. Our
                      solutions help our clients to save time and manage their
                      business risks.
                    </p>
                    <p>
                      We offer preeminent Offshore Banking services to our
                      customers based on their needs. We ensure that our
                      offshore banking services are helpful to them in saving
                      time and managing their transactions. .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer" style={{ position: "fixed" }}>
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
};

export default About;
