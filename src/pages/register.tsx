import React, { Component } from 'react';

class RegisterPage extends Component {
   render() {
      return (
         <div className="account-box">
            <form className="form-signin">
               <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="form-group">
                  <label>Reason to visit the doctor ?</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="form-group checkbox">
                  <label>
                     <input type="checkbox" />I agree to the Privacy policy & Terms of agreement.
                  </label>
               </div>
               <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                     Signup
                  </button>
               </div>
            </form>
         </div>
      )
   }
}

export default RegisterPage;