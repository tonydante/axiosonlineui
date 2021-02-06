import React, {useEffect}from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
function Home() {
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
        <div id="main-wrapper pt-0">
          <div className="header landing_page">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 position-relative">
                  <nav className="navbar navbar-expand-lg navbar-light px-0">
                    <a className="navbar-brand" href="landing.html">
                      <img src="./images/logo.png" alt="" />
                      <span>Treemium </span>
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"></div>
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
                      Buy and sell <br />
                      Treemium ocurrency
                    </h2>
                    <p>
                      Fast and secure way to purchase or exchange 150+ Treemium
                      ocurrencies
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
                    <h3>The World's Leading Treemium ocurrency Exchange</h3>
                    <p>
                      Trade Bitcoin, ETH, and hundreds of other Treemium
                      ocurrencies in minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="market-table">
                        <div className="table-responsive">
                          <table className="table mb-0 table-responsive-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span>1</span>
                                </td>
                                <td className="coin_icon">
                                  <i className="fab fa-btc"></i>
                                  <span>
                                    Bitcoin <b>BTC</b>
                                  </span>
                                </td>

                                <td>USD 680,175.06</td>
                                <td>
                                  <span className="text-success">+1.13%</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>2</span>
                                </td>
                                <td className="coin_icon">
                                  <i className="fab fa-ethereum"></i>
                                  <span>
                                    Ethereum <b>ETH</b>
                                  </span>
                                </td>

                                <td>USD 680,175.06</td>
                                <td>
                                  <span className="text-success">+1.13%</span>
                                </td>
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
          <div className="features section-padding">
            <div className="container">
              <div className="row py-lg-5 justify-content-center">
                <div className="col-xl-7">
                  <div className="section_heading">
                    <span>Features</span>
                    <h3>The most trusted Treemium ocurrency platform</h3>
                    <p>Here are a few reasons why you should choose Coinbase</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-shield"></i>
                    </span>
                    <h4>Secure storage</h4>
                    <p>
                      We store the vast majority of the digital assets in secure
                      offline storage.
                    </p>
                    <a href="#">
                      Learn more <i className="la la-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-cubes"></i>
                    </span>
                    <h4>Protected by insurance</h4>
                    <p>
                      Treemium ocurrency stored on our servers is covered by our
                      insurance policy.
                    </p>
                    <a href="#">
                      Learn more <i className="la la-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="features-content">
                    <span>
                      <i className="fa fa-life-ring"></i>
                    </span>
                    <h4>Industry best practices</h4>
                    <p>
                      Treemium supports a variety of the most popular digital
                      currencies.
                    </p>
                    <a href="#">
                      Learn more <i className="la la-angle-right"></i>
                    </a>
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
                        <i className="fa fa-phone"></i> (+880) 1243 665566
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i> hello@example.com
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
                    <a href="#" className="m_logo">
                      <img src="./images/logo.png" alt="" />
                    </a>
                    <a href="about.html">About</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="term-condition.html">Term & Service</a>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 text-lg-right text-center">
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
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-12 text-center text-lg-right">
                  <div className="copy_right text-center text-lg-center">
                    Copyright © 2020 Quixlab. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cookie_alert">
          <div className="alert alert-light fade show">
            <p>
              We use cookies to enhance your experience. By using Treemium , you
              agree to our <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
            <button className="btn btn-success btn-block" data-dismiss="alert">
              Accept
            </button>
          </div>
        </div>
      </>
    );
}

export default Home;