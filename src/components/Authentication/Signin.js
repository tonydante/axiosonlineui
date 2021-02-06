import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import logo from '../../assests/images/logo.png'
import { validateFormInput } from "../../validator";
import swal from "sweetalert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SigninRequest } from "../../actions";


function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

 useEffect(() => {
   //  Preloader  
     $("#preloader").fadeOut(500);
     $("#main-wrapper").addClass("show");

 }, []);
  useEffect(() => {
    if (email.trim() && password.trim()) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);

  /**
   * This method validates the input from the state object
   * and chcecks if its valid and makes an api call to the backend
   *
   * @param {any} event
   * @memberof SigninForm
   * @returns {void}
   */
  const onSubmit = (event) => {
    event.preventDefault();
    const { errors } = validateFormInput({ email, password });
    if (errors.invalidEmail) {
      let errorMessage = { icon: "warning" };
      errors.invalidEmail
        ? (errorMessage.title = errors.invalidEmail)
        : (errorMessage.title = "Oops!, You seem to have missed some fields");
      swal(errorMessage);
    }

    let obj = { email, password, role:  "user" };
    props.SigninRequest(obj).then(({role}) => {
        if (role === "admin") {
          props.history.push("/admin/dashboard");
        }
        props.history.push("/user/dashboard");
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "warning",
        });
        return err
      });
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
        <div className="authincation section-padding">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-xl-5 col-md-6">
                <div className="mini-logo text-center my-5">
                  <a href="landing.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="auth-form card">
                  <div className="card-header justify-content-center">
                    <h4 className="card-title">Sign in</h4>
                  </div>
                  <div className="card-body">
                    <form className="signup_validate">
                      
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="email eg: hello@example.com"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    
                      
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          disabled={btnDisabled}
                          onClick={onSubmit}>
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Don't have an account?{" "}
                        <Link className="text-primary" to="/signup">
                          Sign up
                        </Link>
                      </p>
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

export default connect(null, { SigninRequest })(withRouter(Signin));
