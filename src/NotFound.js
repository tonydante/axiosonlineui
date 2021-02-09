import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div id="main-wrapper">
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <h1>
              404 - Not Found! Oops seems you are try to access the dark net
            </h1>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
