import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoLogo from '../../assets/images/logo-dark.png';

class RegisterPage extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="form-wrapper">
              <div className="form-container form-center">
                  <form action="/login" className="form-size">
                     <div className="company-logo">
                        <Link to="/dashboard"><img src={demoLogo} alt="Click here to go Dashboard home page" /></Link>
                     </div>
                     <div className="form-group">
                        <label>Patient Name</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label>Patient Email</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label>Strong Password</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label>Contact Number</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label>Reason to visit the doctor ?</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group checkbox">
                        <label>
                           <input type="checkbox" />
                           &nbsp; I agree to the Privacy Policy & Terms of Agreement.
                        </label>
                     </div>
                     <div className="form-group text-center">
                        <button className="btn btn-primary submit-btn" type="submit">
                           Sign up
                        </button>
                     </div>
                     <div className="text-center login-link">
                        Already have an account!&nbsp;
                        <Link to="/login">
                           Take Me to Login
                        </Link>
                     </div>
                  </form>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default RegisterPage;