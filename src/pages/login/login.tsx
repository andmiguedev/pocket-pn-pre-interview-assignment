import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoLogo from '../../assets/images/logo-dark.png';

class LoginPage extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="form-wrapper">
               <div className="form-container form-center">         
                  <form action="/appointments" className="form-size">
                     <div className="company-logo">
                        <Link to="/dashboard"><img src={demoLogo} alt="Click here to go Dashboard home page"></img></Link>
                     </div>
                     <div className="form-group">
                        <label>Account Email</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label>Account Password</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group text-right">
                        <Link to="/forgot-password">I don't remember my password</Link>
                     </div>
                     <div className="form-group text-center">
                        <button className="btn btn-primary submit-btn" type="submit">
                           Login
                        </button>
                     </div>
                     <div className="text-center signup-link">
                        I need to make an Account <Link to="/register">Register Now</Link>
                     </div>
                  </form>
               </div>
            </div>
         </React.Fragment>
      )
   }
}

export default LoginPage;