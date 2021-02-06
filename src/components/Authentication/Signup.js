import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import $ from 'jquery';
import {withRouter} from 'react-router-dom';
import {signupValidation}  from '../../validator';
import {SignupRequest} from '../../actions';
import logo from '../../assests/images/logo.png'

function Signup (props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [helperTexts, setHelperTexts] = useState([]);
  const [error, setError] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);


   useEffect(() => {
     //  Preloader
     $("#preloader").fadeOut(500);
     $("#main-wrapper").addClass("show");
   }, []);
   
  useEffect(() => {
    if (email.trim() &&
      confirmPassword.trim() &&
      password.trim() &&
      username.trim() 
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [ username, password, confirmPassword, email]);

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
    if (password.trim() !== confirmPassword.trim()) {
      setError(true);
      setHelperTexts(['passwords don\'t match'])
    } else {
      const fields = {username, password, email};
      const {errors, isValid} = signupValidation(fields);

      if (isValid) {
        props.SignupRequest(fields, props.history)
      } else {
        setError(true);
        setHelperTexts(Object.values(errors))
      }
    }
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
                    <h4 className="card-title">Sign up your account</h4>
                  </div>
                  <div className="card-body">
                    <form
                      method="post"
                      className="signup_validate">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="username"
                          name="username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
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
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          name="cpassword"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <ul>
                          {error
                            ? helperTexts.map((text, index) => (
                                <li style={{ color: "red" }} key={index}>{text}</li>
                              ))
                            : ""}
                        </ul>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          disabled={btnDisabled}
                          onClick={onSubmit}>
                          Sign up
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Already have an account?{" "}
                        <Link className="text-primary" to="signin">
                          Sign in
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

export default connect(null, {SignupRequest})(withRouter(Signup));
