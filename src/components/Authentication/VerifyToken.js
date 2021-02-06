import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from "../../actions";
import logo from '../../assests/images/logo.png'
function VerifyToken(props) {
  const [token, setToken] = useState("");
  const [error, setError] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(true);


  useEffect(() => {
    //  Preloader
    $("#preloader").fadeOut(500);
    $("#main-wrapper").addClass("show");
    setError(props.errors);
    token.trim() ? setBtnDisabled(false) : setBtnDisabled(true);
  }, [props.errors, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.verifyUser({ activationCode: token }, props.history);
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
                  <div className="card-body">
                    <a className="page-back text-muted" href="signin.html">
                      <span>
                        <i className="fa fa-angle-left"></i>
                      </span>{" "}
                      Back
                    </a>
                    <h3 className="text-center">Verification</h3>
                    <p className="text-center mb-5">
                      Enter the verification code sent by your accout manager.
                    </p>
                    <form>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text pl-4 pr-4">
                              <i className="fas fa-sort-numeric-up"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            name="token"
                            placeholder="Your Token"
                            onChange={(e) => setToken(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          disabled={btnDisabled}
                          onClick={handleSubmit}>
                          Send
                        </button>
                      </div>
                    </form>
                 
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="user-ath-page">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-6 col-md-8  text-center">
    //         <div className="user-ath-logo">
    //           <a href="/">
    //             <img
    //               src="images/logo-sm.png"
    //               srcSet="images/logo-sm2x.png 2x"
    //               alt="icon"
    //             />
    //           </a>
    //         </div>
    //         <div className="user-ath-box">
    //           <h4>Enter your token</h4>
    //           <form className="user-ath-form">
    //             {Object.keys(errors).length !== 0 && (
    //               <div className="note note-lg note-no-icon note-danger">
    //                 <p>{errors.activationCode || errors.message}</p>
    //               </div>
    //             )}
    //             <div className="input-item">
    //               <input
    //                 type="text"
    //                 placeholder="Your Token"
    //                 className="input-bordered"
    //                 name="token"
    //                 onChange={(e) => setToken(e.target.value)}
    //               />
    //             </div>

    //             <div className="gaps"></div>
    //             <div>
    //               <button
    //                 className="btn btn-primary col-md-12"
    //                 onClick={handleSubmit}>
    //                 Verify Token
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="gaps-2x"></div>
    //         <div className="form-note">
    //           Alread a member? <Link to="/signin">Sign In</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { verifyUser })(
  withRouter(VerifyToken)
);
